// Tell the addElement function to run when the document of the web page has loaded.
document.body.onload = addElement;

// Create a bunch of buttons and inject them into the DOM
function addElement () {
	for (let counter = 0; counter < 9; counter++) {
		// Create a new button element
		const newButton = document.createElement("button");

		// Figure out the text for the button
		const buttonText = "This is button #" + counter;

		// Create a text node
		const newContent = document.createTextNode(buttonText);

		// Add the text node inside the newly created button
		newButton.appendChild(newContent);

		// Figure out what id to give this button
		const buttonID = "button" + counter;

		// Add an id to the button element
		newButton.setAttribute("id", buttonID);

		// Find the container in the HTML to put the button inside of
		const buttonContainer = document.getElementById("myButtonContainer");
		// Add the newly created button element and its content into the DOM
		buttonContainer.appendChild(newButton);
	}
}