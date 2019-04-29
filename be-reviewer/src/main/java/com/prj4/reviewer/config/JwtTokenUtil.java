package com.prj4.reviewer.config;


import com.prj4.reviewer.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;
import java.util.function.Function;

import static com.prj4.reviewer.core.Constants.ACCESS_TOKEN_VALIDITY_SECONDS;
import static com.prj4.reviewer.core.Constants.SIGNING_KEY;

@Component
public class JwtTokenUtil implements Serializable {

    public String getUserNameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(SIGNING_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public String generateToken(User user, int typeAccount, boolean isActive, String fullName) {
        return doGenerateToken(user.getUserName(), typeAccount, isActive, fullName);
    }

    private String doGenerateToken(String subject, int typeAccount, boolean isActive, String fullName) {

        Claims claims = Jwts.claims().setSubject(subject);
        if (typeAccount == 1) {
            claims.put("scopes", Arrays.asList(new SimpleGrantedAuthority("ROLE_COMPANY")));
        } else {
            claims.put("scopes", Arrays.asList(new SimpleGrantedAuthority("ROLE_NORMAL")));
        }
        claims.put("isActive", Boolean.valueOf(isActive));
        claims.put("fullName", fullName);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuer("http://devglan.com")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALIDITY_SECONDS*1000))
                .signWith(SignatureAlgorithm.HS256, SIGNING_KEY)
                .compact();
    }

    public Boolean validateToken(String token, User user) {
        final String username = getUserNameFromToken(token);
        return (
                username.equals(user.getUserName())
                        && !isTokenExpired(token));
    }

}
