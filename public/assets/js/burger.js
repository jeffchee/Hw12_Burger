
$(function() {
  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newburger");

    var newBurgerState = {
      nBurger: newBurger
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed burger to", newBurger);
 
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      nBurger: $("[name=nburger]:checked").val().trim()
    };


    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
      
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");


    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
    
        location.reload();
      }
    );
  });
});
