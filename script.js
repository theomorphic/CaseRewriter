
const low_btn = document.getElementById("low_btn");
const copy_btn = document.getElementById("cope_btn");
const up_btn = document.getElementById("up_btn");

const tear = document.getElementById("textarea");

low_btn.onclick = function (){

	if(tear.classList.toggle("upperArea")){
		tear.classList.remove("upperArea")
	};

	tear.classList.toggle("lowerArea");

};

up_btn.onclick = function (){

	if(tear.classList.toggle("lowerArea")){
		tear.classList.remove("lowerArea")
	};

	tear.classList.toggle("upperArea");
};

copy_btn.onclick = function(){
	
}



