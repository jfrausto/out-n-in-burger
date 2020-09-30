$(function () {
  // when you hit the devour button
  $(".change-devour").on("click", function (event) {
    const id = $(this).data("id");
    const devourState = $(this).data("newDevour");

    const newDevourState = {
      devoured: devourState,
    };

    // send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function (data) {
      console.log("changed devour state to", devourState);
      // reload the page to get the updated list
      location.reload();
    });
  });

  // submit form event
  $("#sendNewBurger").on("submit", function (event) {
    // all submits need to preventDefault
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burgerTextArea").val().trim(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      // ? empty params
      console.log("created a new burger!");
      // reload the page to get updated list
      location.reload();
    });
  });
});
