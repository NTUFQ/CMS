function loadcrisis(){
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();

  var query = new AV.Query(Crisis);
  var status = parseInt(document.getElementById('statusselector').value);
  var type = parseInt(document.getElementById('typeselector').value);
  console.log(status);
  console.log(type);
  if (type!=2){
  query.equalTo('type',type);
  console.log('type check! Type equals to '+type);
}
  if (status!=0) {
    console.log(status);
    query.greaterThan('status',status-1);
    console.log('status check! Status equals to ' +status);
  }

  query.limit(100);
  query.find().then(
    function(crisislist) {
      console.log(crisislist.length);
      var htmltext = '';
      for (var i = 0; i < crisislist.length; i++) {
        console.log(crisislist[i].get('type'));
        var labelstring = "";
        var labeltext = "UNKNOWN";
        switch (crisislist[i].get('type')) {
          case 0: labeltext = "TERROR"; break;
          case 1: labeltext = "DISEASE"; break;
        }
        switch (crisislist[i].get('code')) {
          //code 0 for yellow, 1 for red, 2 for black
          case 0: labelclass = "label-warning"; break;
          case 1: labelclass = "label-danger";  break;
          case 2: labelclass = "label-default"; break;
          default:labelclass = "label-primary";}

        var statusreported = "display:none";
        var statusverified = "display:none";
        var statusprocessing = "display:none";
        var statusfinished = "display:none";
        switch (crisislist[i].get('status')) {
          //status 0 for reported, 1 for verified, 2 for Processing, 3 for finished
          case 0: statusreported = "display:inline";
                  statusverified = "display:none";
                  statusprocessing = "display:none";
                  statusfinished = "display:none";
            break;
          case 1: statusreported = "display:inline";
                  statusverified = "display:inline";
                  statusprocessing = "display:none";
                  statusfinished = "display:none";
            break;
          case 2: statusreported = "display:inline";
                  statusverified = "display:inline";
                  statusprocessing = "display:inline";
                  statusfinished = "display:none";
            break;
          case 3: statusreported = "display:inline";
                  statusverified = "display:inline";
                  statusprocessing = "display:inline";
                  statusfinished = "display:inline";
            break;
        }
        console.log(timeSince(crisislist[i].get('time')));
        var timesinceupdate = timeSince(crisislist[i]['updatedAt']);
        var timesincecreate = timeSince(crisislist[i]['createdAt']);
        var descriptiontext = "<p style='color:gray'>" + "&nbsp&nbsp&nbsp" + crisislist[i].get('description') + "</p>";
        var inhtml = `<div class='well'>
                <p style='color:gray'>  <span class="badge">updated</span> `+ timesinceupdate + ` ago  <span class="badge">posted</span> `+timesincecreate+` ago</p>
                <h4><span class='label `+ labelclass +`'>`+ labeltext +`</span><a href='#'>`+ crisislist[i].get('title') +`</a><span style="margin-left:10px" class='glyphicon glyphicon-map-marker' onclick="showimage('`+crisislist[i].id+`')"></span></h4>
                <p>`+ descriptiontext
                 + `</p>
                 <img id="`+crisislist[i].id+`"style='margin-left:20px;display:none'  src="https://maps.googleapis.com/maps/api/staticmap?center=`+crisislist[i].get('latitude')+","+crisislist[i].get('longitude')+`&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7C`+crisislist[i].get('latitude')+","+crisislist[i].get('longitude')+`">
                </script>
                <div class='progress'>
                  <div class='progress-bar progress-bar-warning progress-animated' style='width: 15%; `+ statusreported +`'><span>Reported</span></div>
                  <div class='progress-bar progress-bar-danger' style='width: 15%; `+ statusverified +`'><span>Verified</span></div>
                  <div class='progress-bar progress-bar-striped' style='width: 55%; `+ statusprocessing +`'><span>Processing</span></div>
                  <div class="progress-bar progress-bar-success" style='width: 15%; `+ statusfinished +`'><span>Finished</span></div>
                </div>
              </div>`;

              htmltext += inhtml;
      }
      document.getElementById('box').innerHTML = htmltext;
    }
  );


}
function showimage(id){
  document.getElementById(id).innerHTML = "AAA";
  document.getElementById(id).style = "diaplsy:inline";
}
function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
