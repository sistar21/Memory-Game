var numClick = 0;
var first;
var second;
var match = 0;
var svar1 = '';
var svar2 = '';

var cards = [];
cards[0] = 'b0-4.jpg';
cards[1] = 'b1-5.jpg';
cards[2] = 'b2-3.jpg';
cards[3] = 'b2-3.jpg';
cards[4] = 'b0-4.jpg';
cards[5] = 'b1-5.jpg';

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, random;

	while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
	}
	return array; 
}

// Här shaffla man bilderna
var s;
s = shuffle(cards);

function choose(card) {

    if(numClick == 0) {
        numClick = 1;
        first = card;
        // alert(cards[card]);
        document.images[card].src = cards[card];
        svar1 = cards[card];
    }
    else if(numClick == 1) {
        numClick = 2;
        second = card;
        // alert(card);
        document.images[card].src = cards[card];
        svar2  = cards[card];
        timer = setInterval(control, 500);
        // alert("sdfs");
    }

    // if(numClick == 2){
    // 	document.images[card].src = "group.jpg";
    // }
}
 
function control() {
    clearInterval(timer);
    numClick = 0;

    // alert("svar:" +svar1 + " " + svar2);
    // 0=4, 1=5, 2=3

    if( svar1 == svar2 ) {
        alert("rätt "+ svar1 + '' + svar2);
        match++;
        if(match == 3){
            alert("You have matched all the images!");
            location.reload();
        }
    }
    else {
        alert("fel "+ svar1 + '' + svar2);
        document.images[first].src = "group.jpg";
        document.images[second].src = "group.jpg";
        return;
    }
}