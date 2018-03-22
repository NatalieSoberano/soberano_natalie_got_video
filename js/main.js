(() => {
	console.log('video stuff loaded!');
	
	//variable stack goes here
	let silgils = document.querySelectorAll('.sigilContainer'), 
		lightbox = document.querySelector('.lightbox'),
		closeLightboxButton = lightbox.querySelector('.close-lightbox');
		rewind = document.querySelector('close-lightbox');

	// functions in the middle 

	function showHouseVideo () {
		//debugger
		lightbox.classList.add('show-lightbox');
		//make it play 
	}

	function closeLightbox () {
		//debugger
		lightbox.classList.remove('show-lightbox');
		//stop the video and rewind it to 0
		rewind 
	}


	// event handeling at the bottom 

	silgils.forEach(silgil => silgil.addEventListener('click', showHouseVideo));
	closeLightboxButton.addEventListener('click', closeLightbox);

})();