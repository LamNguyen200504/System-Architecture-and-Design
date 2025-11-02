package com.example.mdbspringboot;

import model.GroceryItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import repository.ItemRepository;

import java.util.List;
import java.util.ArrayList;

@SpringBootApplication
@EnableMongoRepositories
public class MdbSpringBootApplication implements CommandLineRunner {

    @Autowired
    ItemRepository groceryItemRepo;

    @Autowired
    CustomItemRepository customRepo;

    List<GroceryItem> itemList = new ArrayList<GroceryItem>();

    public static void main(String[] args) {
        SpringApplication.run(MdbSpringBootApplication.class, args);
    }
}
