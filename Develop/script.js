$(".btn").on("click",function(event){ // add event click listener -- specifies which btn is clicked
    event.preventDefault() // good input to have
    var hour = $(this).attr("id").split("-")[0] // targets only the id, split id into '12 | savebtn', target first elemnt [0] = 12
    var usePlan = $("#"+hour + "-planner").val() // generating a new id with the corresponding textarea and grabbing the value
    console.log(hour,usePlan)
    localStorage.setItem(hour,usePlan) // added localStorage
});

var currentHour = moment().hours() // current time
console.log(currentHour)

for(let i=9;i<=17;i++){ // create for loop to display localStorage from textarea after refreshing
    $("#"+i+"-planner").val(localStorage.getItem(i)) // targets each textarea based on #id-planner
    if (currentHour<i) { // checking time block if it's past, present, future
        $("#"+i+"-planner").addClass("bg-success")
    } else if (i === currentHour) {
        $("#"+i+"-planner").addClass("bg-info")
    } else {
        $("#"+i+"-planner").addClass("bg-warning")
    }
};

var timer = setInterval(function(){ // display current time function
    $("#currentDay").text(moment()) // display function in p based on id, displays text in moment.js
},1000)