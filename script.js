
const pics=[
    "Developer.jpeg","Technician.jpeg",
];

let firstPic=0;

function myphoto(){
    firstPic++;
    if(firstPic>=pics.length){
        firstPic=0;
    }
    document.getElementById("photo1").src=pics[firstPic];
}

// Form validation
// document.addEventListener("DOMContentLoaded",() =>{
const form = document.querySelector("form");

if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const phone = form.querySelector('input[type="tel"]');
        const message = form.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            phone.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Please fill in all required fields.");

            return;

        }
        
        alert("Thank you! Your message has been sent successfully.");
        
        form.reset();

    });

// })