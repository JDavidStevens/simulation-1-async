update inventory
set product_name= null, price=null, img=null
where shelf_id=$1 and bin_id=$2;