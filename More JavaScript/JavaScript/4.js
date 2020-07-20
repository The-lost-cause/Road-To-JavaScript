// Promise.All Method Understanding 

let promise = Promise.all(
    [
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000)),
    ]
).then(alert);


// Example : 2 Promise.all Method API understanding

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// Map every url to the promise by using Fetch API

let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved

Promise.all(requests).then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
));

// Promise.allSettled : Recent Addition to the language 

let url = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(url.map(url => fetch(url))).then(
    results => {
        results.forEach((result, num) => {
            if (result.status == 'fulfilled') {
                alert(`${url[num]}: ${result.value.status}`)
            }
            if (result.status == 'rejected') {
                alert(`${url[num]}: ${result.reason}`)
            }
        });
    }
)


// Promise.race Method

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1