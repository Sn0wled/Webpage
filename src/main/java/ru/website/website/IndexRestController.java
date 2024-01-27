package ru.website.website;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class IndexRestController {

    @Autowired
    private DiscContainer discContainer;

    @PostMapping("/to_cart")
    public AddToCartResult isAdded(int id, Model model) {
        return new AddToCartResult(discContainer.removeDisc(id));
    }
    
}
