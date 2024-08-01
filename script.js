function toggleCards() {
  const hiddenCards = document.querySelectorAll('.card.hidden');
  const visibleCards = document.querySelectorAll('.card:not(.hidden)');
  const toggleBtn = document.getElementById('toggleBtn');

  // Check if there are any hidden cards
  if (hiddenCards.length > 0) {
    hiddenCards.forEach(card => card.classList.remove('hidden'));
    toggleBtn.innerText = 'View Less';
  } else {
    visibleCards.forEach((card, index) => {
      if (index >= 3) { // Adjust the number of initially visible cards here
        card.classList.add('hidden');
      }
    });
    toggleBtn.innerText = 'View All';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach(button => {
      button.addEventListener('click', () => {
          const dropdownMenu = button.nextElementSibling;
          dropdownMenu.classList.toggle('hidden');
      });
  });
});
