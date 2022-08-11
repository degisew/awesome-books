const section = document.querySelector('.container');
const mainForm = document.getElementById('book-form');
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
section.prepend(bookList);

const anyRandomNAme = () => {
  book.list.forEach((each, bookId) => {
    const list1 = document.createElement('li');
    list1.className = 'list';

    const title = document.createElement('h2');
    title.innerHTML = `"${each.title}"`;
    const phrase = document.createElement('b');
    phrase.textContent = "By";
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

const formHeading = document.createElement('h1');
formHeading.className = 'form-heading';
formHeading.textContent = 'All Awesome Books';

section.prepend(formHeading);

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