package com.example.demo.controller;

import com.example.demo.dao.CartDao;
import com.example.demo.model.Disc;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cart")
@AllArgsConstructor
public class CartController {
    CartDao cartDao;
    @PostMapping()
    public void AddDisc( int discId) {
        cartDao.add(discId);
    }

    @GetMapping()
    public List<Disc> getCart() {
        return cartDao.getAll();
    }

    @DeleteMapping()
    public void delete(int discId) {
        cartDao.delete(discId);
    }

    @DeleteMapping("/clear")
    public void clear(){
        cartDao.clear();
    }
}
