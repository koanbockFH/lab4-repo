function toggleAnswer(button) {
    let paragraph = button.parentElement.getElementsByTagName("p")[0];
    if (button.innerHTML.includes("show")) {
        button.innerHTML = "hide";
        paragraph.style.display = "block";
    }
    else if (button.innerHTML.includes("hide")) {
        button.innerHTML = "show";
        paragraph.style.display = "none";
    }
}
