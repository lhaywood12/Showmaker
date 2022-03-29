//use class
//Build a class constructor
//Collect inputs
//Render cards based on inputs

class Tvshow {
    constructor() {
        this.show = {
            title:'',
            genre:'',
            platform:'',
            channel:'',
            seasons:'',
            directors:'',
            writers:'',
            yearBegan:'',
            yearEnd:'present',
            rating:''
        }
    }

    button() {
        let button = document.querySelector('.submit-button');
        button.addEventListener('click', this.displayData)
    }

    displayData(e) {
        //let button = document.querySelector('submit-button');
        //add event listener to button
        //button.addEventListener('click', (e)=> {
            e.preventDefault();

            // access input values
            let inputTitle = document.getElementById('inputTitle').value;
            let inputGenre = document.getElementById('inputGenre').value,
                inputPlatform = document.getElementById('inputPlatform').value,
                inputChannel = document.getElementById('inputChannel').value,
                inputSeasons = document.getElementById('inputSeasons').value,
                inputDirectors = document.getElementById('inputDirectors').value,
                inputWriters = document.getElementById('Writers').value,
                inputYearBegan = document.getElementById('InputYearBegan').value,
                inputYearEnd = document.getElementById('inputYearEnd').value,
                inputRating= document.getElementById('inputRating').value;

            //check Year end
            inputYearEnd == '' ? inputYearEnd = 'Present':null;

            //check season
            inputSeason == '' ? inputSeasons = '1': null;

            //pass input values into objects
            this.show = {
                title: inputTitle,
                genre:inputGenre,
                platform: inputPlatform,
                channel: inputChannel,
                seasons: inputSeasons,
                directors: inputDirectors,
                writers: inputWriters,
                yearBegan: inputYearBegan,
                yearEnd: inputYearEnd,
                rating: inputRating
            }

            //console.log(this.show);

            let cardDisplay = document.getElementById('cardDisplay');

            cardDisplay.innerHTML += `
             <div class-="col-mb-4">
               <div class="card show-card">
                  <h2 class="title">${this.show.title}</h2>
                  <p class="genre">${this.show.genre}</p>
                  <p class="platform">${this.show.platform}</p>
                  <p class="channel">${this.show.channel}</p>
                  <p>Number of seasons: <span class="nuSeasons">${this.show.seasons}</span></p>
                  <p>Directors: <span class="directors">${this.show.directors}</span></p>
                  <p>Writers: <span class="writers">${this.show.writers}</span><p>
                  <p><span class="seriesBegan">${this.show.yearBegan}</span> - <span class = "seriesEnd">${this.show.yearEnd}</span></p>
                  <p class="tvRating">${this.show.rating}</p>
               </div>
             </div>
            `
        }
    }

let action = new TvShow();
action.displayData();