class Api {
  constructor(name) {
    this.url = "https://cats.petiteweb.dev/api/single/";
    this.name = name;
  }

  getCats() {
    return fetch(`${this.url}${this.name}/show`)
  }

  getCat(id) {
    return fetch(`${this.url}${this.name}/show/${id}`)
  }

  getCatsIds() {
    return fetch(`${this.url}${this.name}/ids`)
  }

  addCat(bodyOfCat) {
    return fetch(`${this.url}${this.name}/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyOfCat)
    });
  }

  updCat(changingPartsOfCat, id) {
    return fetch(`${this.url}${this.name}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changingPartsOfCat)
    });
  }

  delCat(id) {
    return fetch(`${this.url}${this.name}/delete/${id}`, {
      method: 'DELETE'
    })
  }
}

const api = new Api('ddyakov')