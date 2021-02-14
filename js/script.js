//Q1

const division = (a, b) => a % b;

 console.log(division(2, 5));



//Q2

setTimeout(function () {
    document.querySelector('.loading').classList.add('hide');
}, 1000);

async function gamesRating(url) {
    try { 
	const response = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
	const jsonFromServer = await response.json();
    console.log(jsonFromServer);
	const res = jsonFromServer;
    

	for (let i = 0; i < 8; i++) {
		document.querySelector('main').innerHTML += `
	    <div class="card">
            <h2>${res.results[i].name}</h2>
            <h3>${res.results[i].name}</h3>
            <p>${res.results[i].tags.length}</p>
	    </div>
	`;
    }
    
}catch (error) {
document.querySelector('.alert').innerHTML = showAlertTouser(
    'An error occured',
    'danger'
    );
}finally {
    setTimeout(function () {
        document.querySelector('.alert').innerHTML = ' ';
    }, 3000);
}
}
gamesRating();






