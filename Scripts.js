
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
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

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

}