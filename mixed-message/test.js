//creating a random song depending on mood generator 

//create an array of moods 
const mood = ["happy", "sad", "gym", "romance", "uplifting"]
//creating an object containting an arrays of musics
const musicFinder = {
    happy: ["Best Day of My life-American Authors", "Dynamite-BTS", "I ain't worried-One Republic", "Pompeii-Bastille", "Party In the USA-Miley Cyrus"],
    sad:["Easy on Me-Adele", "August-Taylor Swift", "Sparks-Coldplay", "Yellow-Coldplay", "Beautiful-Crush"],
    gym:["Power-Kanye West", "In the end-Linkin Park", "Stronger-Kanye West", "Pepas-Faruko", "Sacrificial-Rezz"],
    romance: ["Love Story-Taylor Swoft", "Zara Sa-Pritam", "Enchanted-Taylor Swift", "Vanilla Twilight-Own City", "You belong with me-Taylor Swift"],
    uplifting: ["Sunroof-NIcky Youre", "Heat Waves-Glass Animals", "My Universe-Coldplay", "I'm Good-David Guetta", "Levitating-Dualipa"]
};

//create an array to hold the mood and song that is randomly chosen
let final = [];

//create a function to randomly generate a number
function generateNum(num){
    return Math.floor(Math.random() * num);
}
//create a function to get a random mood and a random song from that mood
function randomize(){
    let randomMoodIdx = generateNum(mood.length);
    let randomMood = mood[randomMoodIdx];
    
    let SongIdx = generateNum(5);
    
    switch (randomMood) {
        case "happy":
            final.push(`Your mood for now is: ${randomMood}`);
            final.push(`A song to represent you: ${musicFinder[randomMood][SongIdx]}`);
            break;
        
        case "sad":
            final.push(`Your mood for now is: ${randomMood}`);
            final.push(`A song to represent you: ${musicFinder[randomMood][SongIdx]}`);
            break;
            
        
        case "gym":
            final.push(`Your random mood is: ${randomMood}`);
            final.push(`A song to represent you: ${musicFinder[randomMood][SongIdx]}`);
            break;
        
        case "romance":
            final.push(`Your random mood is: ${randomMood}`);
            final.push(`A song to represent you: ${musicFinder[randomMood][SongIdx]}`);
            break;
        
        case "uplifting":
            final.push(`Your random mood is: ${randomMood}`);
            final.push(`A song to represent you: ${musicFinder[randomMood][SongIdx]}`);
            break;
        
        default:
            console.log("The mood is undefined.");
            break;
    }
    //prints out the messages from the list
    for (i=0;i<final.length;i++){
        console.log(final[i]);
    }
    
}

randomize()