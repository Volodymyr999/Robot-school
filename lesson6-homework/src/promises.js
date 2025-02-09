const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function fetchData(url) {
    fetch(url)
        .then((response) => {
            /*if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }*/
            return response.json();
        })
        .then((data) => {
            processData(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
function processData(data) {
    console.log("Data received:", data);
}

fetchData(apiUrl);
