import React, { useState } from 'react';
import Resultado from './resultado';
import JogarNovamente from './jogarNovamente';

export default function Joguinho({ placar, setPlacar }) {
    const [jogador, setJogador] = useState(null);
    const [computador, setComputador] = useState(null);
    const [resultado, setResultado] = useState('');
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];


    const escolhaComputador = () => {
        const escolha = opcoes[Math.floor(Math.random() * opcoes.length)];
        setComputador(escolha);
        return escolha;
    };

    const verificaResultado = (jogador, computador) => {
        if ((jogador === 'Pedra' && computador === 'Tesoura') || (jogador === 'Papel' && computador === 'Pedra') || (jogador === 'Tesoura' && computador === 'Papel')) {
            setPlacar((prevPlacar) => ({ ...prevPlacar, jogador: prevPlacar.jogador + 1 }));
            setResultado("Ganhou hulhul ^^");
        } else if (jogador === computador) {
            setPlacar((prevPlacar) => ({ ...prevPlacar, empate: prevPlacar.empate + 1 }));
            setResultado('Empatouuuuu :/');
        } else {
            setPlacar((prevPlacar) => ({ ...prevPlacar, computador: prevPlacar.computador + 1 }));
            setResultado('Perdeu pra um robo haha ><');
        }
    };

    const jogar = (escolha) => {
        setJogador(escolha);
        const escolherComputador = escolhaComputador();
        verificaResultado(escolha, escolherComputador);
    };

    const reiniciarJogo = () => {
        setPlacar({ jogador: 0, computador: 0, empate: 0 });
        setJogador(null);
        setComputador(null);
        setResultado('');
    };

    return (
        <section>
            <h1>JOKENPO</h1>
            <div>
                <button onClick={() => jogar('Pedra')}>Pedra</button>
                <button onClick={() => jogar('Papel')}>Papel</button>
                <button onClick={() => jogar('Tesoura')}>Tesoura</button>
            </div>
            {jogador && computador && (<Resultado jogador={jogador} computador={computador} empate={empate} />)}
            <JogarNovamente jogarNovamente={reiniciarJogo} />
        </section>
    );
}