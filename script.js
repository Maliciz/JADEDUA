 document.querySelectorAll('.drop-toggle').forEach(btn => {
      btn.addEventListener('click', function() {
        setTimeout(() => {
          document.querySelectorAll('.drop-toggle').forEach(b => {
            const icon = b.querySelector('.drop-icon');
            const target = document.querySelector(b.getAttribute('data-bs-target'));
            if (target.classList.contains('show')) {
              icon.textContent = '−';
            } else {
              icon.textContent = '+';
            }
          });
        }, 350);
      });
    });