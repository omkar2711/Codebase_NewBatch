use batch_10;

DROP TABLE Category;
DROP TABLE PRODUCT;

CREATE TABLE Product (
	productId INTEGER PRIMARY KEY AUTO_INCREMENT,
    productName VARCHAR(10) NOT NULL,
    CategoryId INT,
    price DECIMAL(10,2) NOT NULL,
    
    CONSTRAINT fk_category
		FOREIGN KEY (CategoryId)
        REFERENCES Category(CategoryId)
)ENGINE = InnoDB;

CREATE TABLE Category (
	CategoryId INTEGER PRIMARY KEY AUTO_INCREMENT,
    CategoryName VARCHAR(10),
    Description VARCHAR(10)
);

INSERT INTO Category( CategoryName, Description)
VALUES ( "X", "ABC"),
 ( "Y", "EFG"),
 ("Z", "HIJ");
 
 INSERT INTO Product(ProductName, price, categoryId)
 VALUES ("A", 180, 1),
 ("B", 190, 1),
 ("C", 100, 2);
 
  INSERT INTO Product(ProductName, price)
  VALUES ("D", 500);
 
 
 SELECT * FROM Product;
 
 SELECT * FROM Category;
 
 DELETE FROM Category
 WHERE CategoryID > 3;
 
 -- INNER JOIN
SELECT Product.ProductId, Product.ProductName, Category.CategoryName 
FROM Product INNER JOIN Category
ON Product.CategoryId = Category.CategoryID;

-- LEFT JOIN
SELECT P.ProductID, P.ProductName, C.CategoryName
FROM Product P LEFT JOIN Category C
ON P.CategoryId = C.CategoryID;

-- RIGHT JOIN
SELECT P.ProductId, P.ProductName, C.CategoryName
FROM Product P RIGHT JOIN Category C
ON P.CategoryID = C.CategoryID;
