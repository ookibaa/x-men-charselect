// Pega os personagens no JS via a class .personagem
const personagens = document.querySelectorAll('.personagem')

//adiciona a class .selecionado no persoagem que o usuário pasa o cursor do mouse e remove class se ela ja existe

personagens.forEach((personagem) => {
            personagem.addEventListener('mouseenter',() => {


                //Scroll to top se a screen for menor de 450
                if(window.innerWidth < 450){
                    window.scrollTo({top:0, behavior: 'smooth'})
                }

                removeClassSelecionado();

                personagem.classList.add('selecionado');
                
                //Pega elemento personagem grande para adicionar e trocas as informações nele.

                trocaImagemPersonagem(personagem);
                

                //Altera o nome do personagem

                alterarNomeDoPersonagem(personagem);

                //Altera a descrição do personagem

                trocaDescricaoPersonagem(personagem);
            })
        }
)

function trocaDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function removeClassSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function trocaImagemPersonagem(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

