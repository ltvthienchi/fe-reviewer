package com.prj4.reviewer.service;

import com.prj4.reviewer.entity.User;
import com.prj4.reviewer.reporsitory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service(value = "userService")
public class UserServiceImp implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUserName(username);
//        if(user == null){
//            throw new UsernameNotFoundException("Invalid username or password.");
//        }
//        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), getAuthority());
//    }

    private List<SimpleGrantedAuthority> getAuthority() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
    }

    public List<User> findAll() {
        List<User> list = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public void delete(int id) {

    }


//    public void delete(int id) {
//        userRepository.deleteById(id);
//    }


    public User findOne(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public User findById(String idAccount) {
        return userRepository.findByIdAccount(idAccount);
    }

    @Override
    public boolean isExistingAccount(String userName) {
        User existingUser = userRepository.findByUserName(userName);
        if (existingUser == null) {
            return false;
        }
        return true;
    }

    @Override
    public void updateActiveAcc(String idAccount) {
        User user = userRepository.findByIdAccount(idAccount);
        user.setActive(true);
        userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public void changActive(String idAccount, Boolean active) {
        User user = userRepository.findByIdAccount(idAccount);
        user.setActive(active);
        userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return null;
    }


    @Override
    public void save(User newUser) {
        userRepository.save(newUser);
    }
}
