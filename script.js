let random = Math.floor(Math.random() * 3) + 1;

function shoWinnerButton(id) {
    if (id == random) {
        document.getElementById(id).className = 'btn btn-success';
        document.getElementById('message').textContent = 'Congratulations. You won!';
    } else {
        document.getElementById(id).className = 'btn btn-danger';
        document.getElementById('message').textContent = 'Sorry. You lost!';
    }
}

function generateButtons() {
    let buttons = document.getElementById('number-input').value
    document.getElementById('buttonsCnt').innerHTML = "";
    for (let id = 1; id <= buttons; ++id) {
        document.getElementById('buttonsCnt').innerHTML += `
<button id="${id}" type="button" class="btn btn-secondary" onClick="shoWinnerButton(${id})">${id}</button>
`;
    }
}