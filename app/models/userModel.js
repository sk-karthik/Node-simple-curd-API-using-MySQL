	'user strict';
	var sql = require('./db.js');

	//User object constructor
	var User = function(user){
		this.name = user.name;
		this.email = user.email;
		this.created = new Date();
	};
	//1.Create User
	User.createUser = function createUser(newUser, result) {   
			newUser.created = new Date(); 
			sql.query("INSERT INTO users set ?", newUser, function (err, res) {
					if(err) {
						result(err, null);
					}
					else{
						result(null, {'msg':'ok','id':res.insertId});
					}
				});           
	};
	
	//2. Get User By ID
	User.getUserById = function createUser(userId, result) { 
			sql.query("Select * from users where id = ? ", userId, function (err, res) {             
					if(err) {
						result(err, null);
					}
					else{
						result(null, {'msg':'ok','data':res});
				  
					}
				});   
	};
	
	//3. Get All User 
	User.getAllUser = function getAllUser(result) {
			sql.query("Select * from users ", function (err, res) {

					if(err) {
						result(err, null);
					}
					else{
					 result(null,  {'msg':'ok','data':res,'count':res.length});
					}
				});   
	};

	//4. Update user by id 
	User.updateById = function(id, updateUser, result){
			sql.query("UPDATE users SET ? WHERE id = ?", [updateUser, id], function (err, res) {
			  if(err) {
					result(err, null);
				 }
			   else{   
				 result(null, {'msg':'ok','data':res});
					}
				}); 
				// result(null,updateUser);
	};
	
	//5. User Delete
	User.remove = function(id, result){
		 sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

					if(err) {
						result(err, null);
					}
					else{
				   
					 result(null, {'msg':'ok','data':res, message: 'User successfully deleted' });
					}
				}); 
	};

module.exports= User;