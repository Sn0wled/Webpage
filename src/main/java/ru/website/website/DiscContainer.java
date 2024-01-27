package ru.website.website;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import ru.website.website.Disc.Genre;

public class DiscContainer {
    List<Disc> discs = new ArrayList<>();
    public  DiscContainer(){
        discs.addAll( Arrays.asList(
            new Disc("Bat Out of Hell", "img/bat_out_of_hell.jpg", "123", Genre.POPULAR),
            new Disc("Greatest Hits", "img/greatest_hits.jpg", "123", Genre.POPULAR),
            new Disc( "The Woman in Me", "img/the-woman-in-me.png", "123", Genre.POPULAR),
            new Disc( "Born in the U.S.A.", "img/born-in-the-usa.jpg", "123", Genre.POPULAR),
            new Disc( "Чайковский. На все времена", "img/chaykovsky.jpeg", "123", Genre.CLASSIC),
            new Disc( "Моцарт. 46 симфоний", "img/mozart.jpeg", "123", Genre.CLASSIC),
            new Disc( "Vivaldi. Concerti per violino Violoncello e Archi", "img/vivaldi.jpg", "123", Genre.CLASSIC),
            new Disc( "The Best of Chopin", "img/chopin.jpg", "123", Genre.CLASSIC),
            new Disc( "Mojo Helden", "img/mojo_helden.jpg", "123", Genre.BLUS),
            new Disc( "Bottleneck Sessions", "img/bottleneck_sessions.jpg", "123", Genre.BLUS),
            new Disc( "Talkin' That Talk", "img/talkin-that-talk.jpg", "123", Genre.BLUS),
            new Disc( "Two Pines", "img/two-pines.jpg", "123", Genre.BLUS),
            new Disc( "Fly or Die Fly or Die Fly or Die", "img/fly-or-die.png", "123", Genre.JASS),
            new Disc( "Urban Jazzscape", "img/urban-jazzscape.jpg", "123", Genre.JASS),
            new Disc( "My Sixties in Jazz", "img/my-sixties-in-jazz.jpg", "123", Genre.JASS),
            new Disc( "Late Night Improvs", "img/late-night-improvs.jpg", "123", Genre.JASS),
            new Disc( "Burning Castles", "img/burning-castles.jpg", "123", Genre.ROCK),
            new Disc( "Recurring", "img/recurring.jpg", "123", Genre.ROCK),
            new Disc( "Severance", "img/severance.jpg", "123", Genre.ROCK),
            new Disc( "Electric Sounds", "img/electric-sounds.jpg", "123", Genre.ROCK),
            new Disc( "IDENTITY", "img/identity.jpg", "123", Genre.METALL),
            new Disc( "A Dark Euphony", "img/a-dark-euphony.jpg", "123", Genre.METALL),
            new Disc( "Everfrost", "img/everfrost.jpg", "123", Genre.METALL),
            new Disc( "Imperium", "img/imperium.jpg", "123", Genre.METALL),
            new Disc( "Midlife Crisis", "img/midlife-crisis.jpg", "123", Genre.HIPHOP),
            new Disc( "BasketCase", "img/basket-case.jpg", "123", Genre.HIPHOP),
            new Disc( "Pulingo", "img/pulingo.jpg", "123", Genre.HIPHOP),
            new Disc( "Ringue da Vida", "img/ringua.jpg", "123", Genre.HIPHOP),
            new Disc( "Step by Step", "img/step-by-step.jpg", "123", Genre.COUNTY),
            new Disc( "The Moment", "img/the-moment.jpg", "123", Genre.COUNTY),
            new Disc( "Melbourne Sentimental", "img/melbourne-sentimental.jpg", "123", Genre.COUNTY),
            new Disc( "Jeans On", "img/jeans-on.jpg", "123", Genre.COUNTY)
        ));
        for (int i = 0; i < discs.size(); i++){
            discs.get(i).setId(i);
        }
    }
    
    public boolean removeDisc(int id){
        return discs.removeIf(x -> x.getId()==id);
    }

    public Iterable<Disc> filterByGenres( Genre genre){
        return discs.stream()
        .filter(x -> x.getGenre().equals(genre))
        .collect(Collectors.toList());
    }
}
