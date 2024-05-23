// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Addicted to Your Love", artist: "Gaba Channal", genre: "Amapiano" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Alcohol Abuser", artist: "Gaba Channal", genre: "Amapiano" },
    { title: "Not in My Senses", artist: "Gaba Channal", genre: "Amapiano" },
    { title: "Blue Thick", artist: "Gaba Channal", genre: "Amapiano" },
    { title: "Ngise Mathandweni", artist: "Gaba Channal", genre: "Amapiano" },
    // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Amapiano",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

function generatePlaylist(guardians, songs) {
    // Create playlists for each Guardian
    const playlists = Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return {
            guardian: guardian,
            playlist: playlist
        };
    });

    // Display the playlists for each Guardian on the webpage
    const playlistsContainer = document.getElementById('playlists');
    playlistsContainer.innerHTML = ''; // Clear any existing content

    playlists.forEach(({ guardian, playlist }) => {
        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('playlist');

        const guardianTitle = document.createElement('h3');
        guardianTitle.textContent = `${guardian}'s Playlist`;
        guardianDiv.appendChild(guardianTitle);

        if (playlist.length > 0) {
    playlist.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');

        const songTitle = document.createElement('span');
        songTitle.classList.add('song-title');

        const titleText = document.createTextNode(`${song.title} by `);
        const artistSpan = document.createElement('span');
        artistSpan.textContent = song.artist;

        // Set the artist name color to white using inline style
        artistSpan.style.color = 'white';
        

        songTitle.appendChild(titleText);
        songTitle.appendChild(artistSpan);

        songDiv.appendChild(songTitle);
        guardianDiv.appendChild(songDiv);
    });
} else {
    const noSongsMessage = document.createElement('p');
    noSongsMessage.textContent = "No songs available in this genre.";
    guardianDiv.appendChild(noSongsMessage);
}

        playlistsContainer.appendChild(guardianDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    generatePlaylist(guardians, songs);
});





