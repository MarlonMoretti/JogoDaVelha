let jogadorVez = true // True para vez do jogador X e False para vez do jogador O

// Criando a Matriz 3x3 para jogo da velha
let jogo = new Array(3)
for(var i = 0; i < jogo.length; i++){
    jogo[i] = new Array(3)
}

// Função jogar serve para preencher as células com X ou O 
function jogar(i, j){
    let venc = document.querySelector("div#venc")
    venc = venc.innerText
    
    if(venc == 'O vencedor é:'){

        let celula = document.querySelector("td#celula"+i+"x"+j)
        
        if(celula.innerHTML == ''){
            if(jogadorVez){
                celula.innerHTML = '<img src="img/svg_X.svg" alt="X" class=".imgSvg" height="70%">'
                jogadorVez = false
            }else{
                celula.innerHTML = '<img src="img/svg_O.svg" alt="O" class=".imgSvg" height="70%">'
                jogadorVez = true
            }
        }
        verificarGanhador()
    }
}

function resetarJogo(){
    // Limpando valores para o Array
    for(var i = 0; i < jogo.length; i++){
        for(var j = 0; j < jogo[i].length; j++){
            jogo[i][j] = document.querySelector("td#celula"+i+"x"+j)
            jogo[i][j].innerText = ''
        }
    }

    // Limpando texto com resultado do jogo anterior
    let venc = document.querySelector("div#venc")
    venc.innerText = "O vencedor é:"
    venc.style.display = "none";

    jogadorVez = true // Garantir que o primeiro a jogar será o jogador "X"    
}

function verificarGanhador(){
    // Preenchendo a matriz de acordo com as jogadas anteriores
    for(var i = 0; i < jogo.length; i++){
        for(var j = 0; j < jogo[i].length; j++){
            jogo[i][j] = document.querySelector("td#celula"+i+"x"+j)
            jogo[i][j] = jogo[i][j].innerHTML
            if(jogo[i][j] == '<img src="img/svg_X.svg" alt="X" class=".imgSvg" height="70%">'){
                jogo[i][j] = 'X'
            }else if(jogo[i][j] == '<img src="img/svg_O.svg" alt="O" class=".imgSvg" height="70%">'){
                jogo[i][j] = 'O'
            }else{
                jogo[i][j] = " "
            }
        }
    }

    // Contador de jogadas 
    let qtdeJogadas = 9
    for(var i = 0; i < jogo.length; i++){
        for(var j = 0; j < jogo[i].length; j++){
            if(jogo[i][j] == " "){
                qtdeJogadas--
            }
        }
    }

    // Checagem de vencedor nas linhas horizontais
    if(
        (jogo[0][0] == 'X' && jogo[0][1] == 'X' && jogo[0][2] == 'X') ||
        (jogo[1][0] == 'X' && jogo[1][1] == 'X' && jogo[1][2] == 'X') ||
        (jogo[2][0] == 'X' && jogo[2][1] == 'X' && jogo[2][2] == 'X')){

            mostrarGanhador('X')

    }else if(
        (jogo[0][0] == 'O' && jogo[0][1] == 'O' && jogo[0][2] == 'O') ||
        (jogo[1][0] == 'O' && jogo[1][1] == 'O' && jogo[1][2] == 'O') ||
        (jogo[2][0] == 'O' && jogo[2][1] == 'O' && jogo[2][2] == 'O')){

            mostrarGanhador('O')

    }else if( // Checagem de vencedor nas linhas verticais
        (jogo[0][0] == 'X' && jogo[1][0] == 'X' && jogo[2][0] == 'X') ||
        (jogo[0][1] == 'X' && jogo[1][1] == 'X' && jogo[2][1] == 'X') ||
        (jogo[0][2] == 'X' && jogo[1][2] == 'X' && jogo[2][2] == 'X')){

            mostrarGanhador('X')

    }else if(
        (jogo[0][0] == 'O' && jogo[1][0] == 'O' && jogo[2][0] == 'O') ||
        (jogo[0][1] == 'O' && jogo[1][1] == 'O' && jogo[2][1] == 'O') ||
        (jogo[0][2] == 'O' && jogo[1][2] == 'O' && jogo[2][2] == 'O')){

            mostrarGanhador('O')

    }else if( // Checagem de vencedor nas linhas diagonais
        (jogo[0][0] == 'X' && jogo[1][1] == 'X' && jogo[2][2] == 'X') ||
        (jogo[2][0] == 'X' && jogo[1][1] == 'X' && jogo[0][2] == 'X')){

            mostrarGanhador('X')
        
    }else if(
        (jogo[0][0] == 'O' && jogo[1][1] == 'O' && jogo[2][2] == 'O') ||
        (jogo[2][0] == 'O' && jogo[1][1] == 'O' && jogo[0][2] == 'O')){
        
            mostrarGanhador('O')
        
    }else if( // Checando empate
        qtdeJogadas == 9){
            mostrarGanhador('Empate')
    }
}

function mostrarGanhador(venc){
    let txtVenc = document.querySelector("div#venc")
    if(venc == 'Empate'){
        txtVenc.innerHTML = '<p class="venc"><strong>Deu Velha!</strong><br>Resete o jogo para jogar novamente!</p>'
    }else{
        txtVenc.innerHTML = '<p class="venc">O vencedor é: <strong id="vencS">'+venc+'</strong><br>Resete o jogo para jogar novamente!</p>'
    }
    txtVenc.style.display = "block";
}