if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    const ratings = document.getElementById("rating");
    const writeArea = document.getElementById("writeArea");

    var div = document.createElement("DIV");
    var rating = document.createElement("DIV");
    var text = document.createElement("DIV");

    rating.innerHTML = ratings.options[ratings.selectedIndex].text;
    div.appendChild(rating);

    text.innerHTML = writeArea.value;
    div.appendChild(text);

    writeArea.value = "";

    document.getElementById("comment").appendChild(div);
  });

  const removeCommentsButton = document.getElementById("remove-comments");

  removeCommentsButton.addEventListener("click", function () {
    var r = window.confirm("Are you sure?");
    if (r === true) {
      document.getElementById("comment").innerHTML = "";
    } else {
      console.log("Removing comments cancelled by user");
    }
  });
}
