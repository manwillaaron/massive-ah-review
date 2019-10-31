delete from expenses
where id = $1
returning *;