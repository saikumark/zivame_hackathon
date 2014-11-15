var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});*/

//Get featured products based on category id
router.get('/getFeaturedProducts', function(req,res){
	var db = req.db;
	var catId = req.param("catId");
	var collection = db.get("product");
	if(catId != undefined){
		collection.find({"featured":"1","catId":catId+""}, function(e,docs){
			returnJson(res,docs);		
		});
	}
	else{
		collection.find({"featured":"1"}, function(e,docs){
			returnJson(res,docs);		
		});
	}
	
});


//Get products based on category
router.get('/getProducts', function(req,res){
	var db = req.db;
	var catId = req.param("catId");
	var collection = db.get("product");
	if(catId!=undefined){
		collection.find({"catId": ""+catId}, function(e,docs){
			returnJson(res,docs);
		});
	}
	else{
		collection.find({},function(e,docs){
			returnJson(res,docs);
		});
	}
});

//Get specific product data for given product Id
router.get('/getProduct', function(req,res){
	var db = req.db;
	var prodId = req.param("prodId");
	var collection = db.get("product");
	if(prodId!=undefined){
		collection.find({"prodId":""+prodId}, function(e,docs){
			returnJson(res,docs);
		});
	}
	else{
		returnJson(res,"");
	}
});

//Update Cart for given user id
router.get('/updateCart', function(req,res){
	var db = req.db;
	var collection = db.get("user_cart");
	var userId = req.param("userId");
	var cartItems = req.param("cartData");
	if(userId!=undefined && cartItems!=undefined){

		//If cart data already exists for user, delete it.
		collection.remove({"userId": {"$eq": userId}});

		//insert new cart data for the given user 
		var document = {"userId":userId, "data":cartItems};
		collection.insert(document, {w:1}, function(err,doc){
			returnJson(res,"SUCCCESS");
		});
	}
});


//Add user data
router.get('/addUser', function(req,res){
	var db = req.db;
	var collection = db.get("user");
	var userName = req.param("userId");
	var password = req.param("password");
	var userDob = req.param("userdob");

	if(userName!=undefined && password!=undefined && userDob!=undefined){
		var document = {"userName":userName, "userPassword":password, "userDob":userDob};
		collection.insert(document, {w:1}, function(err,doc){
			returnJson(res,"SUCCESS");
		});
	}
});

var returnJson = function(res,data){
	res.json(data);
}
module.exports = router;
