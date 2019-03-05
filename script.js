$("#command").click(function() {
        $("#answer").text ("Now Click on the image below me!");
        $("body").css("color","black"); 
        $("#image").fadeIn ();
});

$("#answer").dblclick(function() {
     $("#image").attr("src","https://s3.amazonaws.com/tinycards/image/6bd9d0f2862972f2000505435e731613"); 
    }
);

$("#image").click(function() {
    $("#answer2").text ("You're doing great! Now double click on the leaf");

});

$("#image").dblclick(function() {
    $("#answer3").text ("Now hover on the pedal");
    $("#petal").fadeIn ();
});

$("#petal").mouseenter(function() {
    $("#petal").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Red_rose.jpg/220px-Red_rose.jpg");
    $("#treasure").hide();
});

    $("#petal").mouseleave(function() {
        $("#petal").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Red_rose.jpg/220px-Red_rose.jpg");
        $("#hidden").css("display","block");
});