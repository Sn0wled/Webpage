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
public class DiscDao {
    JdbcTemplate jdbcTemplate;
    public void Add(Disc disc) {
        jdbcTemplate.update("insert into DISC values (default, ?, ?, ?, ?)",
                disc.getName(),
                disc.getCoverPath(),
                disc.getPrice(),
                disc.getGenre());
    }

    public List<Disc> GetAll() {
        RowMapper<Disc> rowMapper = BeanPropertyRowMapper.newInstance(Disc.class);
        return jdbcTemplate.query("select * from disc", rowMapper);
    }
}
