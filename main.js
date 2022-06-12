const newAdviceBtn = document.querySelector("button");
const cleanBtn = document.querySelector("#clean");
const showAdvice = document.querySelector("#showAdvice");
const showOptionBtn = document.querySelector("#showOption");
const h1 = document.querySelector('h1');

const advices = ["Działaj!", "Przemyśl to..."];

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const newAdvace = input.value;
    advices.push(newAdvace); 
    console.log(advices);
    input.value = "";
}

const cleaning = (e) => {
    e.preventDefault();

    advices.length = 2;
    console.log(advices);


}

const adviceGenerator = () => {
    const randomNumber = Math.floor(Math.random() * advices.length);
    h1.textContent = `Moja rada to: ${advices[randomNumber]}`;

    
}





newAdviceBtn.addEventListener('click', addAdvice);
cleanBtn.addEventListener('click', cleaning);
showAdvice.addEventListener('click', adviceGenerator);



