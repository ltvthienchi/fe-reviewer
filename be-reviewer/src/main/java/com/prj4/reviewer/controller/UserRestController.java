package com.prj4.reviewer.controller;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Comment;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.request.CommentRequest;
import com.prj4.reviewer.request.EditCommentRequest;
import com.prj4.reviewer.request.UseRequest;
import com.prj4.reviewer.response.CommentResponse;
import com.prj4.reviewer.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import java.util.Date;
import java.util.List;

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
    GenerateId generateId;

    @Autowired
    CommentService commentService;

    @Autowired
    public JavaMailSender emailSender;

    @Autowired
    HistoryService historyService;


    @PostMapping(SIGN_UP_LINK + "createUser")
    public JsonResponse<String> createUser(@RequestBody @Valid UseRequest userRequest) {

        String idReviewer = generateId.generateId("REVIEWER_", new Date());
        String idAccount = generateId.generateId("ACCOUNT_", new Date());

        String encodedPass = new BCryptPasswordEncoder().encode(userRequest.getPassAccount());
        User userAccount = new User(idAccount, userRequest.getUserName(), encodedPass,
                userRequest.getTypeAccount(), Constants.IS_TEST_MODE ? true : userRequest.isActive());

        Reviewer reviewer = new Reviewer(idReviewer, userRequest.getNameAccount(), userRequest.getUserName(), null, new Date(),
                idAccount, "7777", "6666", 1, userRequest.getFirstName() , userRequest.getLastName(), 1);

        if (!userService.isExistingAccount(userRequest.getUserName()) &&
                !reviewerService.isExistingReviewer(userRequest.getUserName())) {
            try {
                userService.save(userAccount);
                reviewerService.saveReviewer(reviewer);
                if (!Constants.IS_TEST_MODE) {
                    sendHtmlEmail(idAccount, userRequest.getUserName());
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

    public void sendHtmlEmail(String idAccount, String email) throws MessagingException {

        MimeMessage message = emailSender.createMimeMessage();

        boolean multipart = true;

        MimeMessageHelper helper = new MimeMessageHelper(message, multipart, "utf-8");

        String linkConf = "http://localhost:4200/register-confirmation?idAccount=" + idAccount;
        String htmlMsg = "<h3>Your Register is successfully !!!</h3>"
                +"<a href=\'"+ linkConf +"\'>Link To Confirm</a>";

        message.setContent(htmlMsg, "text/html");

        helper.setTo(email);

        helper.setSubject("Register Confirmation Email");

        this.emailSender.send(message);

        //return "Email Sent!";
    }

    @PostMapping(BASE_POST_LINK + "createComment")
    public JsonResponse<String> createComment(@RequestBody CommentRequest commentRequest) {
        String idComment = generateId.generateId("COMMENT_", new Date());
        boolean isReply = commentRequest.getIdReply() != null ? true : false;
        Comment comment = new Comment(idComment, commentRequest.getIdProduct(), commentRequest.getIdReviewer(),
                commentRequest.getIdReply(), isReply, commentRequest.getContent(), new Date(), commentRequest.getRole_user(), false);
        try {
            commentService.createComment(comment);
            historyService.createCommentHistory(commentRequest.getIdReviewer(),
                    commentRequest.getContent(), commentRequest.getIdProduct());
            return JsonResponse.accept("Success");
        } catch (Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }
    }

    @PostMapping(BASE_POST_LINK + "getCommentByProductId")
    public List<CommentResponse> getCommentByProductId(@RequestBody String idProduct) {
        return commentService.getCommentByProductId(idProduct);
    }

    @PostMapping(BASE_POST_LINK + "reportComment")
    public JsonResponse<String> reportComment(@RequestBody String idComment) {
        try {
            commentService.reportComment(idComment);
            return JsonResponse.accept("success");
        } catch(Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }
    }

    @PostMapping(BASE_POST_LINK + "editComment")
    public JsonResponse<String> editComment(@RequestBody EditCommentRequest editCommentRequest) {
        try {
            Comment comment = commentService.getCommentByIdComment(editCommentRequest.getIdComment());
            comment.setContent(editCommentRequest.getContentComment());
            commentService.createComment(comment);
            return JsonResponse.accept("success");
        } catch(Exception ex) {
            return JsonResponse.reject(ex.getMessage());
        }
    }
}


