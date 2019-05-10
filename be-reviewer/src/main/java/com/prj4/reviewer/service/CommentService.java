package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Comment;
import com.prj4.reviewer.reporsitory.CommentRepository;
import com.prj4.reviewer.response.CommentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    public void createComment(Comment comment) {
        commentRepository.save(comment);
    }

    public List<CommentResponse> getCommentByProductId(String idProduct){
        List<Comment> lstOriginalComment = commentRepository.findByIdProduct(idProduct);
        for(Comment c: lstOriginalComment) {
//            CommentResponse commentResponse = new CommentResponse(c.getContent(), c.getDateCreate(), c.getIdComment(),
//                    idProduct, c.getIdReply(), c.getIdReviewer(), c);
        }
        return null;
    }
}
