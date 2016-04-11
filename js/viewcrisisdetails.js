var parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
var id = unescape(temp[1]);
console.log("id = " + id);
function loadcrisis(id) {
  var query = new AV.Query(Crisis);
  query.get(id).then(
    function(crisis) {
      htmltext = `
      <row><label>Title</label><p>`+crisis.get('title')+`</p></row>
      <row><label>Time</label><p>`+crisis.get('time')+`</p></row>
      <row><label>Contact</label><p>`+crisis.get('contact')+`</p></row>
      <row><label>Description</label><p>`+crisis.get('description')+`</p></row>
      <row><label>Location</label></row>
      <img src="https://maps.googleapis.com/maps/api/staticmap?center=`+crisis.get('latitude')+","+crisis.get('longitude')+`&zoom=13&size=300x300&maptype=roadmap&markers=color:red%7C`+crisis.get('latitude')+","+crisis.get('longitude')+`">

      `;

      document.getElementById('box').innerHTML=htmltext;
    }
  )
}
loadcrisis(id);
