
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

    // variable related to each hour
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

    // main function to activate each row
    function startPage() {

        
        console.log("Current Hour " + hour);

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

    // function trying to call different CSS to render for past, present, future parts of day
    function evolve() {

        $(".form-control").each(function () {
            var timeTest = parseInt($(this).attr("id"));
            hour = parseInt(hour);
            console.log(timeTest);
            console.log(hour);
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

    // connects buttons to save on local storage
    $(".saveBtn").on("click", function () {
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));

    })

});