let cards = document.querySelectorAll('.card') //Create a variable that has all the elements with the 'card' tag
let firstCard = null;//just a placeholder, could prolly also make this 0
let secondCard = null;
let matchesLeft = cards.length/2;

//I like the way this is strutured way way more, its all found IN THE OTHER CODE!!!!
//THATS LIT AS F#CK

let timeoutTime = 1000;

//The cards aren't mixed up at the beginning so we gotta shuffle
//I really dont like using weird ways of writing code like this, but I don't think i have much choice
cards.forEach(card =>{
    card.style.order = Math.floor(Math.random()*cards.length);
    //need to look more into
    //even after looking into, this is still odd to me
});

cards.forEach(card =>{
    card.addEventListener('click', () =>{
        //Checks to see if the card is actually the first card chosen, and if the card is already 'flipped' over
        if(card===firstCard || card.classList.contains('flipped')) return;

        //remove old Hidden value
        card.classList.remove('hidden');
        //append NEW value
        card.textContent = card.getAttribute('data-value');

        if(!firstCard){
            firstCard = card;
            return;
        }
        secondCard = card;

        //Check that sucker for a match, did not seperate functions
        if(firstCard.getAttribute('data-value')===secondCard.getAttribute('data-value')){
            setTimeout(() => {
                firstCard.remove();
                secondCard.remove();
                matchesLeft--;
                document.getElementById('match-count').textContent = matchesLeft;
                resetCards();
            }, timeoutTime);//this line particular changes how much time the timeout will take
        } else{
            setTimeout(() => {
                firstCard.classList.add('hidden');
                firstCard.textContent = '';
                secondCard.classList.add('hidden');
                secondCard.textContent = '';
                resetCards();
            }, timeoutTime);//again, this line takes care of timeout length
        }
    });
});

function resetCards() {
    firstCard=null;
    secondCard=null;
}