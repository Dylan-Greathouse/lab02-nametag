// HTML setup
// Grab the DOM elements (the input box and the button) in
// Add an event listener to the button
// Get access to the user's input
// Use the user's input to "do something"
// Display the results to the user

const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('input-field');
const pronounField = document.getElementById('pronoun-field')
const middleSection = document.getElementById('middle-section');
const colorField = document.getElementById('color-field');
const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');
const btn = document.getElementById('btn')
const nameOutput = document.getElementById('name-output')
const pronoun = document.getElementById('pronoun')

submitBtn.addEventListener('click', ()=>{
    console.log(inputField.value);
     console.log(middleSection.textContent);
    console.log(colorField.value);
    topSection.style.backgroundColor = colorField.value;
    bottomSection.style.backgroundColor = colorField.value;
    nameOutput.textContent = inputField.value.toUpperCase();
    
})
btn.addEventListener('click', ()=>{
    console.log(pronounField.value);
    pronoun.textContent = pronounField.value.toUpperCase();
})