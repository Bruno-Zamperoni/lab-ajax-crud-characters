const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      const characters = await charactersAPI.getFullList();
      const container = document.querySelector('.characters-container')
      container.innerHTML = ""
      characters.forEach(character => {
        container.innerHTML += `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const characterId = document.getElementById("character-id").value;
      const character = await charactersAPI.getOneRegister(characterId);
      const container = document.querySelector('.characters-container')
      console.log(character);
      container.innerHTML = ""
      container.innerHTML = `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click",async function (event) {
      const characterId = document.getElementById("character-id-delete").value;
      const response = await charactersAPI.deleteOneRegister(characterId);
      if (response.status === 200) {
        document.getElementById('delete-one').style.background = 'green'
      }else{ 
        document.getElementById('delete-one').style.background = 'red'
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit",async function (event) {
      event.preventDefault()
      const characterId = document.getElementById("edit-id").value;
      const name = document.getElementById("edited-name").value;
      const occupation = document.getElementById("edited-occupation").value;
      const weapon = document.getElementById("edited-weapon").value;
      const isCartoon = document.getElementById("edited-cartoon").checked;

      const editedCharacter = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: isCartoon
      };

      const response = await charactersAPI.updateOneRegister(characterId, editedCharacter);
      console.log(response);
      if (response.status === 200) {
        document.getElementById('send-edited-data').style.background = 'green'
      }else{ 
        document.getElementById('send-edited-data').style.background = 'red'
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault()
      const name = document.getElementById("name").value;
      const occupation = document.getElementById("occupation").value;
      const weapon = document.getElementById("weapon").value;
      const isCartoon = document.getElementById("cartoon").checked;
      
      

      const newCharacter = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: isCartoon
      };
      const response = await charactersAPI.createOneRegister(newCharacter)
      if (response.status === 201) {
        document.getElementById('send-data').style.background = 'green'
      }else{ 
        document.getElementById('send-data').style.background = 'red'
      }
    });
