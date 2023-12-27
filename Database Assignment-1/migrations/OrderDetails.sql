CREATE Table orderDetails(
    OrderDetailid int PRIMARY KEY,
    Orderid int,
    Productid int,
    Quantity int,
    Foreign Key (Orderid) REFERENCES orders(Orderid),
    Foreign Key (Productid) REFERENCES products(Productid)
)