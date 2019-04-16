package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.FeedbackCompany;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackCompanyRepository extends CrudRepository<FeedbackCompany, String> {
}
