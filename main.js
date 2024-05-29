fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => response.json())
    .then(date => createCards(date))
    .catch(error => console.error('Error fetching date:', error));
function createCards(users) {
    const container = document.getElementById('user-cards-container');

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        const id = document.createElement('h2');
        id.textContent = user.id;
        
        const title = document.createElement('p');
        title.textContent = `Title: ${user.title}`;

        const completed = document.createElement('p');
        completed.textContent = `Complated: ${user.completed}`;

        card.appendChild(id);
        card.appendChild(title);
        card.appendChild(completed);

        container.appendChild(card);
    })
}   