const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function fetchData(url) {
    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        processData(data);
    } catch (error) {

        console.error("Error fetching data:", error);
    }
}

function processData(data) {
    console.log("Data received:", data);
}

fetchData(apiUrl);
