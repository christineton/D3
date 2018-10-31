var apiKey = "Qgb_okkUe9c7gcyp3_ix";

/* global Plotly */
var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=Qgb_okkUe9c7gcyp3_ix`;

d3.json(url).then(function(data) {
  console.log(data);
});
  
// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
// /**
//  * Helper function to select stock data
//  * Returns an array of values
//  * @param {array} data
//  * @param {integer} index
//  * index 0 - Date
//  * index 1 - Open
//  * index 2 - High
//  * index 3 - Low
//  * index 4 - Volume
//  */

// function unpack(data, index) {
//   return data.map(function(row) {
//     return row[index];
//   });
// }

// /**
//  * Fetch data and build the timeseries plot
//  */
// function buildPlot() {
//   // @TODO: YOUR CODE HERE
// }

// buildPlot();
