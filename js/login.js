AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');

AV.User.logIn('myname', 'mypass').then(function() {
  // 成功了，现在可以做其他事情了
}, function() {
  // 失败了
});
