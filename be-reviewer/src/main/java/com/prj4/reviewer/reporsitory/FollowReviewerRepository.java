package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.FollowReviewer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FollowReviewerRepository extends CrudRepository<FollowReviewer, String>{

}
