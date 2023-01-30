function calcASCII(input){
    /*
        Take an input character and return the appropriate ASCII
        value of the character
    */
    const matchCap= new RegExp("^[A-Z]");
    const matchLow= new RegExp("^[a-z]");
    const specialChar= new RegExp("^(\X)*");
    const numCheck= new RegExp("^[0-9]");

    if (input.match(matchCap)!= null){

        match = input.match(matchCap);
        return match[0].charCodeAt(0);

    }else if(input.match(matchLow)!= null){

        match = input.match(matchLow);
        return match[0].charCodeAt(0);

    }else if(input.match(numCheck)!= null){

        match = input.match(numCheck);
        return match[0].charCodeAt(0);

    }else if(input.match(specialChar)!= null){

        return input.charCodeAt(0) + " (Special Character)";

    }else{

        return "Input not found";

    }
}
function displayASCII(){
    const name= document.getElementById("name").value;
    let x= "";
    for(let i=0;i<name.length;i++ ){
        x+=`ASCII Value for ${name.charAt(i)} -> ${calcASCII(name.charAt(i))} <br>`;
    }
    document.getElementById("result").innerHTML = x;
}