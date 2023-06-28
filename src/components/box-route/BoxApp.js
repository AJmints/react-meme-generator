import React from "react";
import boxes from "../../data/boxes";
import Box from "../box-example/Box";

export default function BoxApp(props) {


  const [squares, setSqares] = React.useState(boxes)

  function toggle(id) {
    setSqares(prevSquares => {

      /* imperative way of updating boolean for each box */
      /* imperative way of updating boolean for each box */
      // const newSquares = []

      // for (let i =0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i]
      //   if (currentSquare.id === id) {
      //     const updatedSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on
      //     }
      //     newSquares.push(updatedSquare)
      //   } else {
      //     newSquares.push(currentSquare)
      //   }
      // }

      // return newSquares

      /* Declarative way of updating boolean for each box */
      /* Declarative way of updating boolean for each box */
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElements = squares.map(square => (
      <Box 
        key={square.id} 
        on={square.on}
        toggle={() => toggle(square.id)} //defining function this way is considered closure, granting each item its own function
      />
  ))

  return (
    <>
        {squareElements}
    </>
  )
}