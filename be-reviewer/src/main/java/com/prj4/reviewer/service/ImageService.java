package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Images;
import com.prj4.reviewer.reporsitory.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    ImagesRepository imagesRepository;

    public void saveImage(Images img) {
        imagesRepository.save(img);
    }
    public String getImagePathById(String idImage) {
        return imagesRepository.findByIdImage(idImage).getImgPath();
    }
    public void deleteImage(String idImage) {
        imagesRepository.removeByIdImage(idImage);
    }
    public Images getImagesById(String idImage) {
        return imagesRepository.findByIdImage(idImage);
    }
}
