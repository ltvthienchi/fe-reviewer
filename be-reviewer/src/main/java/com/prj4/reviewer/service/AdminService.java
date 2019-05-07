package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.Admin;
import com.prj4.reviewer.reporsitory.AdminRepository;
import com.prj4.reviewer.request.AdminBlockRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Date;
import java.util.List;

@Service
public class AdminService {

    @Autowired
    AdminRepository adminRepository;
    @Autowired
    GenerateId generateId;

    public Admin findByIdAdmin(String id){
        return adminRepository.findByIdAdmin(id);
    }

    public Admin findByEmailAdmin(String username) {
        return adminRepository.findByEmailAdmin(username);
    }

    public List<Admin> findAllAdmin(){
        return (List<Admin>) adminRepository.findAll();
    }

    public void editAdmin(Admin admin){

        adminRepository.save(admin);
    }

    public void blockAdmin(AdminBlockRequest adminBlockRequest){
        Admin admin = adminRepository.findByIdAdmin(adminBlockRequest.getIdAdmin());
        admin.setActive(adminBlockRequest.isActive());
    }

    public void save(Admin admin){
        adminRepository.save(admin);

    }


}
