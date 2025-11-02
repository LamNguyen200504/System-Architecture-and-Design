package repository;

import model.GroceryItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ItemRepository extends MongoRepository<GroceryItem, String> {

    @Query("{name:'?0") // name field
    GroceryItem findItemByName(String name); // requires a parameter for the query

    @Query(value="{category:'?0'}", fields="{'name' : 1, 'quantity' : 1}") // get a particular category's item
    List<GroceryItem> findAll(String category);

    public long count(); // inherited method from MongoRepository
}
