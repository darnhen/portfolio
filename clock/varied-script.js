// define images
let words = 
'I am thinking of silence. Silence as a second means of speaking. When I was in middle school, I made my phone background a photo of my two friends who loved each other very much. I remember this being received very poorly by everyone else, but I couldn’t understand why. To see such happiness and hold it so closely to me, be devoted to its image, was an act that felt enough for me. I was satisfied. & When I engage with full body mirrors, I like sitting quietly. It reminds me of being a kid where my eyes would become a guard and my whole body would tense with stillness. Sit, be good, stop anything troubling. But I’d focus on my face, this well, and see an error. Why is it that when my thoughts, like rage, are active, my face says nothing of it? When did I become so good at hiding things. At taking the words in my head and not applying them to anything. Allowing for the well to silently flood. & When I find myself encountering a situation in which I cannot predict the outcome, I feel fear. To look at chance is to look at a warped reflection. One that haunts you as you lay in bed, seconds from sleep. Eyes closed in rejection, but this image stands erect, stands bright in your mind. Chance is the monster I imagine in my closet. The one that has followed me since childhood. The reason I still close my closet doors regardless of where I have lived. This monster that I feel lingering is one I have not been able to conquer; a manifested fear that I’ve given an amorphous lifespan, breath, and texture.'          
;
let arr = words.split(' ');
console.log(arr)

// get all divs
var divs = document.querySelectorAll('div');

// get current word
var wordsCounter = 0
var currentWords = words[wordsCounter];

// get current div
var divCounter = 0
var currentDiv = divs[divCounter];


// every 5 minutes...
setInterval(function() {
    // fill div with words
    // if(wordsCounter >= arr.length) {
    //     wordsCounter = 0;
    // } 
    // currentDiv.innerText = arr[wordsCounter];
    currentDiv.innerText = arr[wordsCounter % arr.length];
    console.log(wordsCounter, currentWords)

    // update div counter
    divCounter = (divCounter+1) % divs.length;
    currentDiv = divs[divCounter];
    console.log(divCounter, currentDiv)
    wordsCounter++;
}, 50000)

// // every hour...
// setInterval(function() {
//     // update current image
//     wordsCounter = (wordsCounter+1) % words.length;
//     currentWords = words[wordsCounter];
// }, 100)

