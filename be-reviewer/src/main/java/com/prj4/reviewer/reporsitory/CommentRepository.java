package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, String> {
    List<Comment> findByIdProduct(String idProduct);
}
