package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.CSKH;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CSKHRepository extends CrudRepository<CSKH, String> {

}
