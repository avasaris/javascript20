// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         myFunction(this.responseText)
//     }
// }

// function myFunction(data){
//     console.log(data);
// }

// xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1",true);
// xhttp.send();


// let xhttp2 = new XMLHttpRequest();

// xhttp2.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         myFunction(this.responseText)
//     }
// }

// function myFunction(data){
//     console.log(data);
// }

// xhttp2.open("POST", "http://getpost.itgid.info/index2.php",true);
// xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhttp2.send("auth=zhrgB3DxC8LoG7Gcisjc&action=1");

function applyForVisa(documents) {
    console.log('Processing rquest...', documents);

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0) {
                resolve({ country: 'Germany' });
            } else {
                reject("Sorry, not this time...");
            }
        }, 500);
    });

    return promise;
}

function getVisa(visa) {
    console.log('Your request approved. ', visa);
    return Promise.resolve(visa);
}

function bookHotel(visa) {
    console.log("visa for booking: ", visa);
    console.info('Trying to book the room in Hotel');
    return Promise.reject({reason:'we havent free rooms'});
}

function buyTicket() {
    console.info('Ticket was bought');
}

applyForVisa({ doc1: 'passport' })
    .then(getVisa)
    .then(bookHotel)
    .then(buyTicket)
    .catch(msg => console.error('Your request rejected. ', msg))
    .then(() => console.log("Your request was finished."));