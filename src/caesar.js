function caesar(string, k) {
  let key = k;
  let re = /[a-zA-Z]/;
  let cipherText = "";    

  for (let i = 0; i < string.length; i++) { 
    if (re.test(string.charAt(i))) {
      cipherText += String.fromCharCode((string.charCodeAt(i) - 97 + key)%26 + 97); 
    } else {
      cipherText += string.charAt(i); 
    }
  } 

  return cipherText
}

module.exports = caesar;