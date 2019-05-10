package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Comment;
import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.reporsitory.CommentRepository;
import com.prj4.reviewer.reporsitory.ReviewerRepository;
import com.prj4.reviewer.response.CommentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;
    @Autowired
    ReviewerRepository reviewerRepository;
    @Autowired
    ImageService imageService;

    public void createComment(Comment comment) {
        commentRepository.save(comment);
    }

    public List<CommentResponse> getCommentByProductId(String idProduct){
        List<Comment> lstOriginalComment = commentRepository.findByIdProduct(idProduct);
        List<CommentResponse> lstResult = new ArrayList<>();
        for(Comment c: lstOriginalComment) {
            Reviewer reviewer = reviewerRepository.findByIdReviewer(c.getIdReviewer());
            String imgAvatar = imageService.getImagePathById(reviewer.getImgAvatar());
            CommentResponse commentResponse = new CommentResponse(c.getContent(), c.getDateCreate(), c.getIdComment(),
                    idProduct, c.getIdReply(), c.getIdReviewer(), c.getReply(), imgAvatar, reviewer.getFullName());
            lstResult.add(commentResponse);
        }
        return lstResult;
    }
}
