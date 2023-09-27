let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index =(index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index =(index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

const navbarMenu = document.querySelector(".navbar-menu");
const togllebutton = document.querySelector(".navbar-burger")

const buton1 = document.querySelector(".next")
const buton2 = document.querySelector(".prev")

const dropMenu = () =>{navbarMenu.classList.toggle("is-active");}
togllebutton.addEventListener("click",() => dropMenu())


let ex = document.querySelectorAll('.menunews > a')
let imagini = document.querySelectorAll('.newsimg > img')
let text = document.querySelectorAll('.textnews > a')
let date = document.querySelectorAll('.textnews > h6')



function ese(e){

  ex.forEach(el=>{
    el.classList.add("has-text-gray")
    el.classList.add('has-text-weight-semibold')
  })
  e.target.classList.remove("has-text-gray")
  e.target.classList.add("has-text-weight-bold")

 fetch('/Json/news.json')
  .then(res => res.json())
  .then(data => {
    let x = 0
    data.forEach(element => {
      
      switch(e.target.innerHTML)
      {
        case "All":
          element.all.forEach(en =>{
            imagini[x].src = en.img
            text[x].innerHTML = en.text
            date[x].innerHTML = en.date
            x++
          })
          break;
         case "ASSASSIN'S CREED":
          element.assassincreed.forEach(en =>{
            imagini[x].src = en.img
            text[x].innerHTML = en.text
            date[x].innerHTML = en.data
            x++
          })
          break;
          case "MARIO X RABBITS":
          element.marioxrabbids.forEach(en =>{
            imagini[x].src = en.img
            date[x].innerHTML = en.data
            text[x].innerHTML = en.text
            x++
          })
          break;
          case "RAINBOW SIX":
          element.rainbow.forEach(en =>{
            imagini[x].src = en.img
            date[x].innerHTML = en.data
            text[x].innerHTML = en.text
            x++
          })
          break;
          case "THE DIVISION":
          element.thedivision.forEach(en =>{
            imagini[x].src = en.img
            date[x].innerHTML = en.data
            text[x].innerHTML = en.text
            x++
          })
          break;
      }
   
    });
  })

}





// {
//   "img":"images/Mario_Rabbids/rkb2-game_info-boxart-keyart-01-560x698-logo_Tablet-_1_.jpg",
//   "title":"Mario x Rabbids Sparks of Hope"
// },
// {
//   "img":"images/Mario_Rabbids_Kingdom_Battle/Mario_Rabbids_Kingdom_Battle.webp",
//   "title":"Mario x Rabbids Kingdom Battle"
// },
// {
//   "img":"images/Prince_Of_Persia_the_sands_of_time/pop-sands-of-time-remake-en.jpg",
//   "title":"Prince of Persia: The Sands of Time"
// },
// {
//   "img":"images/Rabbids_Coding/01.webp",
//   "title":"Rabbids Coding"
// },
// {
//   "img":"images/RainBowSixExtraction/r6_dsfsd.webp",
//   "title":"RainBow Six Extraction"
// },
// {
//   "img":"images/South_Park_the_Fractured_but_whole/01.webp",
//   "title":"Shouth Park: The Fractured But Whole"
// },
// {
//   "img":"images/South-Park_phone_destroyer/01.jpg",
//   "title":"Shouth Park: Phone Destroyer"
// },
// {
//   "img":"images/Star_Wars_Outlaws/star_wars_out.jpg",
//   "title":"Star Wars Outlaws"
// },
// {
//   "img":"images/The_Crew_2/the_crew.jpg",
//   "title":"The Crew 2"
// },
// {
//   "img":"images/The_Crew_Motorfest/TCM_Packshot.webp",
//   "title":"The Crew MotorFest"
// },
// {
//   "img":"images/The_division_2/01.jpg",
//   "title":"The Division 2"
// },
// {
//   "img":"images/The_division_Resurgence/Resurgence_Packshot_464x608_EN.webp",
//   "title":"The Division Resurgence"
// },
// {
//   "img":"images/The_Settlers_new_Alies/Boxshot.webp",
//   "title":"The Settlers: New Alies"
// },
// {
//   "img":"images/Watch_dogs_2/watch-dogs-2.jpg",
//   "title":"Watch Dogs 2"
// },
// {
//   "img":"images/Watch_Dogs_Legion/watch-dogs-legion.webp",
//   "title":"Watch Dogs Legion"
// }