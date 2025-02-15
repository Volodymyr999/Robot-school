const apiUrl = "https://jsonpla";
const apiUrl2 = "https://jsonplaceho";


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
        throw error;
    }
}

async function callRequest() {
    try {
        const data = await fetchData(apiUrl);
        console.log(data);
    }
    catch {
        try {
            const data2 = await fetchData(apiUrl2);
            console.log(data2);
        }
        catch (secondError) {
            //throw new Error("secondError" + secondError.message);
            console.error("second Error " + secondError.message);
        }
    }
}


function processData(data) {
    console.log("Data received:", data);
}

callRequest();
