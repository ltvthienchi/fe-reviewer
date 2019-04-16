package com.prj4.reviewer.controller;

import com.prj4.reviewer.request.CommentRequest;
import com.prj4.reviewer.response.CommentResponse;
import com.prj4.reviewer.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class PostRestController {

    private final static String BASE_POST_LINK = "data/posts/";
    @Autowired
    PostService postService;


}
