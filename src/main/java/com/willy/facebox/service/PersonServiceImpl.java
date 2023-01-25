package com.willy.facebox.service;

import com.willy.facebox.model.Person;
import com.willy.facebox.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public Person savePerson(Person person) {
        return personRepository.save(person);
    }
}
