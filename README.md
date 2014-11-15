Zivame Hackathon
================

Node.JS Routers
================

getFeaturedProducts <br />
getProducts<br />
getProduct<br />
updateCart<br />
addUser<br />


Mongodb Collections
===================

category<br />
	catId<br />
	catName<br />
	catDescription<br />
	catImage<br />
		
product<br />
	prodId<br />
	catId<br />
	prodDescr<br />
	prodImage<br />
	prodColorId<br />
	prodSizeId<br />
	prodPrice<br />
	featured<br />
	
color<br />
	colorId<br />
	colorName<br />
	
size<br />
	sizeId<br />
	sizeDesc<br />

user<br />
	userId<br />
	userName<br />
	userPassword<br />
	userDob<br />
	
user_shipping_address<br />
	shippingAdrsId<br />
	userId<br />
	address1<br />
	address2<br />
	city<br />
	state<br />
	country<br />
	zipcode<br />
	phone<br />

user_billing_address<br />
	billingAdrsId<br />
	userId<br />
	address1<br />
	address2<br />
	city<br />
	state<br />
	country<br />
	zipcode<br />
	phone<br />
	
orders<br />
	orderId<br />
	userId<br />
	prodId<br />
	orderAmount<br />
	discountAmount<br />
	totalAmount<br />
	createdOn<br />
	<br />
order_item<br />
	itemId<br />
	orderId<br />
	prodId<br />
	qty<br />
	colorId<br />
	sizeId<br />
	unitPrice<br />
	
user_cart<br />
	cartId<br />
	userId<br />
	data<br />
	updated<br />
	
	
MongoDB Statements:
-------------------

use showzoo;
db.createCollection("product");
db.createCollection("category");
db.createCollection("color");
db.createCollection("size");
db.createCollection("user");
db.createCollection("user_shipping_address");
db.createCollection("user_billing_address");
db.createCollection("orders");
db.createCollection("user_cart");
show collections;

Mongodb Documents:
==================

cats = [{"catId" : "1", "catName" : "Men", "catDescription" : "Men's Shoes",  "catImage" : "cat1.png"},{"catId" : "2", "catName" : "Women", "catDescription" : "Women's Shoes",  "catImage" : "cat2.png"},{"catId" : "3", "catName" : "Kid", "catDescription" : "Kid's Shoes",  "catImage" : "cat3.png"}]

colors = [{"colorId" : "1", "colorName": "White"},{"colorId" : "2", "colorName": "Gray"},{"colorId" : "3", "colorName": "Red"},{"colorId" : "4", "colorName": "Brown"}];

sizes = [{"sizeId": "1", "sizeName": "6"},{"sizeId": "2", "sizeName": "7"},{"sizeId": "3", "sizeName": "8"},{"sizeId": "4", "sizeName": "9"},];

prod1 = [{"prodId" : "1","catId" : "1","prodDescr" : "Island Coffee Brown","prodImage" : "island_coffee_brown.jpg", "prodColorId" : "1","prodSizeId" : "1","prodPrice" : "120","featured" : "1"}]

prod2 = [{"prodId" : "2","catId" : "1","prodDescr" : "Island White","prodImage" : "island_white.jpg", "prodColorId" : "1","prodSizeId" : "2","prodPrice" : "120","featured" : "0"}]


db.product.update({"prodId":"2"},{$set: {"prodId" : "2","catId" : "1","prodDescr" : "Island White","prodImage" : "island_white.jpg", "prodColorId" : "1","prodSizeId" : "2","prodPrice" : "120","featured" : "0"}})



