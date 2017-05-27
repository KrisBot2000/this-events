//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var divElem = document.getElementsByClassName("name");

//console.log(divElem);

for(var i = 0; i<divElem.length; i++){
  
  divElem[i].addEventListener("click", toggle);

}

function toggle(){
	var showMenu = this.querySelectorAll(".menu")[0];
  
console.log(showMenu);

  if (showMenu.style.display==="none"){
    console.log("if"+showMenu.style.display);
    showMenu.style.display = "block";
    console.log("none to block:" + showMenu.style.display);
  }

  else{showMenu.style.display = "none";
  console.log("else" + showMenu.style.display);
       }

	//console.log("HI");
}