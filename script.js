document.addEventListener("DOMContentLoaded", function () {
  // Get the checkbox and select element
  var kulliyyahCheckbox = document.getElementById("kulliyyah");
  var kulliyyahSelect = document.querySelector(".form-select[aria-placeholder='Kulliyyah']");

  kulliyyahSelect.disabled = true;
  // Add an event listener to the checkbox
  kulliyyahCheckbox.addEventListener("change", function () {
      // Enable or disable the select based on the checkbox state
      kulliyyahSelect.disabled = !kulliyyahCheckbox.checked;
  });
});