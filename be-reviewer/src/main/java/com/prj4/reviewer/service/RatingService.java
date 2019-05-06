package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.RatingPost;
import com.prj4.reviewer.reporsitory.RatingPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.lang.Iterable.*;

@Service
public class RatingService {

    @Autowired
    RatingPostRepository ratingPostRepository;

    public List<RatingPost> getAllRating() {
        return (List<RatingPost>) ratingPostRepository.findAll();
    }

    public void saveRating(RatingPost ratingPost) {
        ratingPostRepository.save(ratingPost);
    }

    public RatingPost findByIdRating(String id) {
        return ratingPostRepository.findByIdRatingProduct(id);
    }

    public RatingPost findByIdReviewer(String id) {
        return ratingPostRepository.findByIdReviewer(id);
    }

    public RatingPost findByIdProduct(String id) {
        return ratingPostRepository.findByIdProduct(id);
    }

}
