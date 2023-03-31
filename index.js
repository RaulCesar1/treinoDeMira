const atualizarPontos = () => document.getElementById('pontuacao-display').innerHTML = localStorage.getItem('pontos')
const atualizarDificuldadeDisplay = (dificuldade) => document.getElementById('dificuldade-display').innerHTML = dificuldade

window.onload = () => {
    localStorage.setItem('pontos', 0)
}

function debugarJogo() {
    setInterval(() => {handleMove()}, 250)
}

function handleMove() {   
    const quadrado = document.getElementById('quadrado')
    
    quadrado.style.position = 'absolute'
    
    quadrado.style.marginLeft = `${Math.floor(Math.random() * (95 - 1) + 1)}%`
    quadrado.style.marginTop = `${Math.floor(Math.random() * (45 - 1) + 1)}%`
    
    localStorage.setItem('pontos', Number(localStorage.getItem('pontos'))+1)
    
    atualizarPontos()
}

function dificuldade(df) {
    const quadrado = document.getElementById('quadrado')
    
    let novaDificuldade = ""
    
    switch(df) {
        case 1:
            novaDificuldade = 'Fácil';
            quadrado.style.height = '150px';
            quadrado.style.width = '150px';
            document.getElementById('h1-dificuldade').style.backgroundColor = 'forestgreen'
            break;
        case 2:
            novaDificuldade = 'Médio';
            quadrado.style.height = '100px';
            quadrado.style.width = '100px';
            document.getElementById('h1-dificuldade').style.backgroundColor = 'orange'
            break;
        case 3:
            novaDificuldade = 'Difícil';
            quadrado.style.height = '50px';
            quadrado.style.width = '50px';
            document.getElementById('h1-dificuldade').style.backgroundColor = 'red'
            break;
    }
    
    atualizarDificuldadeDisplay(novaDificuldade)
}