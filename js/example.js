/////////////////////////
!!below Post is a Class!!
!!!post is a instance!!!!
!!!!!!REPLACE!THEM!!!!!!!
/////////////////////////

//deleting
myObject.destroy().then(function() {
  // successful
}, function(error) {
  // failed
});


//update
var Post = AV.Object.extend('Post');
var query = new AV.Query(Post);

// objectId required
query.get('558e20cbe4b060308e3eb36c').then(function(post) {
  post.set('content', 'what you want to change');
  post.save();
}, function(error) {
  // if failed
});


//query
var query = new AV.Query(Post);
query.get('558e20cbe4b060308e3eb36c').then(function(post) {
  var content = post.get('content');
  var username = post.get('pubUser');
  var pubTimestamp = post.get('pubTimestamp');
}, function(error) {
  // if Failed
});


//create
var post = new Post();
post.set('content', 'aaa');
post.set('pubUser', 'aaaa');
post.set('pubTimestamp', 1435541999);
post.save().then(function(post) {
  console.log('New object created with objectId: ' + post.id);
}, function(err) {
  // if failed
  console.log('Failed to create new object, with error message: ' + err.message);
});
