package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Comment;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, String> {
    List<Comment> findByIdProduct(String idProduct);

    @Query("Select c from Comment c where c.isReport = 'true'")
    List<Comment> getAllCommentReported();

    @Transactional
    @Modifying
    @Query("DELETE from Comment c where c.idComment = :idComment or c.idReply = :idComment")
    void getAllCommentReported(String idComment);

    Comment findByIdComment(String idComment);
}
