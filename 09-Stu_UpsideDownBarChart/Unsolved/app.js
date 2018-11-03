// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("svg-area")
    .append("svg")
    .attr("height", "600")
    .attr("width", "400")

// Vertical Bar Chart
svg.append("barchart")
    .classed("bar", true)
    .data(booksReadThisYear)
    .attr("width", 100)
    .attr("height", function(d) {
        return d * 10;
    }

)


// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
