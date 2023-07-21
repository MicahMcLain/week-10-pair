document.addEventListener('DOMContentLoaded', () => {
    onLoaded();
    for (let i = 1; i <= 10; i++) {
        createProblem(getRandomNumber(10), getRandomNumber(10));
    }



});
function onLoaded() { }
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}
function createProblem(num1, num2) {
    // const num1 = getRandomNumber(10);
    // const num2 = getRandomNumber(10);
    let problem = num1 + '*' + num2;
    const problemAnswer = num1 * num2;
    let problemBox = document.querySelector('.expression');
    problemBox.innerText = problem;
    const ans = 10;
    const answers = [(getRandomNumber(10) * getRandomNumber(10)), (getRandomNumber(10) * getRandomNumber(10)),
    (getRandomNumber(10) * getRandomNumber(10)), problemAnswer];
    shuffleArray(answers);
    const answerBox1 = document.getElementById('answer-one');
    const answerBox2 = document.getElementById('answer-two');
    const answerBox3 = document.getElementById('answer-three');
    const answerBox4 = document.getElementById('answer-four');
    answerBox1.innerText = answers[0];
    answerBox2.innerText = answers[1];
    answerBox3.innerText = answers[2];
    answerBox4.innerText = answers[3];

}
