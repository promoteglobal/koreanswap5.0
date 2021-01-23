//Make it so that you don't repeat sides...
//-------------------------------------------------------print random pic depending upon which button pushed---------------
let unitNum = 1;
let chapNum = 1;



//-------------------------------------------------------------change the body of the page-----------------------------------
function calculate (sectionVar) {
  
  let secNum;
//.........................................determine what section the user wants from button selected
  if (typeof sectionVar == 'undefined') {
    // the variable is notdefined
    let randomSection = Math.floor((Math.random() * 2));

      if (randomSection == 0) {
        secNum = unitNum + "-" + chapNum + ".1";
      } else {
        secNum = unitNum + "-" + chapNum + ".2";
      }
    } else {
    secNum = sectionVar;
  }

  let arrayLength = library[secNum].length;
  let randompic = Math.floor((Math.random() * arrayLength));
  
  //...................................................get html elements
  let prompt = document.getElementById("prompt");
  let pic = document.getElementById("pic");
  let answer = document.getElementById("hideAnswersLine");
  let credit = document.getElementById("credit");
  

//......................................................get card info
  let current_prompt = library[secNum][randompic].prompt;
  let current_image = library[secNum][randompic].image;
  let current_alt = library[secNum][randompic].alt;
  let current_answer = library[secNum][randompic].answer;
  let current_credit = library[secNum][randompic].credit;

  //..............................................insert card info into html elements
  prompt.innerHTML = current_prompt;
  pic.src = "images/" + current_image;
  pic.alt = current_alt;
  answer.innerHTML = current_answer;
  credit.innerHTML = current_credit;
};

//------------------------------------------------------Chap 1-1--------------------------------------------

function knownSentencesLine () {
  calculate (unitNum + "-" + chapNum + ".1");
}
  
function unknownSentencesLine () {
  calculate (unitNum + "-" + chapNum + ".2");
}

function chapSentencesLine () {
  calculate();
}

function hideAnswersLine() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("hideAnswersLine");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function masterSentencesLine () {
  
  let secNum;

    let randomSectionUnitNum = Math.floor((Math.random() * unitNum + 1));
    let randomSectionChapNum = Math.floor((Math.random() * chapNum + 1));
    let random1or2Max = Math.floor((Math.random() * 2 + 1));


    secNum = randomSectionUnitNum + "-" + randomSectionChapNum + "." + random1or2Max;
    console.log(secNum);

    let arrayLength = library[secNum].length;
    let randompic = Math.floor((Math.random() * arrayLength));
      
    //...................................................get html elements
    let prompt = document.getElementById("prompt");
    let pic = document.getElementById("pic");
    let answer = document.getElementById("hideAnswersLine");
    let credit = document.getElementById("credit");

//  ......................................................get card info
    let current_prompt = library[secNum][randompic].prompt;
    let current_image = library[secNum][randompic].image;
    let current_alt = library[secNum][randompic].alt;
    let current_answer = library[secNum][randompic].answer;
    let current_credit = library[secNum][randompic].credit;

    //..............................................insert card info into html elements
    prompt.innerHTML = current_prompt;
    pic.src = "images/" + current_image;
    pic.alt = current_alt;
    answer.innerHTML = current_answer;
    credit.innerHTML = current_credit;
  
}

//----------------------------------------------------------------Selecting unit and chapter---------------------------------------------------
let unitElm = document.getElementById("unit");
let chapElm = document.getElementById("Lesson");
// const megamenudropdown = document.getElementsByClassName("dropdown-content");

var getChapter = function(event) {
  unitNum = event.target.dataset.unit;
  chapNum = event.target.dataset.chapter;
  unitElm.innerHTML = unitNum;
  chapElm.innerHTML = chapNum;
  // megamenudropdown[0].style.backgroundColor = #333;
  if (unitNum !== 1 && chapNum !== 1) {
    let mastersentencesSect = document.getElementById("masterSentences");
    mastersentencesSect.style.display = "block";
  }
};


