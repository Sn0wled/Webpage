package com.example.demo.controller;

import com.example.demo.dao.DiscDao;
import com.example.demo.model.Disc;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disc")
@AllArgsConstructor
public class DiscController {
    DiscDao discDao;
    @PostMapping("/add")
    public void add(@RequestBody Disc disc) {
        discDao.Add(disc);
    }

    @GetMapping()
    public List<Disc> getAll(){
        return discDao.GetAll();
    }
}
