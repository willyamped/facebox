package com.willy.facebox.controller;

import com.willy.facebox.model.Person;
import com.willy.facebox.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin //to allow react front end to make http request
public class PersonController {
    @Autowired
    private PersonService personService;

    @PostMapping("/add")
    public String add(@RequestBody Person person) {
        personService.savePerson(person);
        return "New person " + person.getName() + " has been added";
    }

    @GetMapping("/getAll")
    public List<Person> getAllStudents() {
        return personService.getAllPersons();
    }

    @DeleteMapping("/delete/{id}")
    public String deletePerson(@PathVariable("id") int id) {
        String name = personService.getPersonById(id).getName();
        personService.deletePerson(id);
        return  name + " whose ID is " + id + " has been deleted";
    }

    @PutMapping("/update/{id}")
    public String updatePerson(@PathVariable("id") int id, @RequestBody Person person) {
        String currentName = personService.getPersonById(id).getName();
        personService.updatePerson(id, person);
        return currentName + " has been replaced by " + person.getName();
    }


}
