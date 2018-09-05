Update inventory
set product_name=$3, price=$4, img=$5
where shelf_id =$1 and bin_id=$2;