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
    <button onclick="updateSong(${song.id})">Edit</button>
    </li>`

  })
  
}
printSongs()

//UPDATE - METHOD: PUT
async function updateSong(id){
    const form = document.getElementById('updateSong')
    const updatedSong = {
        name: form.name.value,
        singer: form.singer.value,
        album: form.album.value
    }
    const response = await fetch('URL_API' + `/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSong)
        })
    if (response.ok) {
        printSongs()
        form.reset()
    }
    return updatedSong

    // Helper function to load a song's data into the form for editing
    async function loadSongForEdit(id) {
    const songs = await getAllSongs();
    const song = songs.find((song) => song.id === id);

    if (song) {
        const form = document.getElementById('updateSong');
        form.name.value = song.name;
        form.singer.value = song.singer;
        form.album.value = song.album;

        // Update the form submit button to trigger the update
        form.onsubmit = function (event) {
            event.preventDefault();  // Prevent form from submitting normally
            updateSong(id);  // Call the update function with the song ID
        };
    }
}

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