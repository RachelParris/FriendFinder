const path = require("path");
const express = require("express");
const friendsData = require('../data/friends.js');
const app = module.exports = express();

var test = friendsData[0].scores
console.log(test);

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

// A POST routes /api/friends. This will be used to handle incoming survey results and compatibility logic.
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  res.json(newFriend);
  friendsData.push(newFriend);

  let secondArr = test.forEach(function (x) {
    return x.scores
  });
  console.log(secondArr);

  let firstArr = newFriend.scores;
  // let secondArr = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];

  // Iterates through two arrays and finds the difference of the element of the same index.
  function differenceArray(arr1, arr2) {
    return firstArr.map(function (x, i) {
      var tally = parseInt(x) - arr2[i];
      return Math.abs(tally);
    });
  }

  var tally = differenceArray(firstArr, secondArr);
  console.log(tally);

  // Finds the sum of the entire array.
  var sum = tally.reduce(function (total, num) {
    return total += num;
  });

  console.log(sum);
});
