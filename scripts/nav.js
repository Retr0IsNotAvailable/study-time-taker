const showButton = document.querySelectorAll('.js-view-button');

showButton.forEach((button) => {
  button.addEventListener('click', () => {
    const { listId } = button.dataset;
    console.log(listId);
    const listElement = document.querySelector(`.js-time-list-${listId}`);
    listElement.classList.toggle('hidden');
  });
});