var today = moment();
var dayWeek = today.format("[Today is] dddd")
var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
var weekNum = today.format("w");
var refreshButtonEl = $('#refresh-btn');

$("#currentDay").text(today.format("MMM Do, YYYY"));
$("#2a").text(dayWeek);
$("#3a").text(reformatDate);
console.log(today.hours())

function getParsingFlags(save) {
    if (save._pf == null) {
        save._pf = defaultParsingFlags();
    }
    return save._pf;
}