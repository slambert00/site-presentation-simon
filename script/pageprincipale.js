window.addEventListener("load",abonnements);
window.addEventListener("load",voirPhotos);
function abonnements(){
	var boutonAffichage=document.getElementById("voirphotos");
	boutonAffichage.addEventListener("click",voirPhotos);
}


function voirPhotos(){
	divInfo = document.getElementById("invisible");
 	if (divInfo.style.display == 'none')
		divInfo.style.display = 'block';
	else
		divInfo.style.display = 'none';
	
}
