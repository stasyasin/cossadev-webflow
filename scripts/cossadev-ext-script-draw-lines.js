document.addEventListener('DOMContentLoaded', function () {
  // Function to create a lines between steps
  function createLine (x1, y1, x2, y2) {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI)

    const line = document.createElement('div')
    line.className = 'line'
    line.style.width = length + 'px'
    line.style.transform = `rotate(${angle}deg)`
    line.style.transformOrigin = '0 0'
    line.style.left = x1 + 'px'
    line.style.top = y1 + 'px'

    return line
  }

  function drawLines () {
    // Clear previous lines
    document.querySelectorAll('.line').forEach(line => line.remove())

    // do not draw lines on tablet screens
    if ($(window).width() <= 1024 && $(window).width() >= 380) {
      return;
    }
    // Get elements
    const steps = [
      document.getElementById('step-id-1'),
      document.getElementById('step-id-2'),
      document.getElementById('step-id-3'),
      document.getElementById('step-id-4')
    ]

    const container = document.querySelector('.section-steps-content-cont')

    for (let i = 0; i < steps.length - 1; i++) {
      const rect1 = steps[i].getBoundingClientRect()
      const rect2 = steps[i + 1].getBoundingClientRect()

      const x1 = rect1.right - rect1.width / 2 + window.scrollX
      const y1 = rect1.bottom - rect1.height / 2 + window.scrollY
      const x2 = rect2.right - rect2.width / 2 + window.scrollX
      const y2 = rect2.bottom - rect2.height / 2 + window.scrollY

      const line = createLine(x1, y1, x2, y2)
      container.appendChild(line)
    }
  }

  function updateBackgroundPosition() {
    // Get the position of the .section-steps element
    const sectionStepsPosition = $('.section-steps')?.offset().top ?? 0;

    // Set the top position of the .section-steps-bg-cont element
    $('.section-steps-bg-cont').css('top', sectionStepsPosition);
  }

  // Initial draw and updateBackgroundPosition
  drawLines()
  updateBackgroundPosition()

  // Redraw on window resize
  window.addEventListener('resize', drawLines)
  // Upgrade backgroun position on window resize
  window.addEventListener('resize', updateBackgroundPosition)
})
