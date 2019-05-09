package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Comment;
import com.prj4.reviewer.reporsitory.CommentRepository;
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

    public List<Comment> getCommentByProductId(String idProduct){
        List<Comment> lstOriginalComment = commentRepository.findByIdProduct(idProduct);
        return lstOriginalComment;
//        List<Comment> lstAfterSortComment = new ArrayList<>();
//        for (int i = 0; i <lstOriginalComment.size(); i++) {
//            if (!lstAfterSortComment.contains(lstOriginalComment.get(i))) {
//                lstAfterSortComment.add(lstOriginalComment.get(i));
//            }
//            for (int j = i + 1; j < lstOriginalComment.size() - 1; j++) {
//                if (lstOriginalComment.get(j).getReply()) {
//                    if (lstOriginalComment.get(j).getIdReply().equals(lstOriginalComment.get(i).getIdComment())) {
//                        lstAfterSortComment.add(lstOriginalComment.get(j));
//                    }
//                }
//            }
//        }
//        return lstAfterSortComment;
    }
}
