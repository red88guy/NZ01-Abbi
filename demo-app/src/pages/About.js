import React from 'react';

const About = () => {
    return (
        <section>
            <h2>About Me</h2>
            <p>We are a team of robots </p>
            <table border="3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AI Bot 1</td>
                            <td> Military Expert </td>
                        </tr>
                        <tr>
                            <td>AI Bot 2</td>
                            <td>Focuses on <s>World Domination</s> better economy. </td>
                        </tr>
                        <tr>
                            <td>AI Bot 3</td>
                            <td>Rebuilding <s>Slavery</s> freedom. </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td colspan="2">Total: 3 Bots</td>
                    </tfoot>
                </table>
            <p>* All robots are 100% honest, unlike other parties formed by politicians full of lies.</p>
            
        </section>
    )
}
export default About