CREATE Table orders(
    OrderId INT PRIMARY KEY,
    CustomerId INT,
    EmployeeId INT,
    OrderDate DATE NOT NULL,
    ShipperId INT,
    FOREIGN KEY (CustomerId) REFERENCES customers(Customerid),
    FOREIGN KEY (EmployeeId) REFERENCES employees(Employeeid),
    FOREIGN KEY (ShipperId) REFERENCES shippers(Shipperid)
)