
const low_btn = document.getElementById("low_btn");
const cap_btn = document.getElementById("cap_btn");
const up_btn = document.getElementById("up_btn");

// const copy_btn = document.getElementById("cope_btn");


const tear = document.getElementById("textarea");

low_btn.onclick = function (){

	if(tear.classList.toggle("upperArea")){
		tear.classList.remove("upperArea")
	}; 
	if(tear.classList.toggle("capArea")){
		tear.classList.remove("capArea")
	};

	tear.classList.toggle("lowerArea");

};

up_btn.onclick = function (){

	if(tear.classList.toggle("lowerArea")){
		tear.classList.remove("lowerArea")
	};
	if(tear.classList.toggle("capArea")){
		tear.classList.remove("capArea")
	};

	tear.classList.toggle("upperArea");
};

cap_btn.onclick = function (){

	if(tear.classList.toggle("lowerArea")){
		tear.classList.remove("lowerArea")
	};
	if(tear.classList.toggle("upperArea")){
		tear.classList.remove("upperArea")
	};


	tear.classList.toggle("capArea");
};



