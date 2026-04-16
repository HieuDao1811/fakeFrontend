const myLibrary = [];
const openDialogBtn = document.getElementById("openDialog");
const closeDialogBtn = document.getElementById("closeDialog");
const bookDialog = document.getElementById("bookDialog");
const addBtn = document.getElementById("add");
const bookForm = document.getElementById("bookForm");
const container = document.querySelector(".container");

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

openDialogBtn.addEventListener("click", () => {
  bookDialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  bookDialog.close();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value.trim();
  let author = document.getElementById("author").value.trim();
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title, author, pages, isRead);
  displayBooks();

  bookForm.reset();
  bookDialog.close();
  console.log(myLibrary);
});

function displayBooks() {
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    container.innerHTML += `
    <div class="book-card" data-id="${book.id}">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.isRead ? "Read" : "Not read"}</p>
      
      <button class="toggle-read-btn">${book.isRead ? "Mark as unread" : "Mark as read"}</button>
      <button class="delete-btn">Delete</button>
    </div>
    `;
  });
}

function toggleReadStatus(id) {
  const book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.isRead = !book.isRead;
  }
}

function removeBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}

container.addEventListener("click", (e) => {
  const card = e.target.closest(".book-card");
  if (!card) return;

  const id = card.dataset.id;

  if (e.target.classList.contains("toggle-read-btn")) {
    toggleReadStatus(id);
    displayBooks();
  }

  if (e.target.classList.contains("delete-btn")) {
    removeBook(id);
    displayBooks();
  }
});