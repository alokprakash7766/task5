async function fetchAPI() {
    const outputDiv = document.getElementById('output');

    // Call an online API
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + (Math.floor(Math.random() * 100) + 1));

        if (!response.ok) {
            throw new Error('API request failed with status ' + response.status);
        }

        const data = await response.json();

        // Display the API response
        outputDiv.textContent = `Title: ${data.title}\nBody: ${data.body}`;
    } catch (error) {
        outputDiv.textContent = 'Error: ' + error.message;
    }
}