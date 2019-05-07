package com.prj4.reviewer.controller;

import com.prj4.reviewer.config.JwtTokenUtil;
import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Admin;
import com.prj4.reviewer.request.LoginUser;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.service.AdminService;
import com.prj4.reviewer.service.CompanyService;
import com.prj4.reviewer.service.ReviewerService;
import com.prj4.reviewer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

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

    @Autowired
    private AdminService adminService;

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
                String idUser = null;
                if (user.getTypeAccount() == 1) {
                    fullName = companyService.getFullName(user.getIdAccount());
                    idUser = companyService.getCompanyId(loginUser.getUserName());
                } else {
                    fullName = reviewerService.getFullName(user.getIdAccount());
                    idUser = reviewerService.getReviewerIdByEmail(loginUser.getUserName());
                }
                final String token = jwtTokenUtil.generateToken(user, user.getTypeAccount(),
                        user.isActive(), fullName, idUser);
                return JsonResponse.accept(token);
            } else {
                return JsonResponse.reject("Password is not correct!!!");
            }
        } else {
            return JsonResponse.reject("User is not existing!!!");
        }
    }

    @RequestMapping(value = "/generate-token-admin", method = RequestMethod.POST)
    public JsonResponse<String> registerAdmin(@RequestBody LoginUser loginUser) throws AuthenticationException {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        final Admin admin = adminService.findByEmailAdmin(loginUser.getUserName());
        if (admin != null) {
            if (encoder.matches(loginUser.getPassword(), admin.getPassAdmin())) {
                String fullName = admin.getFullNameAdmin();
                final String token = jwtTokenUtil.generateToken(admin, 3, admin.isActive(), fullName, admin.getIdAdmin());
                return JsonResponse.accept(token);
            } else {
                return JsonResponse.reject("Password is not correct!!!");
            }
        } else {
            return JsonResponse.reject("User is not existing!!!");
        }
    }

}
