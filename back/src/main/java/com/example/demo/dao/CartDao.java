package com.example.demo.dao;

import com.example.demo.model.Disc;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class CartDao {
    JdbcTemplate jdbcTemplate;
    public void add(int discId) {
        jdbcTemplate.update("insert into CART values (?)", discId);
    }
    public void delete(int discId) {
        jdbcTemplate.update("delete from CART where DISC_ID = ?", discId);
    }

    public List<Disc> getAll() {
        RowMapper<Disc> rowMapper = BeanPropertyRowMapper.newInstance(Disc.class);
        return jdbcTemplate.query("select * from DISC join CART on (DISC_ID = id)", rowMapper);
    }

    public void clear() {
        jdbcTemplate.update("delete from cart");
    }
}
