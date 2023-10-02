console.log("Welcome to ROCk PAPER SCISSOR GAME!");

const selectionButtons = document.querySelectorAll('[data-selection]')
const finalcolumn=document.querySelector('[data-final-column]')
const computerscorespan=document.querySelector('[data-computer-score]')
const yourscorespan=document.querySelector('[data-your-score]')

const SELECTIONS = [
    {
        name : 'rock',
        emoji : '✊',
        beats : 'scissors'

    },

    {
        name : 'paper',
        emoji : '✋',
        beats : 'rock'

    },

    {
        name : 'scissors',
        emoji : '✌️',
        beats : 'paper'

    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', ()=> {
        const selectionName = selectionButton.dataset.selection

        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){

    const computerSelection = randomSelection();

    const yourWinner = isWinner(selection,computerSelection);
    const computerWinner = isWinner(computerSelection,selection);
    console.log(computerSelection);

    addselectionresult(computerSelection,computerWinner);
    addselectionresult(selection,yourWinner);

    if(yourWinner) increamentscore(yourscorespan);
    if(computerWinner) increamentscore(computerscorespan);
} 

function increamentscore(scorespan){
    scorespan.innerText=parseInt(scorespan.innerText)+1;

}

function addselectionresult(selection, winner){
    const div=document.createElement('div')
    div.innerText=selection.emoji
    div.classList.add('choose-winner')
    
    if(winner)div.classList.add('winner')
    
finalcolumn.after(div);
}



function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name;
}

function randomSelection(){
    const randomindex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomindex];
}