package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Report;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends CrudRepository<Report, String>{

}
