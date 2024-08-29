///CREATE - METHOD: POST
async function createSong(){

}
//READ - METHOD: GET

const URL_API = 'http://localhost:3000/songs'
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
  song.map((song) => {
    listTag.innerHTML += `<li>
    <p>${song.id}</p>
    <p>${song.name}</p>
    <p>${song.singer}</p>
    <p>${song.album}</p>
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
      const deletedSong = await response.json();
        return deletedSong
    }

