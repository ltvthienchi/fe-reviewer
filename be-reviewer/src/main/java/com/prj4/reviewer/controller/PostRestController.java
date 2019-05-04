package com.prj4.reviewer.controller;

import com.prj4.reviewer.request.PostRequest;
import com.prj4.reviewer.response.PostResponse;
import com.prj4.reviewer.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.prj4.reviewer.entity.Post;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class PostRestController {

    private final static String BASE_POST_LINK = "/data/posts/";

    @Autowired
    PostService postService;

    @GetMapping(BASE_POST_LINK + "getAll")
    public List<Post> getAll() {
        return postService.getAllPost();
    }


}
