const mainContainer = document.querySelector('.container');


const books = [
    {
    title: 'Dertogada',
    author: 'Yismake Worku'
    },
    {
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill'
    },
    {
    title: 'Think Positively',
    author: 'Shiv Kera'
    },
    {
    title: 'Kidagaa kimemuozea by Ken',
    author: 'walibora'
    },
    {
    title: 'Fikir Eskemekabir',
    author: 'Hadis Alemayehu'
    }
];

books.forEach((book)=>{
    mainContainer.innerHTML =
      mainContainer.innerHTML +
      `
<p><b>${book.title}</b></p>
<p>${book.author}</p>
<button type="button">Remove</button><hr>`;
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
