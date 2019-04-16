package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.RatingPost;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RatingPostRepository extends CrudRepository<RatingPost, String> {

}
