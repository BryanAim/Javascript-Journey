// document variables
let h1 =     document.querySelector("h1");
let h2 =     document.querySelector("h2");
let p =      document.querySelector("p");
let main =   document.querySelector("main");
let button = document.querySelector("button");
let a =      document.querySelector("a");

// choices if no button is clicked array
let noChoices = [
  "😂😂Yaani hutaki kujua?🤣🤣",
  "Nlijua Tu!",
  "Jifanye tu na najua unataka😁",
  "Si ukae😕",
  "I wasn't gonna tell you anyway😆",
  "I see...",
  "Sasa wewe ni wa wapi🙄🙄"
];
// answers for when yes is selected
let answers = [
  "Without YOU, I'm Lost😌",
  "Life without YOU is like a broken pencil. POINTLESS!",
  "I fall in love with you all over again, each and every day.",
  "👉YOU👈 COMPLETE 👉ME👈",
  "You make me Wanna be a better man",
  "You've turned my W🌍rld around",
  "Close your Eyes.. What do you see? Ummm thats my world without you",
  "You always know how to make me smile😏",
 "I miss you😘😘😘",
 "I need you 😊😊😊",
 "You Have very Sweet Lips babe😋",
 "I l♥ve y♥u!!",
 "You're Beautiful😚",
 "Please Stay😋😋",
 "You're Amazing!!"
];
// Retry Link
const addRetry = () => {
  a.innerText = "Retry";  
  a.classList.add("retry")
}
//  create h1 function
const createH1 = () => {
  var newh1 = document.createElement("h1");
  document.querySelector("main").appendChild(newh1);
}
// TODO
// const unknownAnswer=()=> {
//   confirm("Does that Mean Yes or No? ")
// }


 button.addEventListener("click", function () {
   // function for adding the hidden class
   const hidden = () => {
     main.classList.add("hidden");
     h1.classList.add("hidden");
     p.classList.add("hidden");
     button.classList.add("hidden");
      // no need for return keyword ES6
   }
   hidden();
   
   setTimeout(() => {
      var answer = prompt("Wanna Know something? ");
      answerQuestion();

      //to trim off extra whitespace from answer
      function trimAnswer() {

        // incase prompt cancel button is clicked and answer becomes null
        try {
          return answer.trim();
        } catch (error) {
          //   console.log("CANNOT BE NULL");

        }
      }
      // convert answer to lowerCase
      function lowerCase() {

        // incase cancel button is clicked and answer is null
        try {
          return answer.toLocaleLowerCase();
        } catch (error) {

        }
      }
        // depending on user answers yes or no
      function answerQuestion() {
        //extracting conditions to array
        let yes = ["yes", "yeah", "yap","sure", "yup", "yeap", "yah", "yeh", "yas", "yep", "ok", "okay"];
        let no = ["no", "nah", "nuh", "nope", "nop"];
      // function for adding the show class
        const show = () => {
          main.classList.add("show");
          h1.classList.add("show"); 
        }

        // shorter version to check if user answer is in the arrays
        if (yes.includes(answer)) {
          show();
          createH1();
          h1.innerText = returnAnswers();
          
        } else if (no.includes(answer)) {
            show();
            createH1();
          h1.innerText = returnNoAnswers();
          
        } else if (answer == "") {
            show();

            createH1();
          h1.innerText = "Atleast Give an answer🙄";
          addRetry();          
        } else if (answer == null) {
            show();

          main.style.fontSize="1.3em"
          main.style.backgroundColor="red"
            createH1();
          h1.innerText = "Wrong Choice Babe😪😪";
          addRetry(); 

        } else {
            show();
            createH1();
          h1.innerText = "Babe I can't recognise that answer";
          addRetry();         
        }

      }
     
      // to randomize the choices messages to be displayed when no is selected
      function returnNoAnswers() {

        return (noChoices[Math.floor(Math.random() * noChoices.length)]);

      }

      // randomize answers when yes is selected
      function returnAnswers() {

        return (answers[Math.floor(Math.random() * answers.length)]);

      }
   },1000);

 })

 