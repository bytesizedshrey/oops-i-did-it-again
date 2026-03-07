//promises and async and await

//promise -> do this work and then do this work and then do this work and if any error occurs then catch the error.
//pending state -> when the promise is created but not yet resolved or rejected.
//resolved state -> when the promise is resolved successfully.
//rejected state -> when the promise is rejected due to some error. 

//async and await -> it is a syntactic sugar over promises. it makes the code look cleaner and easier to read. it is used to handle asynchronous operations in a more synchronous way. it is used to avoid callback hell and to make the code more readable.

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully");
    }, 2000);
})