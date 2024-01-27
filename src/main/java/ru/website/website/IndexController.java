package ru.website.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import ru.website.website.Disc.Genre;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.PostMapping;




@Controller
public class IndexController {
    @Autowired
    private DiscContainer discContainer;

    @GetMapping("/")
    public String getMethodName() {
        return "index1";
    }
    
    @ModelAttribute
    public void AddDiscs(Model model){
        Genre[] genres = Genre.values();
        for (Genre genre : genres){
            model.addAttribute(genre.toString().toLowerCase(), discContainer.filterByGenres(genre));
        }
    }

    @PostMapping
    public String postMethodName(int id, Model model) {
        discContainer.removeDisc(id);
        AddDiscs(model);
        return "index1";
    }
}
