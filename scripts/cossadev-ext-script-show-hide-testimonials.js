// script to show/hide testimonials by id
document.addEventListener('DOMContentLoaded', function () {
  let testimonialCount = 4; // Number of testimonial sections
  let isHidden = Array(testimonialCount).fill(true); // Array to store visibility state
  console.log('asd initial isHidden', isHidden);

  for (let i = 0; i < testimonialCount; i++) {
    (function(index) {
      const realLifeIndex = index + 1;

      let actionElement = $(`#testimonials-action-${realLifeIndex}`);
      let contElement = $(`#testimonials-box-cont-${realLifeIndex}`);
      let textElement = $(`#testimonials-text-cont-${realLifeIndex}`);

      $(actionElement).click(function() {
        console.log('asd isHidden', isHidden);
        if (isHidden[index]) {
          textElement.css({'height': 'auto','opacity': 1});
          contElement.css({'color': 'var(--opposite-primary-text-color)'});
          contElement.css({'background-color': 'var(--primary-light-blue-color)'});
          actionElement.css({'transform': 'rotate(0deg)'});
        } else {
          textElement.css({'height': '0','opacity': 0});
          contElement.css({'color': 'var(--primary-text-color)'});
          contElement.css({'background-color': 'var(--primary-bg-color)'});
          actionElement.css({'transform': 'rotate(180deg)'});
        }
        isHidden[index] = !isHidden[index];
      });
    })(i);
  }

  // Trigger an initial click for each button on page load to apply correct styles
  for (let i = 1; i <= testimonialCount; i++) {
    $(`#testimonials-action-${i}` ).click();
  }

  // Trigger an initial click for each button on page load to collapse all items, except first one
  for (let i = 2; i <= testimonialCount; i++) {
    $(`#testimonials-action-${i}` ).click();
  }
})
