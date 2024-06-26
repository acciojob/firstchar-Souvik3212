function firstChar(text) {
  // your code here
	let trimmedText = text.trim();
    
    
    if (trimmedText === '') {
        return ''; 
    }
    
    
    for (let i = 0; i < trimmedText.length; i++) {
        if (trimmedText[i] !== ' ') {
            return trimmedText[i]; 
        }
    }

    
    return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
