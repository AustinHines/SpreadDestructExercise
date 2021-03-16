const JPDinos = [
"velociraptors", 
"Tyrannosaurus Rex",
"Dilophosaurus"
];
 
function seeDinos(a, ...b) {
     console.log(a);
     console.log(b);
 }
 seeDinos(...JPDinos)

 console.log("==========");

 const jpCharacters = {
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern" , 
    ianMalcolm: "Jeff Goldblum"
 };

 //2b
 function seeCharacters(ellieSattler) {
     console.log(ellieSattler);
 }
 seeCharacters(jpCharacters)

 //Bonus 
 const jurrasicParkMovies = [{
     one: "Jurassic Park",
     two: "The Lost World: Jurassic Park",
     three: "Jurassic Park III",
    },
    {
        four: "Jurassic World",
        five: "Jurassic World: Fallen Kingdom"
    }
    
]
function seeJPMOVIES([{one,two,three}]) {four,five} {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
}
seeJPMOVIES()



 
