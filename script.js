const section = document.querySelector('.container');
const mainForm = document.getElementById('book-form');
const displayPage = document.querySelector('.display-page');
const currentDate = document.createElement('div');
currentDate.id = 'displayDateTime';
const navBar = document.createElement('ul');
const navMenuDiv = document.createElement('div');
navMenuDiv.className = 'nav-menu-div';
navBar.className = 'nav-bar';
const navHeading = document.createElement('h2');
navHeading.textContent = 'Awesome Books';
navHeading.className = 'nav-title';
const listMenu = document.createElement('li');
listMenu.id = 'first-list';
const listLink = document.createElement('a');
listLink.textContent = 'List';
listLink.className = 'menu-link';
listMenu.append(listLink);
navMenuDiv.append(listMenu);

const addMenu = document.createElement('li');
addMenu.id = 'second-list';
const addLink = document.createElement('a');
addLink.textContent = 'Add Book';
addLink.className = 'menu-link';
addMenu.append(addLink);
navMenuDiv.append(addMenu);

const contactMenu = document.createElement('li');
contactMenu.id = 'third-list';
const contactLink = document.createElement('a');
contactLink.textContent = 'Contact';
contactLink.className = 'menu-link';
contactMenu.append(contactLink);
navMenuDiv.append(contactMenu);
navBar.append(navMenuDiv);
navBar.prepend(navHeading);

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const x = today.getHours() < 12 ? 'am' : 'pm';
const time = `${today.getHours()
}:${
  today.getMinutes()
}:${
  today.getSeconds()
} ${
  x}`;

const dateTime = `${date} ${time}`;

currentDate.innerHTML = dateTime;

class Book {
  constructor() {
    this.bobject = {};
    this.list = [];
  }

  add(title, author) {
    this.bobject = { title, author };
    this.list.push(this.bobject);
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  remove(getId) {
    let new1 = 0;
    while (new1 < this.list.length) {
      if (new1.toString() === getId) {
        this.list.splice(new1, 1);
        localStorage.setItem('data', JSON.stringify(this.list));
      }

      new1 += 1;
    }
  }
}

const book = new Book();

const bookList = document.createElement('ul');
bookList.style.marginTop = '20px';

bookList.className = 'book-list';
displayPage.append(bookList);
const anyRandomNAme = () => {
  book.list.forEach((each, bookId) => {
    const list1 = document.createElement('li');
    list1.className = 'list';

    const title = document.createElement('h2');
    title.innerHTML = `"${each.title}"`;
    const phrase = document.createElement('b');
    phrase.textContent = 'By';
    list1.appendChild(title);
    list1.appendChild(phrase);

    const author = document.createElement('h2');
    author.innerHTML = each.author;
    list1.appendChild(author);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.id = `${bookId}`;
    removeButton.innerHTML = 'Remove';
    list1.appendChild(removeButton);

    bookList.appendChild(list1);
    removeButton.addEventListener('click', function removeBtnHandler() {
      const getId = this.id;
      book.remove(getId);
      bookList.innerHTML = '';
      anyRandomNAme();
    });
  });
};

// SPA implementation

function listBook() {
  displayPage.style.display = 'flex';
  displayPage.style.flexDirection = 'column';
  document.querySelector('.add-page').style.display = 'none';
  document.querySelector('.contact-me').style.display = 'none';
}
window.addEventListener('load', () => {
  listBook();
});
listLink.addEventListener('click', () => {
  listBook();
});
addLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayPage.style.display = 'none';
  document.querySelector('.add-page').style.display = 'flex';
  document.querySelector('.contact-me').style.display = 'none';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayPage.style.display = 'none';
  document.querySelector('.add-page').style.display = 'none';
  document.querySelector('.contact-me').style.display = 'flex';
});

// const formHeading = document.createElement('h1');
// formHeading.className = 'form-heading';
// formHeading.textContent = 'All Awesome Books';

// section.prepend(formHeading);

const bookTitle = document.querySelector('#title');

const bookAuthor = document.querySelector('#author');

mainForm.addEventListener('submit', () => {
  bookList.innerHTML = '';
  const valueOfTitle = document.querySelector('#title').value;
  const valueOfAuthor = document.querySelector('#author').value;
  book.add(valueOfTitle, valueOfAuthor);
  anyRandomNAme();

  // call value rest method
  bookTitle.value = '';
  bookAuthor.value = '';
});
const fetchDataList = localStorage.getItem('data');
if (fetchDataList !== null) {
  book.list = JSON.parse(fetchDataList);
  anyRandomNAme();
}
section.prepend(currentDate);
section.prepend(navBar);