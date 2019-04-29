package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.Reviewer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewerRepository extends CrudRepository<Reviewer, String> {
    Reviewer findByIdAccount(String idAccount);
    Reviewer findByEmail(String emailReviewer);
}
