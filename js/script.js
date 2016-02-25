// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
  $("#before p").before("<strong>Hello!</strong>");
});

$("#css1 button").click(function() {
  $("#css1 p").css("font-size", "20px");
});

$("#css2 button").click(function() {
  $("#css2 p").css({"font-size":"20px","color":"blue"});
});

$("#attr1 button").click(function() {
  console.log($("#attr1 a").attr("href"));
});

$("#attr2 button").click(function() {
  $("#attr2 a").attr("href", "http://www.google.com")
});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {
  alert($("#class2 p").hasClass("lead"));
});

$("#form1 button").click(function() {
  console.log($("#form1 input").val());
});

$("#form2 button").click(function() {
  $("#form2 input").val("Elliot");
});

// handle the mouseover event here
$("#mouse img").mouseover(function(){
  $("#mouse img").attr("style", "width:50%");
})

// handle the form events here
$(".form-group button").click(function(event){
  event.preventDefault();
  console.log("email: " + $("form input[type=email]").val());
  console.log("password: " + $("form input[type=password]").val());
  debugger;
  console.log("checkbox: " + $("form input[type=checkbox]").prop("checked"));
})

//animate increase size
$("#animate1 img").mouseover(function(){
  $("#animate1 img").animate({
    width: "70%"
  })
})

$("#animate1 img").mouseout(function(){
  $("#animate1 img").animate({
    width: "20%"
  })
})


//animate double click
var flag = true;
$("#animate2 img").dblclick(function(){
  if(flag){
    $("#animate2 img").animate({
      "margin-left": "900px",
    })
    flag = false;
  }else{
    $("#animate2 img").animate({
      "margin-left": "0",
    })
    flag = true;
  }
})


//fade out fade in
$("#animate3 img").click(function(){
  $("#animate3 img").animate({
    opacity: 0
  }, function() {
    $(this).attr("src", "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg")
    $(this).animate({opacity:1}, 2000);
  })
})

//submit
$("#formEvents form").submit(function(event) {

});