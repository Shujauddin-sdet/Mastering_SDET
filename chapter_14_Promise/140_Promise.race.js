let fastServer = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Fast 1000ms");
  }, 1000);
});

let slowServer = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Fast 500ms");
  }, 500);
});

Promise.race([fastServer, slowServer]).then(function (winner) {
  console.log("Winner:", winner);
});
