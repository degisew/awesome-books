const mainContainer = document.querySelector(".container");
const innerContainer = document.querySelector(".inner-container");
const form = document.getElementById("book-form");

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");

const displayDiv = document.querySelector(".book-display");
const removeBtn = document.createElement("button");
removeBtn.type = "button";
removeBtn.className = "btn-remove";
removeBtn.textContent = "Remove";


const line = document.createElement("hr");

form.style.marginTop = "30px";
// const titleInput = document.createElement("input");
// const authorInput = document.createElement("input");
// const addBtn = document.createElement("button");
// const deleteBtn = document.createElement("button");
// const form = document.createElement("form");

// titleInput.placeholder = "title";
// titleInput.type = "text";
// titleInput.name = "title";
// titleInput.id = "title";
// authorInput.placeholder = "author";
// authorInput.type = "text";
// addBtn.type = "button";
// addBtn.textContent = "Add";
// deleteBtn.textContent = "Remove";

// form.append(titleInput);
// form.append(authorInput);
// form.append(addBtn);
// mainContainer.append(form);
// form.style.display = "block";
// form.style.padding = "10px";

let books = [];
function addBook(bt, ba) {
  const book = {
    title: bt,
    author: ba,
  };
  books.push(book);
  const stringfied = JSON.stringify(books);
  localStorage.setItem("bookLists", stringfied);
}

let getLSData = localStorage.getItem("bookLists");
function displayBook() {
  //localStorage.removeItem('bookLists');
  if (getLSData !== null) {
    const parsed = JSON.parse(getLSData);
    books = parsed;
    books.forEach((element, index) => {
      //looping through the array of books.
      displayDiv.innerHTML =
        displayDiv.innerHTML +
        `<p>${element.title}</p>
        <p>${element.author}</p>
            `;
      displayDiv.append(removeBtn);
      removeBtn.id = `${index}`;
      displayDiv.append(line);
    });
  } else {
    books = [];
  }
}

//executes automatically when the page is loaded.
 document.addEventListener("DOMContentLoaded", displayBook);

removeBtn.addEventListener("click", (event)=>{

  for (let i = 0; i < books.length; i++) {
    if (books[i] == books[event.target.id]) {
      const x = books.splice(event.target.id, 1);
      console.log(event.target.id);
      console.log(x);
      console.log(books);
      localStorage.setItem("bookLists", JSON.stringify(books));
      // const parent = e.target.parentElement;
      // parent.remove();
    }
  }
});
//function removeBook(e) {
//}

form.addEventListener("submit", () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  addBook(title, author);
  displayBook();
  bookTitle.value = "";
  bookAuthor.value = "";
});
