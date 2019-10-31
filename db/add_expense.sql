insert into expenses 
( amount, store, day_of_year, 
description, year)
values
($1,$2,$3,$4,'2019');

select * from expenses;