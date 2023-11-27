const movies = [
    { 
      title: 'Kung Fu Panda',
      cover: 'kung fu.jpg',
      video: 'path_to_movie1.mp4'
    },
    { 
      title: 'Movie 2',
      cover: 'path_to_movie2_cover.jpg',
      video: 'path_to_movie2.mp4'
    },
    { 
      title: 'Movie 3',
      cover: 'path_to_movie3_cover.jpg',
      video: 'path_to_movie3.mp4'
    },
    { 
      title: 'Movie 4',
      cover: 'path_to_movie4_cover.jpg',
      video: 'path_to_movie4.mp4'
    },
    // Add more movies in a similar format
    { 
      title: 'Movie 5',
      cover: 'path_to_movie5_cover.jpg',
      video: 'path_to_movie5.mp4'
    },
    // Add as many movies as needed
  ];
  
  function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie';
    movieElement.innerHTML = `<img src="${movie.cover}" alt="${movie.title}" width="200" height="300">`;
  
    movieElement.addEventListener('click', function() {
      window.open(movie.video, '_blank');
    });
  
    return movieElement;
  }
  
  function displayMovies() {
    const moviesContainer = document.getElementById('movies-container');
    movies.forEach(movie => {
      const movieElement = createMovieElement(movie);
      moviesContainer.appendChild(movieElement);
    });
  }
  
  window.onload = displayMovies;
  