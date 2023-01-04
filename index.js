makingMainCard();

const gerenationCatCard = (cat) => `<div data-card_id=${cat.id} class="card mx-2 main-cards" style=" z-index: 1;">
<img src="${cat.image}" class="card-img-top" alt="${cat.name}">
<div class="card-body">
  <h5 class="card-title">${cat.name}</h5>
  <button data-action="show" class="cardButtons btn btn-primary">Подробно</button>
  <button data-action="delete" class="cardButtons btn btn-danger">Удалить</button>
  <button data-action="change" class="cardButtons btn btn-primary">Изменить</button>
</div>
</div>`


$wrapper.addEventListener('click', (event) => {

  const $currentCard = event.target.closest("[data-card_id]");
  const catId = $currentCard.dataset.card_id;

  switch (event.target.dataset.action) {
    case 'delete':
      api.delCat(catId);
      $currentCard.remove()
      break;

    case 'show':
      $modal.classList.remove('hidden');
      api.getCat(catId)
        .then((data) => data.json())
        .then((catInfo) => makingDeskription(catInfo))
      closingDescription();
      break;

    case 'change':
      openingModal();
      $changing.classList.remove('hidden');
      closingEditing();
      document.forms.catChange.addEventListener('submit', (event) => {
        event.preventDefault();
      
        const changingParts = Object.fromEntries(new FormData(event.target).entries());
        changingParts.age = Number(changingParts.age)
        changingParts.rate = Number(changingParts.rate)
        
        for (let key in changingParts) {
          if (changingParts[key].valueOf() == "") {
            delete changingParts[key]
          }
        }

        api.updCat(changingParts,catId)
          .then(res => {
          res.ok; 
          reloadMainWrapper();
          closingModal();
          $changing.classList.add('hidden');
            })
          })
          break;
//FIXME: Не могу испрвить дублирование карточек при закрытии модалки с изменениями данных о котах
    default:
      break;
  }})

document.forms.catsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closingAdd();

  const data = Object.fromEntries(new FormData(event.target).entries());

  data.age = Number(data.age)
  data.id = Number(data.id)
  data.rate = Number(data.rate)
  data.favorite = data.favorite === 'on'


  api.addCat(data)
    .then(res => res.ok && closingModal() && $addingModal.classList.add('hidden'))
    .then(reloadMainWrapper())
    .catch(ErrMsg => console.log(ErrMsg))
  

})



// TODO: catch (отследить ошибку при создании кота и обработать, сообщить пользователю)