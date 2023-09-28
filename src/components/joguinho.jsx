import React, { useState } from 'react';

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
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-8">Jogo de Pedra, Papel e Tesoura</h1>

            <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2" onClick={() => jogar('pedra')}>Pedra</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2" onClick={() => jogar('papel')}>Papel</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-2" onClick={() => jogar('tesoura')}>Tesoura</button>
            </div>

            {jogador && (
                <div className="mt-8">
                    <p className="text-lg">Você escolheu: {jogador}</p>
                    <p className="text-lg">Computador escolheu: {computador}</p>
                    <p className="text-xl font-semibold mt-4">Resultado: {resultado}</p>
                </div>
            )}
        </div>
    );
}