const colorName = document.getElementById("colorName");
const outerContainer = document.getElementById("outer-container");


// **********************************************************************************************************************************

// The value of the Hexadecimal can range from 00 to FF. So, the maximum value can be FFFFFF - white color, and the minimum value can be 000000 - black color.

function generateRandomColor(){
    // In JavaScript, we add 0x before a hexadecimal number:
    let maxVal = 0xFFFFFF; // 16777215 --> A Hexadecimal Number
    
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    
    randomNumber = randomNumber.toString(16);  // Converting the integer to Hexadecimal Value
    let randColor = randomNumber.padStart(6, 0);  // Keeping the length of Hexadecimal Number upto 6 characters using padStart.
    
    return `#${randColor.toUpperCase()}`
}

// ************************************************************************************************************************************


document.addEventListener('keypress', (event)=>{
    if (event.code == "Space") {
        // console.log("Space Pressed");
        outerContainer.style.backgroundColor = `${ generateRandomColor() }`;
        colorName.innerHTML = `${ generateRandomColor() }`;
        
    }
    
});