document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const modal = card.querySelector('.modal-overlay');
      modal.classList.add('active');
    });
  });

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      modal.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });