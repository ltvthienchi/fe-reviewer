package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.FollowCompany;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FollowCompanyRepository extends CrudRepository<FollowCompany, String>{
    FollowCompany findByIdCompanyAndIdReviewer(String idCompany, String idReviewer);

    @Query("Select c from FollowCompany c where c.idReviewer = :idReviewer AND c.isFollow = 'true'")
    List<FollowCompany> getListCompanyIsFollowed(String idReviewer);


    int countAllByIdCompanyAndIsFollow(String idCompany, Boolean isFollow);
}
