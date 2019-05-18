package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.ReviewCompany;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewCompanyRepository extends CrudRepository<ReviewCompany, String> {
    ReviewCompany findByIdReviewer(String idReviewer);

    @Query("SELECT AVG(c.ratingComp) AS AveragePrice FROM ReviewCompany c where c.idCompany = :idCompany")
    float getAvgIdCompany(String idCompany);

    List<ReviewCompany> findByIdCompany(String idCompany);

    ReviewCompany findByIdReviewerAndIdCompany(String idReviewer, String idCompany);
}
