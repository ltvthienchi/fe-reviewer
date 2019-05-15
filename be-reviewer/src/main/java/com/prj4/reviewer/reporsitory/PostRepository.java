package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Post;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface PostRepository extends CrudRepository<Post, String>{
    List<Post> findAllByOrderByDtCreatedDesc();
    List<Post> findByIdCompanyOrderByDtCreatedDesc(String idCompany);
    Post findByIdProduct(String idProduct);

    @Transactional
    void removeByIdProduct(String idProduct);
}
