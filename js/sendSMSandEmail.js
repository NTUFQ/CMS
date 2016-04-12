var xmlhttp = new XMLHttpRequest();
var xmlhttp2 = new XMLHttpRequest();

function sendSMS(){
  var title = document.getElementById("crisis_name").value;
  var des = document.getElementById("description").value;
  var message = "NEW CRISIS:\n" + title + ': ' + des;
  var value = document.getElementById("SMSForm").target.value;
  var msg = "email=SMS"+value+"&content="+message;
  console.log(msg);
  xmlhttp.open("POST", "send.php", true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send(msg);
  startSending();
}

xmlhttp.onreadystatechange=function()
{
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      window.alert(xmlhttp.responseText);
    }
    finishSending();
}

function startSending(){
  document.getElementById("notifier").innerHTML = "Sending...";
}

function finishSending(){
  document.getElementById("notifier").innerHTML = "";
}


function sendemail(){
  var title = document.getElementById("crisis_name").value;
  var des = document.getElementById("description").value;
  var message = "NEW CRISIS:\n" + title + ': ' + des;
  var value = document.getElementById("EmailForm").target.value;
  var msg = "email=email"+value+"&content="+message;
  console.log(msg);
  xmlhttp2.open("POST", "send.php", true);
  xmlhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp2.send(msg);
  startSending();
}

xmlhttp2.onreadystatechange=function()
{
  if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
    {
      window.alert(xmlhttp2.responseText);
    }
    finishSending();
}
