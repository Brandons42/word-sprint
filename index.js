var scrollable = document.getElementById('scrollable');

document.getElementById('background').addEventListener('wheel', function(e) {
	scrollable.scrollTop += e.deltaY;
});