document.addEventListener("DOMContentLoaded", function () {
  // Get the checkbox and select element
  var kulliyyahCheckbox = document.getElementById("kulliyyah");
  var kulliyyahSelect = document.querySelector(".form-select[aria-placeholder='Kulliyyah']");
  var submitButton = document.getElementById("submit_button");
  var permissionCheckbox = document.getElementById("permission");

  kulliyyahSelect.disabled = true;
  submitButton.disabled = true;

  permissionCheckbox.addEventListener("change", function () {
    submitButton.disabled = !permissionCheckbox.checked;
  });

  // Add an event listener to the checkbox
  kulliyyahCheckbox.addEventListener("change", function () {
      // Enable or disable the select based on the checkbox state
      kulliyyahSelect.disabled = !kulliyyahCheckbox.checked;
  });
});