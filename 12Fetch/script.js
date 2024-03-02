const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const input = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + input.value)
    .then((res) => res.json())
    .then((res) => {
      const movies = res.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      const movieDetail = document.querySelector('.movie-container')
      movieDetail.innerHTML = cards

      const modalDetailButton = document.querySelectorAll('.modal-detail-button')
      modalDetailButton.forEach((btn) => {
        btn.addEventListener('click', function() {
          const imdbID = this.dataset.imdbid
          fetch("http://www.omdbapi.com/?apikey=dca61bcc&i=" + imdbID)
            .then(res => res.json())
            .then(m => {
              const movieDetail = showDetail(m)
              const modalBody = document.querySelector('.modal-body')
              modalBody.innerHTML = movieDetail
            })
        })
      })
    });
});

function showCards(m) {
  return `<div class="col-md-4 my-5">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top img-fluid" />
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
                data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
              </div>
              </div>
          </div>`;
}

function showDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" alt="" class="img-fluid" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                  <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer: </strong>${m.writer}</li>
                  <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`;
}
