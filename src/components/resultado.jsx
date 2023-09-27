import React from 'react';

export default function Resultado({jogador, computador, resultado}) {
    return (
        <section>
            <h1>Resultado: </h1>
            <div>
                <div>
                    <p>Você escolheu: </p>
                    <p>{jogador}</p>
                </div>
                <div>
                    <p>Robo escolheu: </p>
                    <p>{computador}</p>
                </div>
                <div>
                    <h2>{resultado}</h2>
                </div>
            </div>
        </section>
    )
}