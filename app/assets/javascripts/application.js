/* global $ */

//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


$(document).ready(function () {
  window.MOJFrontend.initAll()
  accessibleAutocomplete.enhanceSelectElement({
    selectElement: document.querySelector('.enhance-autcomplete')
  })
})


// Check all checkboxes
$('#unselect-all').click(function(event) {   
    if(this.checked) {
        // Iterate each checkbox
        $('.count').each(function() {
            this.checked = false;                        
        });
    } 
}); 

