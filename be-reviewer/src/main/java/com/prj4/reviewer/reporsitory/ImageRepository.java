package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Images;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Images, String> {
    Images findByIdImage (String idImage);
}
