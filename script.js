
const textArray = ["Web Developer", "Designer", "Programmer"];
let textIndex = 0;

function changeText() {
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 2000); 


function openTab(tabName) {
   
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });

    
    document.getElementById(tabName).classList.add('active');

    
    event.target.classList.add('active');
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('form-response').textContent = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById('contact-form').reset();
});
