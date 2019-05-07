package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Admin;
import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.reporsitory.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    AdminRepository adminRepository;

    public Admin findByUserName(String username) {
        return adminRepository.findByEmailAdmin(username);
    }

    public String findAdminIdByUsername(String userName) {
        return adminRepository.findByEmailAdmin(userName).getIdAdmin();
    }
}
