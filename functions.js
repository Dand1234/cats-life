function makingMainCard() {api.getCats()
    .then((responce) => {
      return responce.json()
    })
    .then((data) => {
      setTimeout(() => {
        $spinner.classList.add('hidden')
        data.forEach(cat => {
          $wrapper.insertAdjacentHTML('beforeend', gerenationCatCard(cat))
        })
      }, 500);
    })};

function closingModal() {
   return $modal.classList.add('hidden');
}
  
function openingModal() {
   return $modal.classList.remove('hidden');
}

function makingDeskription(catInfo) {
    $descript.classList.remove('hidden')
    idOfCat.insertAdjacentText('beforeend',catInfo.id)
    nameOfCat.insertAdjacentText('beforeend',catInfo.name);
    ageOfCat.insertAdjacentText('beforeend',catInfo.age);
    rateOfCat.insertAdjacentText('beforeend',catInfo.rate);
    descriptOfCat.insertAdjacentText('beforeend',catInfo.description);
    imageOfCat.src=`${catInfo.image}`;
  }

function cleaningDescription() {
    {
      idOfCat.innerText = '';
      nameOfCat.innerText = '';
      ageOfCat.innerText= '';
      rateOfCat.innerText= '';
      descriptOfCat.innerText= '';
      imageOfCat.src=``;
    }
}

$addButton.addEventListener('click', () => {
  openingModal();
  $addingModal.classList.remove('hidden')
})

function closingAdd() {closing_button_1.addEventListener('click',() => {
  document.catsForm.reset();
  closingModal();
  $addingModal.classList.add('hidden')
})}

function closingEditing() {closing_button_2.addEventListener('click',() => {
  document.catChange.reset();
  closingModal();
  $changing.classList.add('hidden')
})}

function reloadMainWrapper() {
  $wrapper.innerText="";
  makingMainCard();
}

function closingDescription() {closing_button_3.addEventListener('click',() => {
  $descript.classList.add('hidden');
  closingModal();
})}