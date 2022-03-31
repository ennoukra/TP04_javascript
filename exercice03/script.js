quizResponse = document.getElementById("quiz-response");
quizResponse.lastElementChild.insertAdjacentHTML(
    "beforebegin",
    "<li>push</li>"
);
// quizResponse.insertAdjacentHTML("beforeEnd", "<li>push</li>");
quizResponse.insertAdjacentHTML("beforeEnd", "<li>Autre</li>");
