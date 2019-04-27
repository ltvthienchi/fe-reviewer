package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.User;

import java.util.List;

public interface UserService {

    void save(User user);
    List<User> findAll();
    void delete(int id);

    User findOne(String username);

    User findById(int id);

    //UserDto update(UserDto userDto);

    boolean isExistingAccount(String userName);
}
