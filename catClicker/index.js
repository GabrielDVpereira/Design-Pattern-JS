const cat1Image = document.querySelector(".cat1 img");
const cat2Image = document.querySelector(".cat2 img");

const spanCount1 = document.querySelector("#count-cat1 span");
const spanCount2 = document.querySelector("#count-cat2 span");

const cat1Name = "Tobias";
const cat2Name = "Andrew";

const cat1NameP = (document.querySelector("#cat1").innerHTML = cat1Name);
const cat2NameP = (document.querySelector("#cat2").innerHTML = cat2Name);

let count1 = 0;
let count2 = 0;

cat1Image.addEventListener("click", function () {
  //increase
  spanCount1.innerHTML = count1++;
});
cat2Image.addEventListener("click", function () {
  //increase
  spanCount2.innerHTML = count2++;
});
