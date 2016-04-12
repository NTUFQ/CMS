function submit() {
    AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
    AV.useAVCloudUS();

    //get all elements required.
    var new_name = document.getElementById('crisis_name').value;

    var new_date = new Date(document.getElementById('date').value);
    var new_time = new Time(document.getElementById('time').value); //new attribute

    var new_type = document.getElementById('crisis_type').value; //new attribute

    var new_longitude = document.getElementById('longitude_new').value;
    var new_latitude = document.getElementById('latitude_new').value;

    var new_nearest_safety1 = document.getElementById('cd_shelter1').value; //new attribute
    var new_nearest_safety2 = document.getElementById('cd_shelter2').value; //new attribute
    var new_nearest_safety3 = document.getElementById('cd_shelter3').value; //new attribute
    var new_nearest_safety4 = document.getElementById('cd_shelter4').value; //new attribute

    var new_description = document.getElementById('description').value;

    //save them in a Crisis instance.
    var newCrisis = new Crisis();
    newCrisis.set('title', new_name);
    //newCrisis.set('status', 0);
    //newCrisis.set('code', code2);
    newCrisis.set('date', new_date);
    newCrisis.set('time', new_time);
   // newCrisis.set('contact', contact2);
    newCrisis.set('type', new_type);
    newCrisis.set('longitude', new_longitude);
    newCrisis.set('latitude', new_latitude);

    newCrisis.set('safety1', new_nearest_safety1);
    newCrisis.set('safety2', new_nearest_safety2);
    newCrisis.set('safety3', new_nearest_safety3);
    newCrisis.set('safety4', new_nearest_safety4);

    newCrisis.set('description', description2);

    newCrisis.save().then(function (newCrisis) {
        console.log('New object created with objectId: ' + newCrisis.id);
        //update crisislist
        var updatecrisislist = new Crisislist();
        var crisislistquery = new AV.Query(Crisislist);
        //get crisislist
        crisislistquery.get(crisislistid).then(function (updatecrisislist) {
            var updatelist = updatecrisislist.get('crisislist');
            updatelist.push(newCrisis.id);
            updatecrisislist.set('crisislist', updatelist);
            updatecrisislist.set('length', updatelist.length);
            updatecrisislist.set('updatetime', new Date());
            updatecrisislist.save();
            console.log('Update crisislist successful!');
            window.location = "crisislist.html";
        }, function (error) {
            // if failed
            console.log('Failed to update crisislist.');
            //actually we have to delete the crisis object created
        });
    }, function (err) {
        console.log('Failed to create new object, with error message: ' + err.message);
    });
}


function postToWall() {
   // AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0'); //initialize
   // AV.useAVCloudUS();
    var facebook = document.getElementById('select_facebook').checked = false;
    var twitter = document.getElementById('select_twitter').checked = false;
    var description = document.getElementById('description').value;
    var title = document.getElementById('newCrisis').value;

    var params = {};
    params['message'] = 'Test';
    params['name'] = 'Random 9 CMS';
    params['link'] = 'http://crisis1'; //placeholder
    params['picture'] = 'http://1.gravatar.com/blavatar/9c99f3c76686bf5edf1ea460356f00f2?s=128&ts=1321625806'; //placeholder
    params['description'] = 'Test';

    FB.api('/me/feed', 'post', params, function (response) {
        if (!response || response.error) {
            alert('Error occured');
        } else {
            alert('Post ID: ' + response.id);
        }
    });


}

function tweet() {


    $(document).ready(function () {
        $('#btnTweet').click(function (e) {
            var crisis_name = document.getElementById('newCrisis').value;
            var textToTweet = "NEW CRISIS: ";
            textToTweet += crisis_name;
            if (textToTweet.length > 140) {
                alert('Tweet should be less than 140 Chars');
            }
            else {
                var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
                window.open(twtLink, '_blank');
            }
        });
    });
}

    
