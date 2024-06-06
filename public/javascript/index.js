const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', async function (event) {
      const result = await charactersAPI.getFullList()
      const charactersDiv = document.querySelector(`.characters-container`)
      charactersDiv.innerHTML = ``
      result.forEach((character) => {
        charactersDiv.innerHTML += `
  <div class="character-info">
  <div class="name>Character Name: ${character.name}</div>
  div class="occupation">Character Occupation: ${character.occupation}</div>
  dic class="weapon">Character Weapon: ${character.weapon}</div>
  </div>
  `
      })
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function (event) {

    });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
