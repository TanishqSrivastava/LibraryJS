const myLibrary = [];
const btn = document.getElementById("submit");

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
   return `${name} by ${author}, ${pages} pages, ${read}`;
}}

function addBookToLibrary(book) {
    myLibrary.push(book);
}
const container = document.getElementById("container");
const add = document.getElementById("Add");
add.addEventListener("click", () => {
    const form = document.getElementById("form");
    form.style.display = "flex";
});
const close = document.getElementById("close");
btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    const book = new Book(name, author, pages, read);
    addBookToLibrary(book);
    console.log(myLibrary);
    const di = document.createElement("div");
    di.innerHTML = `<h1> ${book.name} </h1> <p> ${author} </p> <p> ${pages} </p> <p> ${read}</p> <button class="delete">Delete</button> <button class="read">Read</button> <button class="notread">Not Read</button>`
    container.appendChild(di);
    
    }
);
close.addEventListener("click", () => {
    const form = document.getElementById("form");
    form.style.display = "none";
});
container.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("delete")) {
      container.removeChild(target.parentElement);
    }
    // Add logic for the "Read" and "Not Read" buttons if needed
    if (target.classList.contains("read")){
        target.parentElement.children[3].innerHTML = "Read";
        console.log("test2");
    }
    if (target.classList.contains("notread")){
        target.parentElement.children[3].innerHTML = "Not Read";
        console.log("test");
    }
  });


