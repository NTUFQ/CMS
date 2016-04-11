var appId = 'NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI';
var appKey = 'zDzuVVdpuJl6o9qsO6KM21x0';
AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
AV.useAVCloudUS();
var push = AV.push({
    appId: appId,
    appKey: appKey,
    region: 'us'
});

function showLog(msg) {
    console.log(msg);
}


function sendMsg() {
  console.log('tring to send');
  var msg = document.getElementById('push').value;
  push.send({
      //channels: ['aaa'],
      channels: ['pub'],
      data: {message: msg}
  }, function(result) {
      if (result) {
          showLog('send!!!');
          console.log(5);
      } else {
          showLog('error');
      }
  });
  console.log('finish sending');
}
