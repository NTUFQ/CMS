function initialize() {
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();

  //crisis has attributes: title, description, status(0-3), time, location, events[], contact.
  var Crisis = AV.Object.extend(
    "Crisis",
    {
      defaults:{
        title: "Empty title",
        description: "none",
        status: 0,
        location: {lat: 0, lng: 0},
        events:[],
        contact:88888888
      }
    }
  );
}
