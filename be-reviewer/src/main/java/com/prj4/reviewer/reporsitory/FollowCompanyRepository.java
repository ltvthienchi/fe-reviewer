package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.FollowCompany;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FollowCompanyRepository extends CrudRepository<FollowCompany, String>{
    FollowCompany findByIdCompanyAndIdReviewer(String idCompany, String idReviewer);
}
