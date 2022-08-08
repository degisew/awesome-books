const mainContainer = document.querySelector('.container');

class Books {
  constructor(){
    this.bObject = {};
    this.list = [];
  }

  add (title, author) {
    this.bObject = {title, author};
    this.list.push(this.bObject);
  }
}
const books = [];


books.forEach((book)=>{
    mainContainer.innerHTML =
      mainContainer.innerHTML +
      `
<p><b>${book.title}</b></p>
<p>${book.author}</p>`;
});

const titleInput = document.createElement('input');
const authorInput = document.createElement('input');
const addBtn = document.createElement('button');
const form = document.createElement('form');

titleInput.placeholder = "title";
titleInput.type = "text";
titleInput.name = "title";
titleInput.id = "title";
authorInput.placeholder = "author";
authorInput.type = "text";
addBtn.type = "button";
addBtn.textContent = "Add";

form.append(titleInput);
form.append(authorInput);
form.append(addBtn);
mainContainer.append(form);
form.style.display = 'block';
form.style.columnGap = "10px";
