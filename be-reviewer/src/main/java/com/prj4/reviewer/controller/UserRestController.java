package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.request.ChangePasswordRequest;
import com.prj4.reviewer.request.UseRequest;
import com.prj4.reviewer.service.ChangePasswordService;
import com.prj4.reviewer.service.GenerateId;
import com.prj4.reviewer.service.ReviewerService;
import com.prj4.reviewer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserRestController {
    private final static String BASE_POST_LINK = "/data/user/";
    private final static String SIGN_UP_LINK = "/signup/";

    @Autowired
    UserService userService;

    @Autowired
    ReviewerService reviewerService;

    @Autowired
    ChangePasswordService changePasswordService;

    @Autowired
    GenerateId generateId;

    @Autowired
    public JavaMailSender emailSender;

//    @Autowired
//    private Md5PasswordEncoder md5PasswordEncoder;


    @PostMapping(SIGN_UP_LINK + "createUser")
    public JsonResponse<String> createUser(@RequestBody @Valid UseRequest userRequest) {

        String idReviewer = generateId.generateId("REVIEWER_", new Date());
        String idAccount = generateId.generateId("ACCOUNT_", new Date());

        String encodedPass = new BCryptPasswordEncoder().encode(userRequest.getPassAccount());
        User userAccount = new User(idAccount, userRequest.getUserName(), encodedPass,
                userRequest.getTypeAccount(), Constants.IS_TEST_MODE ? true : userRequest.isActive());

        Reviewer reviewer = new Reviewer(idReviewer, userRequest.getNameAccount(), userRequest.getUserName(), null, new Date(),
                idAccount, null, null, 1, userRequest.getFirstName() , userRequest.getLastName());

        if (!userService.isExistingAccount(userRequest.getUserName()) &&
                !reviewerService.isExistingReviewer(userRequest.getUserName())) {
            try {
                userService.save(userAccount);
                reviewerService.saveReviewer(reviewer);
                if (!Constants.IS_TEST_MODE) {
                    sendHtmlEmail(idAccount);
                }

                return JsonResponse.accept("Success");
            } catch (Exception ex) {
                return JsonResponse.reject(ex.getMessage());
            }

        }
        return JsonResponse.reject("Account is created!");
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @PutMapping(SIGN_UP_LINK + "confirmEmail")
    public JsonResponse<String> confirmAccount(@RequestBody String idAccount) {
        try {
            userService.updateActiveAcc(idAccount);
            return JsonResponse.accept("Success");
        } catch (Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }

    }

    @PostMapping(BASE_POST_LINK + "updatePassword")
    public JsonResponse<String> updatePassword(@RequestBody @Valid ChangePasswordRequest changePasswordRequest) {
        String encodedPass = new BCryptPasswordEncoder().encode(changePasswordRequest.getNewPassword());
        String email = changePasswordRequest.getEmail();
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        //        // Call service
        try {
            changePasswordService.changePassword(email, encodedPass);
            return JsonResponse.accept("Success");
        } catch (Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }
//
//            if (encoder.matches(UseRequest., user.getPassAccount())) {
//                String fullName = null;
//                if (user.getTypeAccount() == 1) {
//                    fullName = companyService.getFullName(user.getIdAccount());
//                } else {
//                    fullName = reviewerService.getFullName(user.getIdAccount());
//                }
//                final String token = jwtTokenUtil.generateToken(user, user.getTypeAccount(), user.isActive(), fullName);
//                return JsonResponse.accept(token);
//            } else {
//                return JsonResponse.reject("Password is not correct!!!");
//            }
    }


    public void sendHtmlEmail(String idAccount) throws MessagingException {

        MimeMessage message = emailSender.createMimeMessage();

        boolean multipart = true;

        MimeMessageHelper helper = new MimeMessageHelper(message, multipart, "utf-8");

        String htmlMsg = "<h3>Your Register is successfully !!!</h3>"
                +"<a src='http://localhost:4200/register-confirmation?idAccount="+ idAccount +"></a>";

        message.setContent(htmlMsg, "text/html");

        helper.setTo(Constants.FRIEND_EMAIL);

        helper.setSubject("Test send HTML email");

        this.emailSender.send(message);

        //return "Email Sent!";
    }
}


