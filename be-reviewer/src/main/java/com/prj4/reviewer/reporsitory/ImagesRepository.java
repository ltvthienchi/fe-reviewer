package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Images;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ImagesRepository extends CrudRepository<Images, String> {
    Images findByIdImage(String idImage);

    @Transactional
    void removeByIdImage(String idImage);
}
