const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem= document.querySelectorAll(".img-overlay");


p_btns .addEventListener( "click",(e) =>
{   const p_btn_clicked = e.target;
console .log(p_btn_clicked);
 if (!p_btn_clicked.classList.contains("p-btn")) return;
p_btn.forEach((curElem ) => curElem.classList.remove("p-btn-active"));

p_btn_clicked .classList.add("p-btn-active");

const btn_num = p_btn_clicked.dataset.btnNum;
// console.log(btn_num);

const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

p_img_elem.forEach((curElem ) => curElem.classList.add("p-img-not-active"));
  
img_active.forEach((curElem ) => curElem.classList.remove(`p-img-not-active`));

});
//<!--  ----------------------------------------------
//OUR testimonil SECTION start
//----------------------------------------------
   -->
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay:{
        delay:2500,

      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


// -----annimate number-----


const counterNum = document.querySelectorAll(".counter-number");

const speed = 200;
counterNum .forEach((curElem) =>{
    const updateNumber = () => {
        const targetNumber = parseInt(counterNum .dataset .numbers);
  // console.log(targetNumber); 
        const initialNum = parseInt(curElem.innerText);
        // console .log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);

        if( initialNum < targetNumber)
        {
            curElem.innerText = `${initialNum + incrementNumber}+`;
            setTimeout(updateNumber, 10);
        }
       };
  updateNumbers();

       });    
