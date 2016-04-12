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
    document.getElementById('push').innerHTML=`
    <div class="alert alert-warning" role="alert" id="push">
    <span class="glyphicon glyphicon-info-sign"></span>&nbsp;<strong>NEWS:</strong>&nbsp;&nbsp;&nbsp;`+msg+`
    </div>
    `;
}

push.open(function() {
    console.log(1);
});

push.subscribe(['pub'], function(data) {
    console.log(6);
});



function getMsg() {
  console.log('trying to get');
  push.on('message',function(data) {
      console.log('get msg successfully!');
      console.log(data);
      console.log(data['message']);
      showLog(data['message']);
      //showLog(JSON.stringify(data.get('messgae')));
  });
  console.log('finish getting');
}

setInterval(getMsg, 60000);
/*
// 每次调用生成一个聊天实例
createNew();

function createNew() {
    push = AV.push({
        appId: appId,
        appKey: appKey
    });

    // 可以链式调用
    push.open(function() {
        showLog('可以接收推送');
        console.log(1);
    });

    // 监听推送消息
    push.on('message', function(data) {
        showLog('message');
        showLog(JSON.stringify(data));
        console.log(2);
    });

    // receive 方法是监听 message 的快捷方法
    push.receive(function(data) {
        showLog('Receive 方法显示和监听 message 事件一致');
        showLog(JSON.stringify(data));
        console.log(3);
    });

    // 监听网络异常
    push.on('reuse', function() {
        showLog('网络中断正在重试');
        console.log(4);
    });

    // 发送一条推送
    push.send({
        // channels: ['aaa'],
        data: {LeanCloud: 123}
    }, function(result) {
        if (result) {
            showLog('推送成功发送');
            console.log(5);
        } else {
            showLog('error');
        }
    });

    push.subscribe(['test123'], function(data) {
        showLog('关注新的频道');
        console.log(6);
    });

    push.send({
        channels: ['test123'],
        data: {test123: 123}
    });

    setTimeout(function() {

        // 如果不加 channels，可以简单的使用 send 方法发送一个 json
        push.send({
            abc: 123
        });

        push.unsubscribe(['test123'], function(data) {
            showLog('取消关注新的频道');
            console.log(7);

            push.send({
                channels: ['test123'],
                data: {test123: 123}
            });
        });

    }, 5000);
}

function showLog(msg) {
    console.log(msg);
    var div = document.getElementById('result');
    var p = document.createElement('p');
    p.innerText = msg;
    div.appendChild(p);
}
*/
