document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('userContainer');
    const reloadButton = document.getElementById('reloadButton');
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    // Function to fetch and display users
    async function fetchAndDisplayUsers() {
        userContainer.innerHTML = 'Loading user data...'; // Show loading message

        try {
            // 2. Use JS fetch to request data
            const response = await fetch(API_URL);

            // Check if the network request was successful (status code 200-299)
            if (!response.ok) {
                throw new Error('HTTP error! status: ${response.status}');
            }

            // 3. Parse the JSON response
            const users = await response.json();

            // Clear previous content
            userContainer.innerHTML = '';

            // 4. Loop through users and display their name, email, and address
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card'); // Add a class for styling

                userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;
                userContainer.appendChild(userCard);
            });
        } catch (error) {
            // 5. Handle errors with catch block
            console.error('Error fetching or displaying user data:', error);
            userContainer.innerHTML = '<p class="error-message">Failed to load user data. Please try again. <br> Error: ${error.message}</p>';
        }
    }

    // Initial fetch when the page loads
    fetchAndDisplayUsers();

    // Add event listener to the reload button
    reloadButton.addEventListener('click', fetchAndDisplayUsers);
});