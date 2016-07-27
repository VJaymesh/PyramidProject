function rPyramid() {
  let num =21;
for (r = 0; r < num ; r++) {
for (c =0; c < r; c++) {
   document.getElementById('hi').innerHTML= "\u00A0";
}

for(star = 0; star < num-r; star++) {
 document.getElementById('hi').innerHTML="*";
}

//num--;
//  counter+=1;
document.getElementById('hi').innerHTML= "<br>";
}}
