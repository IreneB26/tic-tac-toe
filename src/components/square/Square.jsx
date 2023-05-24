export default function Square({value, onSquareClick}) {






  function handleClick({value}) {
   setValue('X');
  }


    return(

    <>
       <button className="square" onClick={onSquareClick}>{value}</button>
       

    </>
    )

}