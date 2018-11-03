var austinWeather = [{
  date: "2018-02-01",
  low: 51,
  high: 76
},
{
  date: "2018-02-02",
  low: 47,
  high: 59
},
{
  date: "2018-02-03",
  low: 44,
  high: 59
},
{
  date: "2018-02-04",
  low: 52,
  high: 73
},
{
  date: "2018-02-05",
  low: 47,
  high: 71
}
];

d3.select("row").selectAll("th")
  .data(austinWeather)
  .enter() // creates placeholder for new data
  .append("th") // appends a div to placeholder
  .classes("col-md-12", true) // sets the class of the new div
  .html(function(d) {
    return ${d.url};
  });





