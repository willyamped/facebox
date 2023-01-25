package com.willy.facebox.service;

import com.willy.facebox.model.Person;

import java.util.List;

public interface PersonService {
    public Person savePerson(Person person);
    public List<Person> getAllPersons();
}
