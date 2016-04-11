function loadcrisis(){
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();

  var query = new AV.Query(Crisis);
  query.limit(100);
  query.find().then(
    function(crisislist) {
      console.log(crisislist.length);
      for (var i = 0; i < crisislist.length; i++) {
        console.log(i);

        var labelstring = "";
        var labeltext = "";
        switch (crisislist[i].get('code')) {
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
          default:statusreported = "display:none";
                  statusverified = "display:none";
                  statusprocessing = "display:none";
                  statusfinished = "display:none";
        }

        var descriptiontext = "<p style='color:gray'>" + "&nbsp&nbsp&nbsp" + crisislist[i].get('description') + "</p>";
        console.log(descriptiontext);
        console.log(crisislist[i].get('time'));
        var inhtml = `<div class='well'>
                <p style='color:gray'> `+ crisislist[i].get('time') + `</p>
                <h4><span class='label `+ labelclass +`'>`+ labeltext +`</span><a href='#'>`+ crisislist[i].get('title') +`</a></h4>
                `+ descriptiontext
                 + `
                </script>
                <div class='progress'>
                  <div class='progress-bar progress-bar-warning' style='width: 15%; `+ statusreported +`'><span>Reported</span></div>
                  <div class='progress-bar progress-bar-danger' style='width: 15%; `+ statusverified +`'><span>Verified</span></div>
                  <div class='progress-bar progress-bar-striped' style='width: 55%; `+ statusprocessing +`'><span>Processing</span></div>
                  <div class="progress-bar progress-bar-success" style='width: 15%; `+ statusfinished +`'><span>Finished</span></div>
                </div>
              </div>`;
              
              document.getElementById('box').innerHTML += inhtml;
      }
    }
  );





}
