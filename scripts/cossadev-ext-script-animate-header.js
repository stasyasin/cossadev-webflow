// script to display CTA button on scroll on desktop screens
$(document).ready(function () {
  let buttonOffsetTop = 0
  let heroSectionOffsetTop = 0
  let buttonHeight = 0
  let buttonOuterHeight = 0

  // Function to calculate values for animateHeader
  function calcAnimateHeaderValues () {
    // Find the vertical position of the element
    buttonOffsetTop =
      $('.section-hero-cta-cont  .get-in-touch-button')?.offset().top ?? 0
    // Find the vertical position of the element
    heroSectionOffsetTop = $('.section-hero-quick-stack')?.offset().top ?? 0
    // Find the height of the element
    buttonHeight = $('.section-hero-cta-cont  .get-in-touch-button')?.height() ?? 0
    buttonOuterHeight = $(
      '.section-hero-cta-cont  .get-in-touch-button',
    ).outerHeight()
  }

  // Function to animate header
  function animateHeader () {
    const scrollTop = $(window).scrollTop()

    if ($(window).width() >= 990) {
      // Check if the screen width is at least 990px
      if (scrollTop >= buttonOffsetTop - buttonOuterHeight) {
        // Display/hide CRA button in header
        $('.container-get-in-touch').css('display', 'block')
      } else {
        $('.container-get-in-touch').css('display', 'none')
      }
    }

    if ($(window).width() >= 990) {
      // Check if the screen width is at least 990px
      if (scrollTop >= buttonOffsetTop - buttonOuterHeight) {
        // Move button from section header upfront
        $('.section-hero-int-cont .get-in-touch-button').css('z-index', '0')
      } else {
        $('.section-hero-int-cont .get-in-touch-button').css('z-index', '100')
      }
    } else {
      $('.section-hero-int-cont .get-in-touch-button').css('z-index', '0')
    }

    if (scrollTop >= heroSectionOffsetTop - 32) {
      // Change header bg color
      $('.section-header').css('background-color', 'var(--primary-bg-color)')
    } else {
      $('.section-header').css('background-color', 'transparent')
    }

    if ($(window).width() >= 990) {
      // Check if the screen width is at least 1024px
      if (scrollTop >= buttonOffsetTop - buttonOuterHeight - buttonHeight) {
        // Move container-nav-links
        $('.container-nav-links').css('margin-right', '0')
      } else {
        $('.container-nav-links').css('margin-right', '-9rem')
      }
    }
  }

  // Function to handle page load
  function handlePageLoad () {
    // Calculate and animate header values
    calcAnimateHeaderValues()
    animateHeader()
  }

  // Call handlePageLoad on document ready
  handlePageLoad()

  // Call animateHeader on scroll
  $(window).scroll(function () {
    animateHeader()
  })

  // Recalculate values and animate header on window resize
  $(window).resize(function () {
    calcAnimateHeaderValues()
    animateHeader()
  })
})
