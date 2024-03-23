// const form=document.getElementByclass("btn").addeventlistner('submit',e=>{
//     e.preventDefault();
//     alert("Form Successfully Submitted!!")
// })
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the default form submission
    // var username=document.getElementByClassName("username").value.trim();
    // if(username ===" "){
    //     alert("Username is required");
    //     return;
    // }

    alert("Form submitted!"); // Display alert message
  });

  
