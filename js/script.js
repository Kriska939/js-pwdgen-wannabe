/* ISTRUZIONI SCRIPT:
 1 - Chiedi all’utente il suo nome,
 2 - poi chiedi il suo cognome,
 3 - poi chiedi il suo colore preferito
 Infine scrivi sulla pagina nomecognomecolorepreferito21 */

//  Recupero informazioni da utente:

var firstname = prompt('What\'s your name?', 'Cristina');
var surname = prompt('What\'s your surname?', 'Corrado');
var favoriteColor = prompt('What\'s your favorite color?', 'Lilac');

// Rendo 21 var stringa

var pwEnd = '21';

// Genero nuova password

var specialPassword = firstname + surname + favoriteColor + pwEnd;

// Scrivo pw sulla pagina

var pwHere = document.getElementById('generated-pw');

pwHere.innerHTML = specialPassword;

// console check:

/* console.log(firstname);
 console.log(surname);
 console.log(favoriteColor);
 console.log(specialPassword); */