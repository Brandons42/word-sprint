var scrollable = document.getElementById('scrollable');

document.getElementById('background').addEventListener('wheel', function (e) {
	scrollable.scrollTop += e.deltaY;
});

var buttons = document.getElementsByClassName('see-video');

var videos = document.getElementsByTagName('video');

var srcs = [
	'./videos/thesaurus.mp4',
	'./videos/rhyme.mp4',
	'./videos/sprint.mp4'
];

function changeVideo(video, srcVal) {
	video.pause();
	video.innerHTML = 'Your browser does not support the video tag.';
	var source = document.createElement('source');
	source.setAttribute('src', srcVal);
	video.appendChild(source);
	video.load();
	video.play();
}

for (var q = 0; q < 3; q++) {
	buttons[q].onclick = function () {
		var srcVal = srcs[parseInt(this.id)];
		console.log(srcVal);
		changeVideo(videos[0], srcVal);
		changeVideo(videos[1], srcVal);
	};
}
