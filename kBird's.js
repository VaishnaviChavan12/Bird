 // To open a Gallery
 document.getElementById("page_link1").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("myFrame").src = "Gallery.html";
    document.getElementById("myFrame").style.display = "block";
});

//To open the Explore
document.getElementById("page_link2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("myFrame").src = "Explore.html";
    document.getElementById("myFrame").style.display = "block";
});

//To open the News
document.getElementById("page_link3").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("myFrame").src = "News.html";
    document.getElementById("myFrame").style.display = "block";
});

//To open the About
document.getElementById("page_link4").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("myFrame").src = "About.html";
    document.getElementById("myFrame").style.display = "block";
});

//To open the Tweetring
document.getElementById("page_link5").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("myFrame").src = "Tweets.html";
    document.getElementById("myFrame").style.display = "block";
});

//To highlight the selected link
const links = document.querySelectorAll('.nav-link');

// Add click event listeners to each link
links.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent the default behavior of the link (e.g., navigating to a new page)

        // Remove the 'selected-link' class from all links
        links.forEach(link => {
            link.classList.remove('selected-link');
        });

        // Add the 'selected-link' class to the clicked link
        e.target.classList.add('selected-link');
    });
});