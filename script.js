
const low_btn = document.getElementById("low_btn");
const cap_btn = document.getElementById("cap_btn");
const up_btn = document.getElementById("up_btn");
const norm_btn = document.getElementById("norm_btn");

const copy_btn = document.getElementById("copy_btn");
const del_btn = document.getElementById("copy_del");
const paste_btn = document.getElementById("paste_btn");


const tear = document.getElementById("textarea");

const zeroSpaces = function(){
	tear;
	let spaces = /_+/gi;
	let userreview1 = tear.value;
	let userreview2 = userreview1.replace(spaces, "___");
	document.getElementById("textarea").value = userreview2;
};

low_btn.onclick = function (){

	if(tear.classList.toggle("upperArea")){
		tear.classList.remove("upperArea")
	}; 
	if(tear.classList.toggle("capArea")){
		tear.classList.remove("capArea")
	};

	if(tear.classList.toggle("normArea")){
		tear.classList.remove("normArea")
	};

	tear.classList.toggle("lowerArea");
	zeroSpaces();

};


up_btn.onclick = function (){

	if(tear.classList.toggle("lowerArea")){
		tear.classList.remove("lowerArea")
	};
	if(tear.classList.toggle("capArea")){
		tear.classList.remove("capArea")
	};

	if(tear.classList.toggle("normArea")){
		tear.classList.remove("normArea")
	};

	tear.classList.toggle("upperArea");
	zeroSpaces();

};

cap_btn.onclick = function (){

	if(tear.classList.toggle("lowerArea")){
		tear.classList.remove("lowerArea")
	};
	if(tear.classList.toggle("upperArea")){
		tear.classList.remove("upperArea")
	};

	if(tear.classList.toggle("normArea")){
		tear.classList.remove("normArea")
	};


	tear.classList.toggle("capArea");
	zeroSpaces();

};

norm_btn.onclick = function(){

	if(tear.classList.toggle("lowerArea")){
		tear.classList.remove("lowerArea")
	};
	if(tear.classList.toggle("upperArea")){
		tear.classList.remove("upperArea")
	};
	if(tear.classList.toggle("capArea")){
		tear.classList.remove("capArea")
	};

	tear.classList.toggle("normArea");
	zeroSpaces();

};


copy_btn.onclick = function(){
	tear.select();
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
};

del_btn.onclick = function(){
	tear.select();
	document.execCommand("delete");
	window.getSelection().removeAllRanges();
};


paste_btn.onclick = async()=>{
	try{
		const reader = await navigator.clipboard.readText();
		tear.value = reader;
	} catch(error){
		if(error instanceof TypeError){
			let stupidMessage = "It doesn't work here. Use a normal browser, you retard";
			(function (){
				tear.value = stupidMessage;
			}());

		}
	}
	zeroSpaces();


}