select p.id, p.name, p.isbn, p.company_id, p.price, c.name as company_name
 from products as p
 join companies as c
 where p.company_id = c.id;
