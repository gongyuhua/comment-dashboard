$(function() {
  //submit
  let data = new Map();
  $(".col-sm-offset-1 .btn").click(() => {
    var _name = $(".col-sm-11 input").val();
    var _comment = $(".col-sm-11 textarea").val();
    if (_name == "" || _comment == "") {
      alert("please enter information");
    } else {
      data.set(_name, _comment);
      $(".col-sm-11 input,.col-sm-11 textarea").val("");
      list();
    }
  });

  //show list
});