//--------------------------------------------------------------add event listeners to buttons-------------------------------------------
const knownSentencesbutton = document.getElementById("knownSentencesbutton").addEventListener("click", knownSentencesLine); 
const unknownSentencesbutton = document.getElementById("unknownSentencesbutton").addEventListener("click", unknownSentencesLine); 
const chapSentencesbutton = document.getElementById("chapSentencesbutton").addEventListener("click", chapSentencesLine); 
const masterSentencesbutton = document.getElementById("masterSentencesbutton").addEventListener("click", masterSentencesLine); 
const hideAnswers = document.getElementById("myCheck").addEventListener("click", hideAnswersLine); 

//--------------------------------------------------------------add event listeners to mega list
const menubutton = document.getElementsByClassName ("lesson-selector");
for (var i = 0; i < menubutton.length; i++) {
  menubutton[i].addEventListener('click', getChapter, false);
}

//----------------------------------------------------------change unit and lesson number visually---------------------------


//---------------unit 1---------------
document.getElementById('dropbtn1').addEventListener('mouseover', function(event)
{
  let parent = event.target.closest('.dropdown');
  parent.classList.add('show');
});


document.getElementById('navbar1').addEventListener('mouseleave', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

document.getElementById('navbar1').addEventListener('click', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

//---------------unit 2---------------
document.getElementById('dropbtn2').addEventListener('mouseover', function(event)
{
  let parent = event.target.closest('.dropdown');
  parent.classList.add('show');
});


document.getElementById('navbar2').addEventListener('mouseleave', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

document.getElementById('navbar2').addEventListener('click', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

//---------------unit 3---------------
document.getElementById('dropbtn3').addEventListener('mouseover', function(event)
{
  let parent = event.target.closest('.dropdown');
  parent.classList.add('show');
});


document.getElementById('navbar3').addEventListener('mouseleave', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

document.getElementById('navbar3').addEventListener('click', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

//---------------unit 4---------------
document.getElementById('dropbtn4').addEventListener('mouseover', function(event)
{
  let parent = event.target.closest('.dropdown');
  parent.classList.add('show');
});


document.getElementById('navbar4').addEventListener('mouseleave', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

document.getElementById('navbar4').addEventListener('click', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

//---------------unit 5---------------
document.getElementById('dropbtn5').addEventListener('mouseover', function(event)
{
  let parent = event.target.closest('.dropdown');
  parent.classList.add('show');
});


document.getElementById('navbar5').addEventListener('mouseleave', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

document.getElementById('navbar5').addEventListener('click', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

//---------------unit 6---------------
document.getElementById('dropbtn6').addEventListener('mouseover', function(event)
{
  let parent = event.target.closest('.dropdown');
  parent.classList.add('show');
});


document.getElementById('navbar6').addEventListener('mouseleave', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

document.getElementById('navbar6').addEventListener('click', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

//---------------unit 7---------------
document.getElementById('dropbtn7').addEventListener('mouseover', function(event)
{
  let parent = event.target.closest('.dropdown');
  parent.classList.add('show');
});


document.getElementById('navbar7').addEventListener('mouseleave', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});

document.getElementById('navbar7').addEventListener('click', function(event)
{
  let dropdown = document.querySelector('.dropdown.show');
  
  if (dropdown){
    dropdown.classList.remove('show');
  }
});





















//--------------------------------left over---------------
// let hoverfunctionadd = function (event) {
//   let parent = event.target.closest('.dropdown');
//   parent.classList.add('show');
// }

// const unitbutton = document.getElementsByClassName ("dropbtn");

// for (var i = 0; i < unitbutton.length; i++) {
//   unitbutton[i].addEventListener('mouseover', hoverfunctionadd, false);
// }

// document.getElementById('navbar').addEventListener('mouseleave', function(event)
// {
//   let dropdown = document.querySelector('.dropdown.show');
  
//   if (dropdown){
//     dropdown.classList.remove('show');
//   }
// });



// let hoverfunctionsubtract = function (event) {
//   let dropdown = document.querySelector('.dropdown.show');
  
//   if (dropdown){
//     dropdown.classList.remove('show');
//   }

// }

// for (var i = 0; i < unitbutton.length; i++) {
//   unitbutton[i].addEventListener('mouseleave', hoverfunctionsubtract, false);
// }




// document.getElementById('navbar').addEventListener('mouseleave', function(event)
// {

// });

// Next Step: remove "show" class when lesson is clicked