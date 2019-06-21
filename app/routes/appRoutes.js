'use strict';
module.exports = function(app) {
  var userCRUD = require('../controllers/userController');

  // User CRUD Operation Routes
  app.route('/user')
    .get(userCRUD.list_all_users)
    .post(userCRUD.create_a_user);
   
   app.route('/user/:userId')
    .get(userCRUD.read_a_user)
    .put(userCRUD.update_a_user)
    .delete(userCRUD.delete_a_user);
    };