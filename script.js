let order = [];
let clickedOrder = [];
let score = 0;

//0 - azul
//1 - vermelho
//2 - verde
//3 - roxo

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const roxo = document.querySelector('.roxo');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order){
        let elementeColor = createColorElement(order[i]);
        lightColor(elementeColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    let timeOver = number - 250;
    setTimeout(() => {
        element.classList.add('selected');
    }, timeOver);
    setTimeout(() => {
        element.classList.remove('selected');
    }, timeOver + 300);
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {

            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}!\nVocê conseguiu! Vamos deixar o próximo nível um pouco mais difícil?`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },300);
}

let createColorElement = (color) => {
    if(color == 0) {
        return azul;
    } else if(color == 1) {
        return vermelho;
    } else if(color == 2) {
        return verde;
    } else if(color == 3) {
        return roxo;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\n`
    + 'Ihhh, não foi dessa vez parceiro!!!\n'
    + 'Mas caso queira tentar de novo, só clicar no Ok.');
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Olá jovem, bem vindo a Lux, o jogo do Siga a Luz!\nClique no ok para iniciar um novo jogo!');
    score = 0;

    nextLevel();
}

azul.onclick = () => click(0);
vermelho.onclick = () => click(1);
verde.onclick = () => click(2);
roxo.onclick = () => click(3);

playGame();