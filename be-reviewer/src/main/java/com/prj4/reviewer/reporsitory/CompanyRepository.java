package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Company;
import com.prj4.reviewer.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CompanyRepository extends CrudRepository<Company, String> {
    Company findByIdAccount(String idAccount);
    Company findByEmailCompany(String emailCompany);
}
