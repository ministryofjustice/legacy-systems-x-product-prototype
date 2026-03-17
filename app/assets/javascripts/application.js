/* global $ */

//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//
$(document).ready(function () {
  window.MOJFrontend.initAll(); // this will automatically initialize moj-datepicker
});

$(document).ready(function () {
  const select = document.querySelector('.enhance-autocomplete');
  if (select) {
    accessibleAutocomplete.enhanceSelectElement({ selectElement: select });
  }
});

// Check all checkboxes
$('#unselect-all').click(function(event) {   
    if(this.checked) {
        // Iterate each checkbox
        $('.count').each(function() {
            this.checked = false;                        
        });
    } 
}); 

