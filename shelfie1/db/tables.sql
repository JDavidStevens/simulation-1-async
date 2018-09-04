Create Table Shelf (
   id integer,
   product_name varchar(75),
   price decimal
);

Create Table Inventory(
    id serial primary key not null,
    Shelf_id varchar(1),
    bin_id int,
    product_name varchar(75),
    price decimal,
    img text
);

