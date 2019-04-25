package com.prj4.reviewer.controller;

import com.prj4.reviewer.config.JwtTokenUtil;
import com.prj4.reviewer.core.AuthToken;
import com.prj4.reviewer.response.LoginUser;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.service.CompanyService;
import com.prj4.reviewer.service.ReviewerService;
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

    @Autowired
    private ReviewerService reviewerService;

    @Autowired
    private CompanyService companyService;

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
        String fullName = null;
        if (user.getTypeAccount() == 1) {
            fullName = companyService.getFullName(user.getIdAccount());
        } else {
            fullName = reviewerService.getFullName(user.getIdAccount());
        }
        final String token = jwtTokenUtil.generateToken(user, user.getTypeAccount());
        return ResponseEntity.ok(new AuthToken(token, user.getTypeAccount(), fullName, user.isActive()));

        //return (List<User>) userService.findAll();
    }

}
