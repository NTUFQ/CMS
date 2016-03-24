function loadcrisis(){
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();
  var crisislist1 = [];
  var length = 0;
  var newcrisis = new Crisis();
  var newcrisislist = new Crisislist();

  //get crisislist
  var query = new AV.Query(Crisislist);
  query.get(crisislistid).then(function(newcrisislist) {
    crisislist1 = newcrisislist.get('crisislist');
    length = newcrisislist.get('length');
    console.log('Got crisislist as ' + crisislist1 + ', length as ' + length);

    //looping and creating box for each crisis object
    for (var i = 0; i < length; i++) {

      console.log('For the ' + i + 'th crisis');

      var crisisquery = new AV.Query(Crisis);
      crisisquery.get(crisislist1.pop()).then(function(newcrisis) {
        console.log('title ' + newcrisis.get('title'));

        var labelstring = "";
        var labeltext = "";
        switch (newcrisis.get('code')) {
          //code 0 for yellow, 1 for red, 2 for black
          case 0: labelclass = "label-warning";
                  labeltext = "YELLOW";
            break;
          case 1: labelclass = "label-danger";
                  labeltext = "RED";
            break;
          case 2: labelclass = "label-default";
                  labeltext = "BLACK";
            break;
          default:labelclass = "label-primary";
                  labeltext = "UNKNOWN";
        }

        var statusreported = "";
        var statusverified = "";
        var statusprocessing = "";
        var statusfinished = "";
        switch (newcrisis.get('status')) {
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
          default:statusreported = "display:none";
                  statusverified = "display:none";
                  statusprocessing = "display:none";
                  statusfinished = "display:none";
        }

        var pasteventtext = "";
        var pasteventlist = newcrisis.get('events');
        for (var i = 0; i < pasteventlist.length; i++) {
          pasteventtext += "<li><p>" + pasteventlist[i] + "</p></li>";
        }

        var descriptiontext = "<p style='color:gray'>" + "&nbsp&nbsp&nbsp" + newcrisis.get('description') + "</p>";

        console.log(statusreported+statusverified+statusprocessing+statusfinished);
        var inhtml = `<div class='well'>
                <p style='color:gray'> `+ newcrisis.get('time').toDateString() + `</p>
                <h4><span class='label `+ labelclass +`'>`+ labeltext +`</span><a href='#'>`+ newcrisis.get('title') +`</a></h4>
                `+ descriptiontext
                 + pasteventtext +`
                </script>
                <div class='progress'>
                  <div class='progress-bar progress-bar-warning' style='width: 15%; `+ statusreported +`'><span>Reported</span></div>
                  <div class='progress-bar progress-bar-danger' style='width: 15%; `+ statusverified +`'><span>Verified</span></div>
                  <div class='progress-bar progress-bar-striped' style='width: 55%; `+ statusprocessing +`'><span>Processing</span></div>
                  <div class="progress-bar progress-bar-success" style='width: 15%; `+ statusfinished +`'><span>Finished</span></div>
                </div>
              </div>`;
          document.getElementById('box').innerHTML += inhtml;
      }, function(error) {
        // if Failed
        console.log('Failed to get crisis Object.');
      });
    }
    ////////////////////////////////////////////////////////
  }, function(error) {
    // if Failed
    console.log('Failed to get crisislist.');
  });




}
