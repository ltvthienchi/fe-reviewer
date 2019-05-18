package com.prj4.reviewer.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.prj4.reviewer.config.JwtTokenUtil;
import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.core.JsonResponse;
import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.service.GenerateId;
import com.prj4.reviewer.service.ImageService;
import com.prj4.reviewer.service.ReviewerService;
import com.prj4.reviewer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class GoogleLoginController {

    private final static String SIGN_UP_LINK = "/signup/";
    public static final String CLIENT_ID = "968467163137-dtdndh85b47p1qul44rlf8gpk1ehekct.apps.googleusercontent.com";
    private static final JacksonFactory jacksonFactory = new JacksonFactory();
    private static final HttpTransport transport = new NetHttpTransport();

    @Autowired
    UserService userService;

    @Autowired
    ReviewerService reviewerService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private GenerateId generateId;

    @Autowired
    ImageService imageService;


    @CrossOrigin(origins = "*", maxAge = 3600)
    @PostMapping(SIGN_UP_LINK + "google-generate-token")
    public JsonResponse<String> register(@RequestBody String idTokenString) throws AuthenticationException {

        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jacksonFactory)
                // Specify the CLIENT_ID of the app that accesses the backend:
                .setAudience(Collections.singletonList(CLIENT_ID))
                // Or, if multiple clients access the backend:
                //.setAudience(Arrays.asList(CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3))
                .build();
        try {
            GoogleIdToken idToken = verifier.verify(idTokenString);
            if (idToken != null) {
                GoogleIdToken.Payload payload = idToken.getPayload();

                // Print user identifier
                String userId = payload.getSubject();
                System.out.println("User ID: " + userId);

                // Get profile information from payload
                String email = payload.getEmail();
                boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
                String fullName = (String) payload.get("name");
                String pictureUrl = (String) payload.get("picture");
                //String locale = (String) payload.get("locale");
                String lastName = (String) payload.get("family_name");
                String firstName = (String) payload.get("given_name");
                String idUser = null;
                //BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
                final User user = userService.findOne(email);
                if (user != null) {
                    fullName = reviewerService.getFullName(user.getIdAccount());
                    idUser = reviewerService.getReviewerIdByEmail(email);
                    final String token = jwtTokenUtil.generateToken(user, user.getTypeAccount(),
                            user.isActive(), fullName, idUser);
                    return JsonResponse.accept(token);
                } else {
                    String idReviewer = generateId.generateId("REVIEWER_", new Date());
                    String idAccount = generateId.generateId("ACCOUNT_", new Date());
                    String idImage = generateId.generateId("IMAGE_", new Date());

                    Images images = new Images(idImage, pictureUrl, Constants.IMAGE_AVA);

                    User userAccount = new User(idAccount, email, "",
                            4, true);

                    Reviewer reviewer = new Reviewer(idReviewer, fullName, email, null, new Date(),
                            idAccount, idImage, "6666", 1, firstName , lastName, 2);

                        try {
                            userService.save(userAccount);
                            reviewerService.saveReviewer(reviewer);
                            imageService.saveImage(images);
                            final String token = jwtTokenUtil.generateToken(userAccount, userAccount.getTypeAccount(),
                                    userAccount.isActive(), fullName, idReviewer);
                            return JsonResponse.accept(token);
                        } catch (Exception ex) {
                            return JsonResponse.reject(ex.getMessage());
                        }
                }
            } else {
                return JsonResponse.reject("Error Token");
            }
        } catch (Exception ex) {
            return JsonResponse.reject("");
        }
    }
}
