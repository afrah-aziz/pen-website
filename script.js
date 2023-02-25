// Get the form element
const form = document.querySelector('form');

// Add an event listener for when the form is submitted
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the name and email input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Show an alert with the name and email values
  alert(`Thank you for submitting the form, ${name}! We will contact you at ${email}.`);
});

		// Get the popup and the open button
		var popup = document.getElementById("my-popup");
		var openButton = document.getElementById("open-popup");

		// Show the popup when the open button is clicked
		openButton.addEventListener("click", function() {
			popup.style.display = "block";
		});

		// Hide the popup when the user clicks outside of it
		window.addEventListener("click", function(event) {
			if (event.target == popup) {
				popup.style.display = "none";
			}
		});

		// Add an event listener for when the form is submitted
		var form = popup.querySelector("form");
		form.addEventListener("submit", function(event) {
			event.preventDefault();
			alert("Form submitted!");
		});

