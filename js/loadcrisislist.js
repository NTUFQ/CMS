
function load() {
  var query = new AV.Query(Crisis);
  query.find().then(function(list) {
    var htmltext = "";
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
      var code = '';
      switch (list[i].get('code')) {
        case 0: code = 'Yellow';
          break;
        case 1: code = 'Red';
          break;
        case 2: code = 'Black';
      }

      var status = "";
      var rowcolor ='';
      switch (list[i].get('status')) {
        case 0: status = 'Reported';
          break;
        case 1: status = 'Verified';
                rowcolor="class='warning'";
          break;
        case 2: status = 'Processing';
                rowcolor="class='warning'";
          break;
        case 3: status = 'Finished';
                rowcolor="class='warning'";
          break;
      }

      htmltext += `
      <tr`+rowcolor+`>
        <td><small>`+list[i].id+`</small></td>
        <td><strong>`+list[i].get('title')+`</strong></td>
        <td>`+list[i].get('time').toLocaleString()+`</td>
        <td>`+code+`</td>
        <td>`+status+`</td>
        <td>
        <form action="dashboard_crisis.html" method="GET">
          <input name="id" type="hidden" value="`+list[i].id+`">
          <input type="submit" class="btn btn-primary" value="View" name="submit" id="submit">
        </form>
        </td>
        <td>
        <form action="dashboard_update.html" method="GET">
          <input name="id" type="hidden" value="`+list[i].id+`">
          <input type="submit" class="btn btn-primary" value="Update" name="submit" id="submit">
        </form>
        </td>
        <td>

        <button class="btn btn-danger" type = "button" name="id" onclick = "confirmdelete('`+list[i].id+`')">Delete</button>
        </td>
      </tr>
      `;

    }
    document.getElementById('box').innerHTML = htmltext;
  });
}
