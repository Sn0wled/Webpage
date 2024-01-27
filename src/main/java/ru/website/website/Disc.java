package ru.website.website;

import lombok.Data;

@Data
public class Disc {
    private int id;
    private final String name;
    private final String coverPath;
    private final String price;
    private final Genre genre;

    public enum Genre{
        POPULAR, CLASSIC, BLUS, JASS, ROCK, METALL, HIPHOP, COUNTY
    }
}
