package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ProductReporsitory extends CrudRepository<Product, String> {
    Product findByIdProduct(String idProduct);
    List<Product> findAllByOrderByDtCreatedDesc();
    List<Product> findAllByOrderByNumRatingDesc();

    @Query("Select c from Product c where c.nameProduct like %:query%")
    List<Product> searchProduct(String query);

    @Transactional
    void removeByIdProduct(String idProduct);

    @Query("Select count(c) from Product c")
    int getCountProducts();

}
