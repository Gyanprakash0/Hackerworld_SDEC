
  
  window.onload = function() {
    
    setTimeout(function() {
      document.querySelector('.door-container').classList.add('loaded');
    }, 1000);

   
    setTimeout(function() {
      document.querySelector('.background-content').style.opacity = '1';
    }, 5000); 
};
$(document).ready(function() {
  var imageBoxes = $('.image-box');
  var maxHeight = 0;

  // Find the maximum height
  imageBoxes.each(function() {
    var height = $(this).outerHeight();
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  // Set equal height and width
  imageBoxes.css({
    'height': maxHeight,
    'width': maxHeight
  });
});

// Add this JavaScript for the responsive navbar
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});
function downloadPdf() {
  // Replace 'demo.pdf' with the path to your PDF file
  var pdfUrl = 'rulebook.pdf';
  var link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'rulebook.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
