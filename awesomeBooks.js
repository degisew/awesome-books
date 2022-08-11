// const mainContainer = document.querySelector('.container');
// const innerContainer = document.querySelector('.inner-container');
const form = document.getElementById('book-form');

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

const displayDiv = document.querySelector('.book-display');

const line = document.createElement('hr');

form.style.marginTop = '30px';

let books = [];
function addBook(bt, ba) {
  const book = {
    title: bt,
    author: ba,
  };
  books = books.concat(book);
  const stringfied = JSON.stringify(books);
  localStorage.setItem('data', stringfied);
}
function displayBook() {
  const getLSData = localStorage.getItem('data');
  if (getLSData !== null) {
    displayDiv.innerHTML = '';
    const parsed = JSON.parse(getLSData);
    books = parsed;
    books.forEach((element) => {
      // looping through the array of books.
      displayDiv.innerHTML += `<p>${element.title}</p>
        <p>${element.author}</p>
        <button class="btn-remove" id="${element.title}" type="button">Remove</button>
            `;
      // onclick = $removeBook(this.id)
      displayDiv.append(line);
    });
  } else {
    books = [];
  }
}
// executes automatically when the page is loaded.
window.addEventListener('load', () => {
  displayBook();
});

function removeBook(title) {
  books = books.filter((book) => book.title !== title);
  localStorage.setItem('data', JSON.stringify(books));
  displayDiv.innerHTML = '';
  displayBook();
}

displayDiv.addEventListener('click', (e) => {
  removeBook(e.target.id);
});

form.addEventListener('submit', () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  addBook(title, author);
  displayDiv.innerHTML = '';
  displayBook();
  bookTitle.value = '';
  bookAuthor.value = '';
});
