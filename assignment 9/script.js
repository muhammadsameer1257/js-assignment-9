var userinput = prompt("enter sentence");
var vowel = ["a","e","i","o","u",];
userinput = userinput.toLowerCase(),userinput.split('');
var vowelCount = 0 ;

for(i = 0 ; i < userinput.length ; i++){
    if(vowel.includes(userinput[i])){
        vowelCount++
    }
}
    if(vowelCount > 0){
        alert(`total vowels in your sentence is ${vowelCount}`);

    }
    else{
        "there is no vowels"
    }