CREATE TABLE products(
    Productid int PRIMARY KEY,
    Productname VARCHAR(100),
    Supplierid int,
    Categoryid int,
    Unit VARCHAR(255),
    Price FLOAT,
    Foreign Key (Supplierid) REFERENCES suppliers(Supplierid),
    Foreign Key (Categoryid) REFERENCES categories(Categoryid)
)