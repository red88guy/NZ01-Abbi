import React from 'react';
import tank from '../images/tank.jpg'

const Project = () => {
    return (
        <section>
            <h2>Projects 1 </h2>
            <ul>
                <li>Ensure the bots work 24/7 to serve our community</li>
                <li><s>Kill off my rivalries</s> I mean... Stay competitive</li>
            </ul>
            <img id="tank" src={tank} alt="WORLD DOMINATION!" />

        <h2>Projects 2 </h2>
        <ol>
            <li><s>Kill Kill Kill ! </s></li>
            <li>Make New Zealand Great Again !</li>
        </ol>

            <img id="tank" src={tank} alt="WORLD DOMINATION!" />

        </section>

    )
}
export default Project;