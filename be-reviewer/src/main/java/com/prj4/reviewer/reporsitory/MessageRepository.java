package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends CrudRepository<Message, String> {

}
