function confirmdelete(id){
  if (confirm('Are you sure you want to delete this crisis?')) {
    deletecrisis(id);
  } else {

  }
}

function deletecrisis(id){
  var query = new AV.Query(Crisis);
  // objectId required
  query.get(id).then(function(post) {
    alert("Found crisis")
    post.destroy().then(function() {
      alert("Crisis deleted");
      window.location="dashboard.html";
    }, function(error) {
      alert("Crisis failed to delete");
    });
  }, function(error) {
    alert("Failed to get crisis")
  });

}
