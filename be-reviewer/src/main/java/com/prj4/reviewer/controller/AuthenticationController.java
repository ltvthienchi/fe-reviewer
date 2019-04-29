package com.prj4.reviewer.controller;

import com.prj4.reviewer.config.JwtTokenUtil;
import com.prj4.reviewer.core.AuthToken;
import com.prj4.reviewer.core.JsonResponse;
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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    public JsonResponse<String> register(@RequestBody LoginUser loginUser) throws AuthenticationException {

//        final Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        loginUser.getUserName(),
//                        loginUser.getPassword()
//                )
//        );
//        SecurityContextHolder.getContext().setAuthentication(authentication);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        final User user = userService.findOne(loginUser.getUserName());
        if (user != null) {
            if (encoder.matches(loginUser.getPassword(), user.getPassAccount())) {
                String fullName = null;
                if (user.getTypeAccount() == 1) {
                    fullName = companyService.getFullName(user.getIdAccount());
                } else {
                    fullName = reviewerService.getFullName(user.getIdAccount());
                }
                final String token = jwtTokenUtil.generateToken(user, user.getTypeAccount(), user.isActive(), fullName);
                return JsonResponse.accept(token);
            } else {
                return JsonResponse.reject("Password is not correct!!!");
            }
        } else {
            return JsonResponse.reject("User is not existing!!!");
        }




        //return (List<User>) userService.findAll();
    }
//    public static void main (String[] args) {
//        String encodedPassword = new BCryptPasswordEncoder().encode("123456");
//        System.out.println("Encode: " + encodedPassword);
//    }

}
