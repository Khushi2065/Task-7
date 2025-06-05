const API_URL = 'https://jsonplaceholder.typicode.com/users';
const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

async function fetchUsers() {
  userContainer.innerHTML = 'Loading...';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch data');

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  userContainer.innerHTML = '';
  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';

    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.suite}, ${user.address.street}, ${user.address.city}</p>
    `;

    userContainer.appendChild(userCard);
  });
}

reloadBtn.addEventListener('click', fetchUsers);

fetchUsers();
