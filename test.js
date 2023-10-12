// const { exec } = require('child_process');
//
// function executeCommand(command) {
//   return new Promise((resolve, reject) => {
//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       if (stderr) {
//         reject(stderr);
//         return;
//       }
//       resolve(stdout);
//     });
//   });
// }
//
// // Example usage
// executeCommand('dir')
//   .then(output => console.log(output))
//   .catch(error => console.error(error));
const url = 'http://localhost:3000/api/run'; // Replace with your API endpoint URL

const postData = {
  command: 'dir',
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
