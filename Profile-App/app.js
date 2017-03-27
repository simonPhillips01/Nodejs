// Problem: We need a simple way to look at a user's badge count and Javascript pounts
// Solution: Use Node.js to connect to Treehouse's API to get profile information out

// Require HTTPS module
const https = require('https');
const username = "simonphillips2";

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
  console.log(message);
}


// Connect to the API URl (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  let body = "";
  // Read the data
  response.on('data', data => {
    body += data.toString();
  });

  response.on('end', () => {
    // Parse the data
    console.log(body);
    console.log(typeof body);
    // Print the data
});
