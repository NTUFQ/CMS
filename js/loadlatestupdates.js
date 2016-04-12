function load() {
  var newquery = new AV.Query(Crisis);
  newquery.addDescending('this.updatedAt');
  newquery.limit(3);
  newquery.find().then(
    function (crisislist) {
      var htmltext = '';
      for (var i = 0; i < crisislist.length; i++) {
        console.log(crisislist[i].get('title'));
        console.log(crisislist[i].updatedAt);
        //console.log(crisislist[i].getDay());
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
        htmltext += `
        <div class="well">
          <p style="color:gray">`+crisislist[i].updatedAt+`</p>
          <h4><span class="label `+labelclass+`">`+labeltext+`</span><a href="#">`+crisislist[i].get('title')+`</a></h4>
          <p>`+crisislist[i].get('description')+`</p>
          <div class='progress'>
            <div class='progress-bar progress-bar-warning' style='width: 15%; `+ statusreported +`'><span>Reported</span></div>
            <div class='progress-bar progress-bar-danger' style='width: 15%; `+ statusverified +`'><span>Verified</span></div>
            <div class='progress-bar progress-bar-striped' style='width: 55%; `+ statusprocessing +`'><span>Processing</span></div>
            <div class="progress-bar progress-bar-success" style='width: 15%; `+ statusfinished +`'><span>Finished</span></div>
          </div>
        </div>
        `
      }
      console.log(htmltext);
      document.getElementById('box').innerHTML = htmltext;
    }
  )
}
