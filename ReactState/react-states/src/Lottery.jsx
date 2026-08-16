import { useState } from 'react';

export default function Lottery() { 
    const [numbers, setNumbers] = useState([]);
    const [message, setMessage] = useState("");

    function randomNum() {
        let n1 = Math.floor(Math.random() * 10);
        let n2 = Math.floor(Math.random() * 10);
        let n3 = Math.floor(Math.random() * 10);

        let total = n1 + n2 + n3;

        return { n1, n2, n3, total };
    }

    function pickWinner() {
        const { n1, n2, n3, total } = randomNum();
        
        setNumbers([n1, n2, n3]); 
       
        if (total === 15) {
            setMessage(`🎉 You win! Sum = ${total}`);
        } else {
            setMessage(`❌ Try Again. Sum = ${total}`);
        }
    }

    return (
        <div>
            <h2>Lottery Game</h2>
            <h3>Numbers: {numbers.length > 0 ? numbers.join(" , ") : "--"}</h3>
            <h3>{message}</h3>

            <button onClick={pickWinner}>Try your Luck</button>
        </div>
    );
}
