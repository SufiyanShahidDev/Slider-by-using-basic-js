let data = [
    {
        name: "Arham Maqsood",
        domain: "Custom Web Application",
        description: "We worked with them on a custom web application for our internal operations. The team showed strong technical skills and handled all revisions professionally. The application is stable, well-structured, and easy to use.",
        image: "./asset/img1.jpg",
    },
    {
        name: "Nehal",
        domain: "Mobile App Development",
        description: "This software house developed a mobile application for our business, and we are satisfied with the outcome. They guided us throughout the process, from planning to deployment, and provided reliable support even after delivery.",
        image: "./asset/img2.jpg",
    },
    {
        name: "Umer",
        domain: "Website Redesign & Maintenance",
        description: "They handled our website redesign and ongoing maintenance. The team improved both performance and appearance while ensuring everything worked smoothly. Their professionalism and timely delivery made the collaboration very positive.",
        image: "./asset/img3.jpg",
    }
];

let reviewerImg = document.getElementById("reviewer-img");
let reviewer = document.getElementById("reviewer");
let job = document.getElementById("job");
let description = document.getElementById("description");

let count = 0;

function showPerson() {
    reviewerImg.src = data[count].image;
    reviewer.textContent = data[count].name;
    job.textContent = data[count].domain;
    description.textContent = data[count].description;
}

function nextPerson() {
    count++;
    if (count > data.length - 1) {
        count = 0;
    }
    showPerson();
}

function prevPerson() {
    count--;
    if (count < 0) {
        count = data.length - 1;
    }
    showPerson();
}

function randomPerson() {
    count = Math.floor(Math.random() * data.length);
    showPerson();
}

showPerson();