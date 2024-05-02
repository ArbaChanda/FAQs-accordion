// let answers = document.getElementsByClassName("answer");

// answers.addEventListner("click", () => {
//     answers.style.remove("display")
// });

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
