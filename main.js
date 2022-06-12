const newAdviceBtn = document.querySelector('.add');
const cleanBtn = document.querySelector('.clean');
const showAdviceBtn = document.querySelector('.showAdvice');
const showOptionBtn = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');
const div = document.querySelector('div');

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

const printOptions = () => {
    alert(advices.join(`, `));

}

newAdviceBtn.addEventListener('click', addAdvice);
cleanBtn.addEventListener('click', cleaning);
showAdviceBtn.addEventListener('click', adviceGenerator);
showOptionBtn.addEventListener('click', printOptions);