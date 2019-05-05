package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.FeedbackAdmin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FeedbackAdminRepository extends CrudRepository<FeedbackAdmin, String> {

}
