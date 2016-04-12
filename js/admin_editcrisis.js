

function editcrisis(){
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();
  var i = document.cookie;
  //alert ("cookie is " + i);
  var query = new AV.Query(Crisis);
  query.limit(100);
  query.find().then(
    function(crisislist) {
    var  crisisname = crisislist[i].get('title');
    var  crisiscode = crisislist[i].get('code'); //missing in admin_editcrisis.html
    var  crisisstatus = crisislist[i].get('status');
    var  crisistime = crisislist[i].get('time');
    var  crisiscontact = crisislist[i].get('contact'); //missing in admin_editcrisis.html
    var  crisisdescription = crisislist[i].get('description');
    var  crisislng = crisislist[i].get('longitude');
    var  crisislat = crisislist[i].get('latitude');

    document.getElementById("crisis_name").value = crisisname;
    //document.getElementById("date").value = crisistime.Date();
  //  document.getElementById("time").value = crisisname;
    document.getElementById("longitude_new").value = crisislng;
    document.getElementById("latitude_new").value = crisislat;
    document.getElementById("description").value = crisisdescription;
    //document.getElementById("crisis_name").value = crisisname;
    //document.getElementById("crisis_name").value = crisisname;

    }
  )
}
