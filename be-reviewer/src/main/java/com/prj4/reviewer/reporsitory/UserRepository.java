package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    User findByIdAccount(String idAccount);
    User findByUserName(String userName);

    @Query("select count(c) from User c")
    int getCountUsers();
}
