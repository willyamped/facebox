package com.willy.facebox.service;

import com.willy.facebox.model.Person;
import com.willy.facebox.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public void savePerson(Person person) {
        personRepository.save(person);
    }

    @Override
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @Override
    public void deletePerson(int id) {
        personRepository.deleteById(id);
    }

    @Override
    public Person getPersonById(int id) {
        return personRepository.getReferenceById(id);
    }

    @Override
    public void updatePerson(int id, Person person) {
        Person currentPerson = personRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("ID provided does not exist"));
        currentPerson.setName(person.getName());
        currentPerson.setUrl(person.getUrl());
        savePerson(currentPerson); //even though ID is not specified, it won't create a new row with new ID like post command
    }
}
