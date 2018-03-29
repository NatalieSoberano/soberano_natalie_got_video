(() => {
	console.log('video stuff loaded!');

	String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); }
	
	//variable stack goes here
	let silgils = document.querySelectorAll('.sigilContainer'), 
		lightbox = document.querySelector('.lightbox'),
		closeLightboxButton = lightbox.querySelector('.close-lightbox'),
		vidPlayer = document.querySelector('video')
		vidControls = document.querySelector('.controls');

	// functions in the middle 

	function showHouseVideo () {
		let houseName = this.className.split(' ')[1].capIt();
		//split apart the class name on the element, grabe the house from the result
		document.querySelector('h1').textContent = `House ${houseName}`;
		//debugger
		lightbox.classList.add('show-lightbox');
		//make it play 
		vidPlayer.src =
		`video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
		vidPlayer.load();
		vidPlayer.play();

	}

	function pausePlay () {
		//debugger;
		let theButton = this.firstElementChild;
		//
		if (vidPlayer.paused == true) {
			// play the video
			vidPlayer.play();
			theButton.dataset.icon = "pause-circle";
		} else {
			vidPlayer.pause();
			theButton.dataset.icon = "play-circle";
		}
	}

	function closeLightbox () {
		//debugger
		lightbox.classList.remove('show-lightbox');
		//stop the video and rewind it to 0
		vidPlayer.pause();
		vidPlayer.currentTime = 0;
	}

	// event handeling at the bottom 

	silgils.forEach(silgil => silgil.addEventListener('click', showHouseVideo));
	closeLightboxButton.addEventListener('click', closeLightbox);
	vidPlayer.addEventListener('ended', closeLightbox);
	vidControls.addEventListener('click', pausePlay);



})();