const tbody = document.getElementById('tbody');
const booksDisplay = document.getElementById('booksDisplay');
const tableD = document.querySelector('table');
const form = document.getElementById('form');
const bookArr = [];

// Create book object on click of submit

form.addEventListener('submit', (e) => {
  e.preventDefault();
  loadBooks();
});
tableD.addEventListener('click', deleteBtn);

function deleteBtn(e) {
  if (!e.target.classList.contains('removeBtn')) {
    return;
  } else {
    const btn = e.target;
    btn.closest('tr').remove();
  }
}

function loadBooks() {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;

  tbody.innerHTML += `
    <tr>
      <td>${bookTitle}</td>
      <td>${bookAuthor}</td>
      <td> <button class='removeBtn'>Remove</button> </td>
    </tr>
    `;
}
