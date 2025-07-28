
if (document.domain=='www.imdb.com') {
	imdb()
}

else {
	letterboxd()
}

function imdb() {
	const rating=document.querySelector(".sc-4dc495c1-1")
	const bottom_rating=document.querySelector(".ipc-rating-star--rating")
	const graph=document.querySelector(".sc-5cc72d56-2")
	if (rating) {
		rating.style.visibility='hidden'
	}
	if (bottom_rating) {
		bottom_rating.style.visibility='hidden'
	}
	if (graph) {
		graph.style.visibility='hidden'
	}

	const button=document.createElement('button')
	button.textContent='Show Ratings'
	document.body.appendChild(button)
	button.style.position = 'fixed';
	button.style.top = '10px';
	button.style.right = '10px';
	button.style.zIndex = 9999;

	button.addEventListener('click',unhide)

	function unhide() {
		if (rating) {
		rating.style.visibility='visible'
	}
	if (bottom_rating) {
		bottom_rating.style.visibility='visible'
	}
	if (graph) {
		graph.style.visibility='visible'
	}
}
}

function letterboxd() {
	let rating, average_rating
	function hide() {
		rating = document.querySelector('.rating-histogram.rating-histogram-exploded');
		average_rating = document.querySelector('.average-rating');
		if (rating) {
		rating.style.visibility = 'hidden';
		}

		if (average_rating) {
			average_rating.style.visibility = 'hidden';
		}
	}

	const button = document.createElement('button');
	button.textContent = 'Show Ratings';
	document.body.appendChild(button);
	button.style.position = 'fixed';
	button.style.top = '10px';
	button.style.right = '10px';
	button.style.zIndex = 9999;

	button.addEventListener('click', unhide);

	function unhide() {
		if (rating) {
			rating.style.visibility = 'visible';
		}
		if (average_rating) {
			average_rating.style.visibility = 'visible';
		}
	}

	hide()

	const observer=new MutationObserver(()=> {hide()})
	observer.observe(document.body,{childList:true,subtree:true})
}