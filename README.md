<h1>Zivame Hackathon</h1>

Tech Stack
================
HTML5, CSS3, jQuery, Node.JS, MongoDB, PhoneGap <br />

Authors
================
Saikumar K (http://in.linkedin.com/in/saikumark) <br />
Vishwanath Kolkar (https://www.linkedin.com/profile/view?id=78942729)

About Saikumar K
------------------------------------------------
	Working in Yahoo (from HCL) for past 4.5 years. <br /><br /> 
	Worked and designed many projects in different domains (ecommerce, mortgage, CMS, inventory management, integrated Payment Gateways, SMS gateways, VOIP Asterix PBX and different tech stack (PHP, MySQL, jQuery, YUI, HTML4/5, CSS2/3, Perl).  <br />
	Interested in working with latest technologies such as Angular JS, Node.JS, HTML5, CSS3, MongoDB.

About Vishwanath Kolkar
----------------------
	Started carrer as fresher in HCL Technologies and deputed to client Yahoo and working for past 2 years. <br /> 
	Worked in HTML5, CSS3, jQuery, YUI for Yahoo Messenger Project. <br /> 
	Interested in working with latest technologies such as Angular JS, HTML5, CSS3, jQuery Mobile, PhoneGap, ngCodava.

Purpose
================
Purpose of this application is to develop a Mobile website for online shoe store.  Front-end application is developed using HTML5, CSS3, jQuery and backend logics developed using Node.JS and MongoDB.

Components of Application
================
	Home page with featured products for all categories (Men, Women, Kid)
	Products List for specific Category
	Product detail page to display more information of specific product with 'Add to Cart' functionality
	Shopping cart with list of items selected
	Node.JS module which communicates with MongoDB to fetch and update data

Components of Application in Detail
===================================
Node.JS Routers
---------------
	getFeaturedProducts
	getProducts
	getProduct
	updateCart
	addUser


Mongodb Collections
===================

category
--------
	catId
	catName
	catDescription
	catImage
		
product
--------
	prodId
	catId
	prodDescr
	prodImage
	prodColorId
	prodSizeId
	prodPrice
	featured
	
color
--------
	colorId
	colorName
	
size
--------
	sizeId
	sizeDesc

user
--------
	userId
	userName
	userPassword
	userDob
	
user_shipping_address
------------------------
	shippingAdrsId
	userId
	address1
	address2
	city
	state
	country
	zipcode
	phone

user_billing_address
------------------------
	billingAdrsId
	userId
	address1
	address2
	city
	state
	country
	zipcode
	phone
	
orders
--------
	orderId
	userId
	prodId
	orderAmount
	discountAmount
	totalAmount
	createdOn
	
order_item
--------
	itemId
	orderId
	prodId
	qty
	colorId
	sizeId
	unitPrice
	
user_cart
--------
	cartId
	userId
	data
	updated
	
	
MongoDB Statements:
----------------

use showzoo; <br />
db.createCollection("product"); <br />
db.createCollection("category");<br />
db.createCollection("color");<br />
db.createCollection("size");<br />
db.createCollection("user");<br />
db.createCollection("user_shipping_address");<br />
db.createCollection("user_billing_address");<br />
db.createCollection("orders");<br />
db.createCollection("user_cart");<br />
show collections;

Mongodb Documents:
----------------

	cats = [{"catId" : "1", "catName" : "Men", "catDescription" : "Men's Shoes",  "catImage" : "cat1.png"},{"catId" : "2", "catName" : "Women", "catDescription" : "Women's Shoes",  "catImage" : "cat2.png"},{"catId" : "3", "catName" : "Kid", "catDescription" : "Kid's Shoes",  "catImage" : "cat3.png"}]
	colors = [{"colorId" : "1", "colorName": "White"},{"colorId" : "2", "colorName": "Gray"},{"colorId" : "3", "colorName": "Red"},{"colorId" : "4", "colorName": "Brown"}];
	sizes = [{"sizeId": "1", "sizeName": "6"},{"sizeId": "2", "sizeName": "7"},{"sizeId": "3", "sizeName": "8"},{"sizeId": "4", "sizeName": "9"},];
	prod1 = [{"prodId" : "1","catId" : "1","prodDescr" : "Island Coffee Brown","prodImage" : "island_coffee_brown.jpg", "prodColorId" : "1","prodSizeId" : "1","prodPrice" : "120","featured" : "1"}]
	prod2 = [{"prodId" : "2","catId" : "1","prodDescr" : "Island White","prodImage" : "island_white.jpg", "prodColorId" : "1","prodSizeId" : "2","prodPrice" : "120","featured" : "0"}]



