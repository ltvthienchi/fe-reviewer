package com.prj4.reviewer.controller;

import com.prj4.reviewer.config.JwtTokenUtil;
import com.prj4.reviewer.core.AuthToken;
import com.prj4.reviewer.response.LoginUser;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/token")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody LoginUser loginUser) throws AuthenticationException {

//        final Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        loginUser.getUserName(),
//                        loginUser.getPassword()
//                )
//        );
//        SecurityContextHolder.getContext().setAuthentication(authentication);
        final User user = userService.findOne(loginUser.getUserName());
        final String token = jwtTokenUtil.generateToken(user);
        return ResponseEntity.ok(new AuthToken(token, user.getUserName()));

        //return (List<User>) userService.findAll();
    }

}
