package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<Post, String>{

}
