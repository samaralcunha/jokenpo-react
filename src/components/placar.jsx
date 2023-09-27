import React from 'react';

export default function Placar({ placar }) {
    return (
        <section>
            <h1>Placar: </h1>
            <div>
                <div>
                    <p>Jogador: </p>
                    <p>{placar.jogador}</p>
                </div>
                <div>
                    <p>Computador: </p>
                    <p>{placar.computador}</p>
                </div>
                <div>
                    <p>Embate: </p>
                    <p>{placar.empate}</p>
                </div>
            </div>
        </section>
    )
}