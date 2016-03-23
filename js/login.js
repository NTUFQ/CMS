function login(){
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');//initialize
  AV.useAVCloudUS();

  var username = document.getElementById('username1').value;
  var password = document.getElementById('password1').value;

  AV.User.logIn(username, password).then(function() {
    window.location = "index.html";
  }, function() {
    document.getElementById('errorMsg').style.display = 'inline';
  });
}
