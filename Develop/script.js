$(".btn").on("click",function(event){ // add event click listener -- specifies which btn is clicked
    event.preventDefault() // good input to have
    var hour = $(this).attr("id") // targets only the id
    console.log(hour)
})