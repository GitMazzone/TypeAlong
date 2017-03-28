/*
 * Author: Michael Mazzone
 * Initial release: 3/27/2017
 * Usage: Do what you want with this code. Credit is appreciated but not needed.
 * Description: Text highlighting similar in functionality to typing.com's test. 
 *              Built to help teach people how to type.
 */

$(document).ready(function() {

	//Listen for charBeingTyped key
	window.addEventListener("keydown", function(event) {	
		var charBeingTyped = $('#active-char').first().contents().filter(function() {
	    		return this.nodeType == 3;
				}).text();
		var charNext = $('#next-chars').first().contents().filter(function() {
					return this.nodeType == 3;
				}).text().charAt(0);
		var nextChars = $('#next-chars').html();
		var charsLeft = $('#next-chars').length;

		/* If user presses active-char key, do the following:
		 * 1. Add that char to typed-chars span
		 * 2. Set the active-char text to the next char
		 * 3. Remove old next char from next-chars span
		 */
		if(event.key === charBeingTyped) {
			$('#typed-chars').append(charBeingTyped);
			$('#active-char').text(charNext);
			$('#next-chars').text(nextChars.toString().substr(1));
		} else {
			//Set temporary background color
		}
	});

	//Function sets text to be typed
	function setText(text) {
		$('#active-char').text(text.charAt(0));
		$('#next-chars').text(text.substr(1));
	}

	//Sample usage
	setText("TypeAlong JS plugin.");

});
