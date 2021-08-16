const promise1 = createPromise(400, 'one');
const promise2 = createPromise(300, 'two');
const promise3 = createPromise(500, 'three');
const promiseRejected1 = createPromise(50, 'rejected one', false);

function createPromise(delay, res, success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(success ? resolve : reject, delay, res);
    });
}

Promise.any([promise1, promise2, promise3, promiseRejected1]).then((value) => console.log(value)).catch(e => console.log(e));
// expected output: "two"

Promise.race([promise1, promise2, promise3, promiseRejected1]).then((value) => console.log(value)).catch(e => console.log(e));
// expected output: "rejected one"
