//Day-11: Promises and Async/Await

//Create a promise that resolves after 2 seconds
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

//Log the resolved message to the console
promise.then((message) => console.log(message));

// Create a promise that rejects after 2 seconds
const request = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Request has been rejected!");
  }, 2000);
});

// Log the rejected message to the console
request.catch((err) => console.log(err));

//Chaining promises

// Simulate fetching data from a server with promises
function fetchDataFromServer(data, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched: ${data}`);
    }, delay);
  });
}

// Chain the promises to log messages in a specific order
fetchDataFromServer("User Data", 2500)
  .then((result) => {
    console.log(result); // Log the first data fetch result
    return fetchDataFromServer("Post Data", 2500);
  })
  .then((result) => {
    console.log(result); // Log the second data fetch result
    return fetchDataFromServer("Comment Data", 2500);
  })
  .then((result) => {
    console.log(result); // Log the third data fetch result
    console.log("All data fetched successfully!");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//Using Async/Await

// Function that returns a promise that resolves after 2 seconds
function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Waiting for the promise to resolve...");
      resolve("Promise resolved");
    }, 3000);
  });
}

// Async function that waits for the promise to resolve
async function logResolvedValue() {
  //Wait for the promise to resolve and get the resolved value
  const resolvedValue = await resolveAfter3Seconds();

  //log the resolved value
  console.log(resolvedValue);
}

//Call the async function
logResolvedValue();

// Function that returns a promise that rejects after 3 seconds
function rejectAfter3Seconds() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Promise rejected due to an error!");
    }, 3000);
  });
}

// Async function that handles the rejected promise
async function handleRejectedPromise() {
  try {
    console.log("Waiting for the promise to resolve...");

    // Wait for the promise to resolve, but this will reject
    const resolvedValue = await rejectAfter3Seconds();

    // Log the resolved value if successful (this line won't run in this example)
    console.log(resolvedValue);
  } catch (error) {
    // Catch and log the error if the promise is rejected
    console.error("Caught an error:", error);
  }
}

// Call the async function
handleRejectedPromise();

//Fetching Data from an API

//Use the fetch API to get data from a public API using promises
function getDetails(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      // Check if the response status is OK (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON data from the response
      return response.json();
    })
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Error fetching data:", error);
    });
}
getDetails(1);

// Use the fetch API to get data from a public API using async/await
async function getUserDetails(id) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);

    if (!response.ok) {
      throw new Error("No Data Present");
    }
    const user = await response.json();

    // Log the fetched user data
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

getUserDetails(2);

//Concurrent promises

/*Use promise.all to wait for multiple promises to resolve
 and then log their values  */

// Simulate fetching data with promises
function fetchData(data, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched: ${data}`);
    }, delay);
  });
}

// Create multiple promises
const promise1 = fetchData("User Data", 2000);
const promise2 = fetchData("Post Data", 3000);
const promise3 = fetchData("Comment Data", 1000);

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // Log the resolved values
    console.log("All promises resolved:");
    results.forEach((result, index) => {
      console.log(`Promise ${index + 1}: ${result}`);
    });
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });

/*Use promise.race to log the value of the first promise that 
resolves that resolves among multiple promises. */

// Simulate fetching data with promises
function fetchData(data, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched: ${data}`);
    }, delay);
  });
}

// Create multiple promises with different delays
const promiseOne = fetchData("User Data", 3000);
const promiseTwo = fetchData("Post Data", 2000);
const promiseThree = fetchData("Comment Data", 1000);

// Use Promise.race to log the value of the first resolved promise
Promise.race([promiseOne, promiseTwo, promiseThree])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.error("A promise rejected:", error);
  });
