package com.prj4.reviewer.service;

import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Service
public class GenerateId {
    public String generateId(String typeId, Date dateGenerate) {
        long miliseconds = dateGenerate.getTime();
        return typeId + String.valueOf(miliseconds);
    }
}
