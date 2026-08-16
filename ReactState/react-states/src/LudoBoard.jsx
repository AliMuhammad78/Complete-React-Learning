
import { useState } from 'react';

export default function LudoBoard() {
    let[moves , setMoves ] = useState({blue : 0, red : 0, green : 0, yellow : 0});
    let[arrState , setArrState ] = useState("No moves yet ");

   let updateBlue = () => {
        // setMoves((prevMoves) => ({
            // ...prevMoves,
            // blue: prevMoves.blue + 1 
            setArrState((prevArr)=>{
               return [...prevArr , " blue moves"  ];
            });
        // }));
   }

   let updateGreen = () => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            green: prevMoves.green + 1
        }));
   }


   let updateRed = () => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            red: prevMoves.red + 1
        }));
   }

   let updateYellow = () => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            yellow: prevMoves.yellow + 1
        }));
   }

  


  return (
    <div>
         <h2>{arrState}</h2>

       <h3>Ludo Game </h3>
       <p>Blue moves: {moves.blue}</p>
         <button onClick={updateBlue} style={{backgroundColor:'blue'}}>+1</button>
         <p>Green moves: {moves.green}</p>
         <button onClick={updateGreen} style={{backgroundColor:'green'}}>+1</button>
        <p>Red moves: {moves.red}</p>
            <button onClick={updateRed} style={{backgroundColor:'red'}}>+1</button>
        <p>Yellow moves: {moves.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor:'yellow'}}>+1</button>
    </div>
  );
}