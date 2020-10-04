// wrap everything in this function;
// this allows the page to load the DOM contents before attaching event listeners
$(function () {
  // when you hit the devour button
  $(".change-devour").on("click", function (event) {
    // grab the burgers id from the adjacent devour button
    var id = $(this).data("id");
    // grab the devour state
    var devourState = $(this).data("newdevour");
    // create an object to pass as data
    var newDevourState = {
      devoured: devourState,
    };

    // send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function (data) {
      // reload the page to get the updated list
      location.reload();
    });
  });

  // submit form event
  $("#sendNewBurger").on("submit", function (event) {
    // all submits need to preventDefault
    event.preventDefault();
    // create a new burger from user input
    const newBurger = {
      burger_name: $("#burgerTextArea").val().trim(),
    };
    // SEND POST
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function (data) {
      console.log(`created a new burger! ID = ${data.insertId}`);
      // reload the page to get updated list
      location.reload();
    });
  });
});
