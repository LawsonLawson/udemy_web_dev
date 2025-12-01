    const statement = document.querySelector("#statement");

    const optionButtons = document.querySelector("#options").children;

    const explanation = document.querySelector("#explanation");


    const fact = {
        statement: "Arrays are like objects.",
        answer: true,
        explanation: "Arrays are kind of objects with special properties."
    };
    
    statement.textContent = fact.statement;

    const disable = (buttonPassed) => { buttonPassed.setAttribute("disabled", true) };

    const enable = (buttonPassed) => { buttonPassed.removeAttribute("disabled") };

    const isCorrect = (userGuess) => { return userGuess === fact.answer.toString() };

    for (let button of optionButtons) { button.addEventListener("click", () => {
        explanation.textContent = fact.explanation;

    for (let enabledButtons of optionButtons) { disable(enabledButtons); };

    if (isCorrect(button.value)) { button.classList.add("correct") } else { button.classList.add("incorrect") };
});
};
