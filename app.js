const button = document.querySelector('button'); 
const color = document.getElementById('color');

function generateRandomHexColor() {
    let digits = '0123456789ABCDEF'; // This is a string containing all possible hexadecimal digits.
    let hexColor= '#';   // This is the starting symbol for a hexadecimal color code.

    for (let i = 0; i < 6; i++) {  // This loop runs 6 times to generate a 6-digit hexadecimal color code.
        let randomIndex = Math.floor(Math.random () * 16)  // This line picks a random index from 0 to 15.
        hexColor += digits[randomIndex];  // This adds the randomly chosen digit to the hexadecimal color code.
    }
    return hexColor; // Finally, the function returns the generated random hexadecimal color code.
}

button.addEventListener('click', function() {
    let randomColor = generateRandomHexColor();  // Generate a random hexadecimal color code
    color.textContent = randomColor;  // Update the text content.
    document.body.style.backgroundColor = randomColor; // Update the background color.

})