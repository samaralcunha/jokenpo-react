import React, { useState } from 'react';

export default Joguinho({ placar, setPlacar }) {
    const [jogador, setJogador] = useState(null);
    const [computador, setComputador] = useState(null);
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];
    const [resultado, setResultado] = useState('');

    const escolhaComputador = () => {
        const escolha = opcoes[Math.floor(Math.random() * opcoes.length)];
        serComputador(escolha);
        return escolha;
    };

    const verificaResultado = (jogador, computador) => {
        if( (jogador === 'Pedra' && computador === 'Tesoura') || (jogador === 'Papel' && computador === 'Pedra') || (jogador === 'Tesoura' && computador ==='Papel') ) {
            setPlacar((prevPlacar) => ({...prevPlacar, jogador: prevPlacar.jogador + 1}));
            setResultado("Ganhou hulhul ^^"); 
        } else if (jogador === computador) {
            setPlacar((prevPlacar) => ({...prevPlacar, empate: prevPlacar.empate + 1}));
            setResultado('Empatouuuuu :/');
        } else {
            setPlacar((prevPlacar) => ({...prevPlacar, computador: prevPlacar.computador + 1}));
            setResultado('Perdeu pra um robo haha ><');
        }
    };

    const jogar = (escolha) => {
        setJogador(escolha);
        const escolherComputador = escolhaComputador();
        verificaResultado(escolha, escolherComputador);
    };

    const reiniciarJogo = () =>{
        setPlacar({jogador: 0, computador: 0, empate: 0});
        setJogador(null);
        setComputador(null);
        setResultado('');
    };

    return (
        
    )


}