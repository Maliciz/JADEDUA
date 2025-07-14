import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://ocsznhvahebvmvqoewgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jc3puaHZhaGVidm12cW9ld2diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0OTQzMjAsImV4cCI6MjA2ODA3MDMyMH0.s3Z7govO0opgdFbYGp3GRToPpEEnrBgV5m6H4UcQHA8'
)


 const form = document.getElementById('signup-form')

  form?.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert('Помилка: ' + error.message)
    } else {
      alert('Успішна реєстрація! Перевір пошту.')
    }
  })



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
