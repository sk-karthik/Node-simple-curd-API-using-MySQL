	'use strict';

	var User = require('../models/userModel.js');
	
//1. Get All user  lists
	exports.list_all_users = function(req, res) {
	  User.getAllUser(function(err, user) {

		if (err)
			res.send(err);
			res.send(user);
	  });
	};


//2. Create user
	exports.create_a_user = function(req, res) {
	  var new_user = new User(req.body);
		if(!new_user.name){
			res.status(400).send({ error:true, message: 'Please provide name' });
		}else if(!new_user.email){
			res.status(400).send({ error:true, message: 'Please provide email' });
		}else if(req.body.id > 0 ){
			User.updateById( req.body.id, req.body, function(err, user) {
				if (err)
				  res.send(err);
				res.json(user);
			  });
		}
		else{
		  User.createUser(req.body, function(err, user) {
			if (err)
			  res.send(err);
			res.json(user);
		  });
		}
	};

//3. Get user 
	exports.read_a_user = function(req, res) {
	  User.getUserById(req.params.userId, function(err, user) {
		if (err)
		  res.send(err);
		res.json(user);
	  });
	};

//4. Update User
	exports.update_a_user = function(req, res) {
	  User.updateById(req.params.userId, req.body, function(err, user) {
		if (err)
		  res.send(err);
		res.json(user);
	  });
	};

//4. Delete User
	exports.delete_a_user = function(req, res) {
	  User.remove( req.params.userId, function(err, user) {
		if (err)
		  res.send(err);
		res.json(user);
	  });
	};