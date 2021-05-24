let users = document.querySelectorAll('.user')
let arr = [
    { id: 0, value: '✌️' },
    { id: 1, value: '✊' },
    { id: 2, value: '✋' },
]

let i = 0

const change = () => {
    let computer = document.querySelector('.computer');
    computer.textContent = arr[i].value
    computer.dataset.id = arr[i].id;
    if (i === arr.length - 1) {
        i = 0
    } else {
        i++
    }
}

const alert = (type, message) => {
    let div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.innerText = message;
    document.querySelector('.notification').appendChild(div);
    return div

}

const compare = (value1, value2) => {
    if (value1 == 2 && value2 == 0) {
        alert('danger', 'Bạn đã thua')
    }
    else if (value1 > value2 || value1 == 0 && value2 == 2) {
        alert('success', 'Bạn đã thắng')


    } else if (value1 < value2) {
        alert('danger', 'Bạn đã thua')
    }
    else {
        alert('warning', 'Bạn đã hòa')

    }
}

let run = setInterval(change, 100);



function init() {
    let computer = document.querySelector('.computer');
    let button = document.querySelector('.btn-play');
    let notification = document.querySelector('.notification');
    users.forEach((user, index) => {
        user.addEventListener('click', () => {
            notification.innerHTML = '';
            clearInterval(run);
            user.classList.add('bg-success');
            let value1 = index;
            let value2 = Number(computer.dataset.id);
            let result = compare(value1, value2);
            notification.classList.remove('d-none');
            button.classList.remove('d-none');
            for (let i = 0; i < users.length; i++) {
                users[i].classList.add('pe-none');
            }
        })
    })
    // Play again
    button.addEventListener('click', () => {
        run = setInterval(change, 100);
        users.forEach(user => {
            user.classList.remove('bg-success')
        })
        for (let i = 0; i < users.length; i++) {
            users[i].classList.remove('pe-none');
        }
        notification.classList.add('d-none');
        button.classList.add('d-none');
    })

}


window.addEventListener('DOMContentLoaded', init);