
// # Closure

// 1. Erstelle eine Datei namen `index.js`.
// 2. Beschreibe "Closure" in deinen eigenen Worten (1-2 Sätze).

//Ein Closure ist eine Funktion, die Zugriff auf den Scope ihrer umfassenden Funktion hat, selbst nachdem die umschließende Funktion abgeschlossen wurde.

// 3. Lies den folgenden Code und beantworte dann die nachfolgenden Fragen.

// ```js
 function personalDice(name){
  
   return function(){
       // Erzeuge eine Zufallszahl zwischen 1 und 6
     const newRoll = Math.floor(Math.random() * 6);
     console.log(`${name} würfelte eine ${newRoll}`)
   
   }
 }

 const dansRoll = personalDice("Dan");
 const zoesRoll = personalDice("Zoe");

 dansRoll();
 dansRoll();
// ```

// * a. Wo wird in diesem Code eine Closure verwendet? Woran kannst du das erkennen?

//Zeile 13 bis 17
//Eine Funktion in einer anderen funktion

// * b. Vergleiche den Aufruf von `dansRoll` beim ersten und zweiten Mal. Was ist immer gleich? Was könnte sich ändern?
//Der Parameter Dan könnte sich ändern.

// * c. Was ist der lexikalische Bereich (scope) von `newRoll`?

//in der anonyme Funktion


// 4. Schreibe eine Funktion mit dem Namen `createBase`, mit der du die folgenden Aufgaben mithilfe einer Closure erledigen kannst:

// ```js
// const addSix = createBase(6);
// console.log(addSix(10))// gibt 16 zurück
// console.log(addSix(21)) // gibt 27 zurück
// ```


function createBase(x){

return function(y){

return x+y;
}

}

const addSix=createBase(6);
console.log(addSix(10))// gibt 16 zurück
 console.log(addSix(21)) // gibt 27 zurück

