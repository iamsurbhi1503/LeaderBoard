function randomColor() {
    let str = "0123456789abcdef";
    let colorStr = "#";

    for(let i = 0; i < str.length; i++) {
        let randomIndex = Math.floor(Math.random * str.length);
        colorStr += str[randomIndex];

        return colorStr;
    }
}


const PlayersList = []

function addPlayer (event){

    event.preventDefault()

    const playerList = document.getElementById('player-list')

    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const country = document.getElementById('country').value
    const score = document.getElementById('score').value

    const playerData = { name: firstName + " " + lastName, 
        country: country,
        score: Number(score)
    }

    PlayersList.push(playerData)
    PlayersList.sort( (player1, player2) => parseInt(player2.score) - parseInt(player1.score) )

    playerList.innerHTML = ''
    for (let index = 0; index < PlayersList.length; index++) {
        const player = PlayersList[index];

        const liEl = document.createElement('li')
        const nameContent = document.createElement('span')
        const countryContent = document.createElement('span')
        const curentScore = document.createElement('span') 

        const increaseButton = document.createElement('button')
        const decreaseButton = document.createElement('button')
        const removeButton = document.createElement('button')
        

    increaseButton.setAttribute('onclick', `increaseButtonHandler(${index})`)
    decreaseButton.setAttribute('onclick', `decreaseButtonHandler(${index})`)

    removeButton.addEventListener("click", removeData)

    
    document.querySelector("h1").style.color = randomColor();

    // CSS PART 
 
     increaseButton.classList.add("plusJS");
     decreaseButton.classList.add("minusJS");
     removeButton.classList.add("removeJS");
     liEl.classList.add("listJS");
     nameContent.classList.add("nameJS");
     countryContent.classList.add("countryJS");
     curentScore.classList.add("scoreJS")
    //  nameContent.textContent = `(${firstName} ${lastName})`;
 
     // CSS PART

    // document.getElementsByClassName("liEl").style.backgroundColor = randomColor()


        increaseButton.innerText = "+5";
        decreaseButton.innerText = "-5";
        removeButton.innerText = "X";
        curentScore.innerText = player.score
        countryContent.innerText = player.country
        nameContent.innerText = player.name

        liEl.append(nameContent, countryContent, curentScore, increaseButton, decreaseButton, removeButton)
        playerList.append(liEl)
        
    }

}

function refreshList () {

    const playerList = document.getElementById('player-list')
    PlayersList.sort( (player1, player2) => parseInt(player2.score) - parseInt(player1.score) )

    playerList.innerHTML = ''
    for (let index = 0; index < PlayersList.length; index++) {
        const player = PlayersList[index];

        const liEl = document.createElement('li')
        const nameContent = document.createElement('span')
        const countryContent = document.createElement('span')
        const curentScore = document.createElement('span')

        

        const increaseButton = document.createElement('button')
        const decreaseButton = document.createElement('button')
        const removeButton = document.createElement('button')

        

        increaseButton.setAttribute('onclick', `increaseButtonHandler(${index})`)
        decreaseButton.setAttribute('onclick', `decreaseButtonHandler(${index})`)

        removeButton.addEventListener("click", removeData)


            // CSS PART 
 
     increaseButton.classList.add("plusJS");
     decreaseButton.classList.add("minusJS");
     removeButton.classList.add("removeJS");
     liEl.classList.add("listJS");
     nameContent.classList.add("nameJS");
     countryContent.classList.add("countryJS");
     curentScore.classList.add("scoreJS")
    //  nameContent.textContent = `(${firstName} ${lastName})`;
 
     // CSS PART

        
        increaseButton.innerText = "+5";
        decreaseButton.innerText = "-5";
        removeButton.innerText = "X";
        curentScore.innerText = player.score
        countryContent.innerText = player.country
        nameContent.innerText = player.name

        liEl.append(nameContent, countryContent, curentScore,  increaseButton, decreaseButton, removeButton)
        playerList.append(liEl)
        
    }
}

function increaseButtonHandler (index) {

    PlayersList[index].score += 5
    // document.getElementsByClassName("liEl").style.backgroundColor = randomColor();

    refreshList()


}


function decreaseButtonHandler (index) {
    PlayersList[index].score -= 5
    refreshList()
}

function removeData (e){
    console.log(e.parentElement);
    e.target.parentElement.remove()
    // refreshList()
}


// removeButton.addEventListener("click", (e) => {
//     e.parentElement.remove()
// })

// removeButton.innerText = "delete";