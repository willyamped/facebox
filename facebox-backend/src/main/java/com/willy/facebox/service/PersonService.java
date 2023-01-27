package com.willy.facebox.service;

import com.willy.facebox.model.Person;

import java.util.List;

public interface PersonService {
    public void savePerson(Person person);
    public List<Person> getAllPersons();
    public void deletePerson(int id);
    public Person getPersonById(int id);
}
