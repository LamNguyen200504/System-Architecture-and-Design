package model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("GroceryItem") // Document annotation to specify the collection name that will be used by the model
public class GroceryItem {

    @Id // primary key
    private String id;

    private String name;
    private int quantity;
    private String category;

    public GroceryItem(String id, String name, int quantity, String category) {
        super();
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.category = category;
    }

}
