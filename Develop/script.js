$(".btn").on("click",function(event){ // add event click listener -- specifies which btn is clicked
    event.preventDefault() // good input to have
    var hour = $(this).attr("id").split("-")[0] // targets only the id, split id into '12 | savebtn', target first elemnt [0] = 12
    var usePlan = $("#"+hour + "-planner").val() // generating a new id with the corresponding textarea and grabbing the value
    console.log(hour,usePlan)
    localStorage.setItem(hour,usePlan)
});

