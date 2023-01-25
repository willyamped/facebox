package com.willy.facebox.controller;

import com.willy.facebox.model.Person;
import com.willy.facebox.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/person")
public class PersonController {
    @Autowired
    private PersonService personService;

    @PostMapping("/add")
    public String add(@RequestBody Person person) {
        personService.savePerson(person);
        return "New person " + person.getName() + " has been added";
    }

}
