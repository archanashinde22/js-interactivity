console.log(`Hello World`);

messaage = document.querySelector(`#message`);

//In this step, we’ll start creating our JavaScript function for adding a movie to our list when the Add button is pressed. We’ll need to add the event listener, get the value from the input box, and create a new element in the list.
const addMovie = (evt) => {
  evt.preventDefault();
  const inputField = document.querySelector("input");

  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movie.appendChild(movieTitle);
  const deletBtn = document.createElement("button");
  deletBtn.textContent = "X";
  movie.appendChild(deletBtn);
  deletBtn.addEventListener("click", deleteMovie);
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  document.querySelector("ul").appendChild(movie);
  inputField.value = " ";
};
const deleteMovie = (evt) => {
  const title = evt.target.parentNode.textContent
  messaage.textContent = `${title} Deleted !`;

  //console.log(messaage.textContent);
  revealMessage();
  evt.target.parentNode.remove();
};
document.querySelector("form").addEventListener("submit", addMovie);
// Now that we can add and remove movies from our list, we can add to our app by allowing users to mark items as watched by clicking on a movie’s title. The CSS has already been set up to display list items differently if they have the checked class. We need to create a function that will toggle the checked class on any movie title.

const crossOffMovie = (evt) => {
  evt.target.classList.toggle("checked");
  const title = evt.target.textContent;
  if (evt.target.classList.contains("checked") === true) {
    messaage.textContent = `${title} watched!’ !`;
  } else {
    messaage.textContent = `${title} added back!`;
    // console.log(messaage.textContent);
  }
  revealMessage();
};

function revealMessage() {
  messaage.classList.remove("hide");
  setTimeout(() => {
    messaage.classList.add("hide");
  }, 1000);
}
