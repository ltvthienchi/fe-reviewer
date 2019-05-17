package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.FollowCompany;
import com.prj4.reviewer.reporsitory.FollowCompanyRepository;
import com.prj4.reviewer.request.FollowCompanyRequest;
import com.prj4.reviewer.request.RequestCheckFollow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class FollowCompanyService {
    @Autowired
    FollowCompanyRepository followCompanyRepository;
    @Autowired
    GenerateId generateId;

    public boolean checkIsFollow(RequestCheckFollow requestCheckFollow) {
        FollowCompany followCompany = followCompanyRepository.findByIdCompanyAndIdReviewer(requestCheckFollow.getIdCompany(),
                requestCheckFollow.getIdUser());
        if (followCompany != null) {
            return followCompany.isFollow();
        } else {
            return false;
        }
    }

    public void followCompany(FollowCompanyRequest followCompanyRequest) {
        FollowCompany followCompany = followCompanyRepository.findByIdCompanyAndIdReviewer(followCompanyRequest.getIdCompany(),
                followCompanyRequest.getIdFollower());
        if (followCompany != null) {
            followCompany.setFollow(followCompanyRequest.isFollow());
        } else {
            String idFollowComp = generateId.generateId("FOLLOW_", new Date());
            followCompany = new FollowCompany(idFollowComp, followCompanyRequest.getIdFollower(),
                    followCompanyRequest.getIdCompany(), followCompanyRequest.isFollow());
        }
        followCompanyRepository.save(followCompany);
    }

    public List<String> getListCompanyIsFollowed(String idReviewer) {
        List<String> lstIdCompany = new ArrayList<>();
        List<FollowCompany> lst = followCompanyRepository.getListCompanyIsFollowed(idReviewer);
        for (FollowCompany c : lst) {
            lstIdCompany.add(c.getIdCompany());
        }
        return lstIdCompany;
    }
}
