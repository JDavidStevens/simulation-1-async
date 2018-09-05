Update inventory 
set product_name=$3, price=$4
where shelf_id =$1 and bin_id=$2
returning *;

