///CREATE - METHOD: POST
const URL_API = 'http://localhost:3000/songs'

async function createSong(){
    const form = document.getElementById('addSong')
    const newSong = {
        name: form.name.value,
        singer: form.singer.value,
        album: form.album.value
    }
    const response = await fetch('URL_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSong)
        })
    }     
if (response.ok) {
    printSongs()
}


//READ - METHOD: GET
async function getAllSongs() {
  const response = await fetch('URL_API', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
    return data;
}

const listTag= document.getElementById('songList')

async function printSongs() {
  const songs = await getAllSongs();
  listTag.innerHTML = ''
  song.map((song) => {
    listTag.innerHTML += `<li>
    <p>${song.id}</p>
    <p>${song.name}</p>
    <p>${song.singer}</p>
    <p>${song.album}</p>
    <button onclick="deleteSong(${song.id})">Delete</button>
    </li>`

  })
  
}
printSongs()

//UPDATE - METHOD: PUT
async function updateSong(){

}

//DELETE - METHOD: DELETE

async function deleteSong(id){
    const response = await fetch('URL_API' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const deletedSong = await response.json()
      if (response.ok) {
        printSongs()
      }
        return deletedSong
}