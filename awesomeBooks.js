const mainContainer = document.querySelector(".container");
const innerContainer = document.querySelector(".inner-container");
const form = document.getElementById("book-form");

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");

const displayDiv = document.querySelector(".book-display");
// const removeBtn = document.createElement("button");
// removeBtn.type = "button";
// removeBtn.className = "btn-remove";
// removeBtn.textContent = "Remove";


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
  books=books.concat(book);
  const stringfied = JSON.stringify(books);
  localStorage.setItem("data", stringfied);
}


function displayBook() {
  let getLSData = localStorage.getItem("data");
  //localStorage.removeItem('bookLists');
  if (getLSData !== null) {
    displayDiv.innerHTML ="";
    const parsed = JSON.parse(getLSData);
    books = parsed;
    books.forEach((element, index) => {
      //looping through the array of books.
      displayDiv.innerHTML 
         +=
        `<p>${element.title}</p>
        <p>${element.author}</p>
        <button class="btn-remove" id="${element.title}" type="button" onclick= removeBook(this.id)>Remove</button>

            `;
      // displayDiv.append(removeBtn);
      // removeBtn.id = `${element.title}`;
      displayDiv.append(line);
    });
  } else {
    books = [];
  }
}

//executes automatically when the page is loaded.
 window.addEventListener('load', (e) => {
  displayBook();
});

function removeBook(title) {
  books = books.filter((book) => book.title !== title);
  localStorage.setItem('data', JSON.stringify(books));
  displayDiv.innerHTML ="";
  displayBook();

}

form.addEventListener("submit", () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  addBook(title, author);
  displayDiv.innerHTML ="";
  displayBook();
  bookTitle.value = "";
  bookAuthor.value = "";
});


