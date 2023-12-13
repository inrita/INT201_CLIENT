// 65130500090 Inrita Warajirawiroj

class Movies {
  // Your constructor must initial movies property to an empty array ([]).
  constructor() {
    this.movies = []
  }

  // Write a program to get all movies
  getAllMovies() {
    return this.movies
  }

  addMovie(title, director, year, genre) {
    // The movie details are title, director, year, and genre. 
    // If any of the required details are missing, do not add the movie and return undefined
    // ถ้า parameter ที่รับเข้ามาขาดหายไปตัวใดตัวหนึ่งห้าม add เพิ่มเข้าไป
    if (title === undefined || director === undefined || year === undefined || genre === undefined) {
      return undefined
    }

    // If a movie with the same title and director (with case insenstive) already exists in the array, 
    // do not add the duplicate movie and return undefined
    // หากมี movies ที่มี title and director ซ้ำห้าม add เพิ่มเข้าไปอีก
    const isDuplicate = this.movies.find((movie) => {
      movie.title.toLowerCase() === title.toLowerCase() &&
      movie.director.toLowerCase() === director.toLowerCase()
    })

    if (isDuplicate) {
      return undefined
    } 
    
    // Otherwise, a new movie object returned. 
    // examples, return { title: 'Inception', director: 'Christopher Nolan', year: 2010, genre: 'Science Fiction' }
    else {
      return this.movies.push({title: title, director: director, year: year, genre: genre})
    }
  }

  updateMovie(title, updatedDetails) {
    // Find the movie by title (case insensitive)
    const findIndexByTitle = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (findIndexByTitle !== -1) { //เจอ title สามารถ updatedDetails ได้
      // เข้าถึงชื่อ array และก็เข้าถึง property ใน object นั้น = update ค่า หรือ ถ้าไม่ได้อัปเดตให้คืนค่าที่มีอยู่ใน array
      this.movies[findIndexByTitle].year = updatedDetails.year || this.movies[findIndexByTitle].year
      this.movies[findIndexByTitle].director = updatedDetails.director || this.movies[findIndexByTitle].director 
      this.movies[findIndexByTitle].year = updatedDetails.year || this.movies[findIndexByTitle].year
      this.movies[findIndexByTitle].genre = updatedDetails.genre || this.movies[findIndexByTitle].genre
      return this.movies[findIndexByTitle]
    } 

    // If the movie is not found, return undefined
    else {
      return undefined
    }
  }

  deleteMovieByTitle(title) {
    // Find the movie by title (case insensitive)
    const indexByTitle = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    
    // If the movie is found, delete it
    if (indexByTitle !== -1) {
      // ลบตัวที่จะลบออก 1 ตัว
      this.movies.splice(indexByTitle, 1) 
    } 

    // If the movie is not found, return undefined
    else {
      return undefined
    }
  }
}

module.exports = Movies

