let inputDetails = {};
let progress = 0;

function updateProgress(percentage) {
    progress = percentage;
    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("progress").innerHTML = progress + "%";
}

function getUserDetails() {
    let fname = prompt("Enter your first name:", inputDetails.firstName || "");
    let lname = prompt("Enter your last name:", inputDetails.lastName || "");
    let age = prompt("Enter your age:", inputDetails.age || "");
    let gender = prompt("Enter your gender:", inputDetails.gender || "");
    let privacy = prompt("Agree with privacy terms (yes/no):", inputDetails.privacyterms || "");

    inputDetails.firstName = fname;
    inputDetails.lastName = lname;
    inputDetails.age = age;
    inputDetails.gender = gender;
    inputDetails.privacyterms = privacy;

    document.getElementById("personalDetailsContent").innerHTML =
        "First Name: " + fname + "<br>" +
        "Last Name: " + lname + "<br>" +
        "Age: " + age + "<br>" +
        "Gender: " + gender + "<br>" +
        "Agree with privacy terms: " + privacy + "<br>";

    document.getElementById("startButton").style.display = "none";
    updateProgress(40);
    document.getElementById("buttonSection1").style.display = "block";
    document.getElementById("personalDetails").style.display = "block";
}

function getVolunteeringDetails() {
    document.getElementById("buttonSection1").style.display = "none";

    let participate = prompt("Have you participated in volunteering tasks before? (yes/no)", inputDetails.participate || "");
    let area = prompt("In what area do you like to volunteer? \n 1) Animal \n 2) Forest \n 3) Eco system", inputDetails.area || "");
    let task = prompt("In what task do you like to volunteer in? \n 1) Volunteering at an animal shelter \n 2) Plant trees \n 3) Join clean-up", inputDetails.task || "");
    let committee = prompt("Would you like to join our volunteering committee? (yes/no)", inputDetails.committee || "");

    inputDetails.participate = participate;
    inputDetails.area = area;
    inputDetails.task = task;
    inputDetails.committee = committee;

    document.getElementById("volunteeringDetailsDisplay").innerHTML =
        "Participated before: " + participate + "<br>" +
        "Area: " + area + "<br>" +
        "Task: " + task + "<br>" +
        "Committee: " + committee + "<br>";

    updateProgress(70);
    document.getElementById("buttonSection2").style.display = "block";
    document.getElementById("volunteeringDetails").style.display = "block";
}

function getContactDetails() {
    document.getElementById("buttonSection2").style.display = "none";

    let days = prompt("What days can you join with us?", inputDetails.days || "");
    let email = prompt("Enter your e-mail:", inputDetails.email || "");
    let number = prompt("Enter your phone number:", inputDetails.number || "");
    let address = prompt("Enter your address:", inputDetails.address || "");

    inputDetails.days = days;
    inputDetails.email = email;
    inputDetails.number = number;
    inputDetails.address = address;

    document.getElementById("contactDetailsContent").innerHTML =
        "Days: " + days + "<br>" +
        "Email: " + email + "<br>" +
        "Phone Number: " + number + "<br>" +
        "Address: " + address + "<br>";

    updateProgress(100);
    document.getElementById("contactDetails").style.display = "block";
    document.getElementById("editButton").style.display = "block";
    document.getElementById("submit").style.display = "block";
}

function editForm() {
    getUserDetails();
    getVolunteeringDetails();
    getContactDetails();
    document.getElementById("submit").style.display = "block";
    document.getElementById("editButton").style.display = "block";
}

function submitAlert() {
    alert("Submitted successfully!");
    document.getElementById("submit").style.display = "none";
    document.getElementById("editButton").style.display = "none";
}
