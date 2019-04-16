package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AdminRepository extends CrudRepository<Admin, String>  {

}
