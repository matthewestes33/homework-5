
// jQuery document ready
$(document).ready(function () {

    // variable related to momentJS notation 
    var timeNow = moment().format("MMMM Do YYYY");

    // variable related to html header 
    var currentTime = $("#currentDay");

    // additional variables 
    var hour = moment().hours();
    var userInput;
    var hourSpan;

    // variable relating hours to each html id tag
    var eight = $("#8am")
    var nine = $("#9am");
    var ten = $("#10am");
    var eleven = $("#11am");
    var twelve = $("#12pm");
    var one = $("#13pm");
    var two = $("#14pm");
    var three = $("#15pm");
    var four = $("#16pm");

    // displays time in selected format
    currentTime.text(timeNow);

    // function to activate each row and retrieve data from local storage for each row
    function startPage() {

        var start8 = JSON.parse(localStorage.getItem("08:00 am"))
        eight.val(start8);
        var start9 = JSON.parse(localStorage.getItem("09:00 am"));
        nine.val(start9);
        var start10 = JSON.parse(localStorage.getItem("10:00 am"))
        ten.val(start10);
        var start11 = JSON.parse(localStorage.getItem("11:00 am"))
        eleven.val(start11);
        var start12 = JSON.parse(localStorage.getItem("12:00 pm"))
        twelve.val(start12);
        var start1 = JSON.parse(localStorage.getItem("01:00 pm"))
        one.val(start1);
        var start2 = JSON.parse(localStorage.getItem("02:00 pm"))
        two.val(start2);
        var start3 = JSON.parse(localStorage.getItem("03:00 pm"))
        three.val(start3);
        var start4 = JSON.parse(localStorage.getItem("04:00 pm"))
        four.val(start4);
    }
    startPage()

    // an each function to execute for each matched element
    function evolve() {

        $(".form-control").each(function () {
            //parses id tags from html and returns appropriate integer value
            var timeTest = parseInt($(this).attr("id"));
            //parses time from momentJS and returns appropriate integer value
            hour = parseInt(hour);
            //conditional statements that specify past, present, future when comparing html id tags and time from Moment JS
            if (hour > timeTest) {
                $(this).addClass("past");
            } else if (hour < timeTest) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present");
            }
        });
    }
    evolve()

    // event listener looking for specific user action
    $(".saveBtn").on("click", function () {
        //defines where in html userInput will be drawn from
        userInput = $(this).siblings(".form-control").val().trim();
        //defines what id tag will generate the value html hourSpan will be assigned
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        //creates local storage item, consisting of the appropriate timeblock and user's input
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })

});