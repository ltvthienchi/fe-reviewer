package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Reviewer;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.reporsitory.ReviewerRepository;
import com.prj4.reviewer.reporsitory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChangePasswordService {
    @Autowired
    ReviewerRepository reviewerRepository;

    @Autowired
    UserRepository userRepository;

    public void changePassword(String email, String NewPassword)
    {
        Reviewer reviewer = reviewerRepository.findByEmail(email);
        User user = userRepository.findByIdAccount(reviewer.getIdAccount());
        user.setPassAccount(NewPassword);
        userRepository.save(user);
    }
}
