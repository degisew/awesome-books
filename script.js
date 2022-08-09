const section = document.querySelector('.container');
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
    console.log("id is" + getId);
    let new1 = 0;
    while (new1 < this.list.length) {
      console.log("new1" + new1.toString() +" and "+getId );
      if (new1.toString() === getId) {
        console.log("Remove");
        this.list.splice(new1, 1);
        localStorage.setItem('data', JSON.stringify(this.list));
      }

      new1 += 1;
    }
    console.log("Remove");
    console.log(this.list);
  }
}

const book = new Book();

const heading = document.createElement('h1');
heading.innerHTML = 'All awesome books';
section.appendChild(heading);

const bookList = document.createElement('ul');
const line = document.createElement('hr');
line.className = 'underline';

bookList.className = 'book-list';
section.appendChild(bookList);
section.appendChild(line);

const anyRandomNAme = () => {
  console.log("anyRandomName");
  console.log(book.list);
  book.list.forEach((each, bookId) => {
    const list1 = document.createElement('li');
    list1.className = 'list';

    const title = document.createElement('h2');
    title.innerHTML = `"${each.title}" by`;
    list1.appendChild(title);

    const author = document.createElement('h2');
    author.innerHTML = each.author;
    list1.appendChild(author);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    console.log(bookId);
    removeButton.id = `${bookId}`;
    removeButton.innerHTML = 'Remove';
    list1.appendChild(removeButton);

    bookList.appendChild(list1);

    removeButton.addEventListener('click', function removeBtnHandler() {
      const getId = this.id;
      book.remove(getId);
      bookList.innerHTML='';
      anyRandomNAme();
    });
  });
};

const inputDiv = document.createElement('div');
const formHeading = document.createElement('h3');
formHeading.className = 'form-heading';
formHeading.textContent = 'Add a new book';

inputDiv.className = 'input-fields';
inputDiv.appendChild(formHeading);
section.appendChild(inputDiv);

const bookTitle = document.createElement('input');
bookTitle.type = 'text';
bookTitle.name = 'title';
bookTitle.className = 'input title';
bookTitle.id = 'title';
bookTitle.placeholder = 'Title';
inputDiv.appendChild(bookTitle);

const bookAuthor = document.createElement('input');
bookAuthor.type = 'text';
bookAuthor.id = 'author';
bookAuthor.className = 'input author';
bookAuthor.name = 'author';
bookAuthor.placeholder = 'Author';
inputDiv.appendChild(bookAuthor);

const addButton = document.createElement('button');
addButton.className = 'input add';
addButton.innerHTML = 'Add';
inputDiv.appendChild(addButton);

addButton.addEventListener('click', () => {
  bookList.innerHTML='';

  const valueOfTitle = document.querySelector('.title').value;
  const valueOfAuthor = document.querySelector('.author').value;

  book.add(valueOfTitle, valueOfAuthor);
    anyRandomNAme();
});

const fetchDataList = localStorage.getItem('data');

if (fetchDataList !== null) {
  book.list = JSON.parse(fetchDataList);
  anyRandomNAme();
}