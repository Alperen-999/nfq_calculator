import React from "react"

const Button = ({handleButtonClick}) => {

    //Event, welches den Wert des jeweiligen Buttons nimmt und in die Konstante buttonValue speichert
    //dieser Wert wird dann als Parameter in der handleButtonClick-Funktion ausgeführt
    const handleClick = (event) => {
        const buttonValue = event.target.innerText;
        handleButtonClick(buttonValue);
    };

    return (
        <div>
            <div className="calculator-button-row">
                <button className="orange-btn" onClick={handleClick}>C</button>
                <button className="orange-btn" onClick={handleClick}></button>
                <button className="orange-btn" onClick={handleClick}></button>
                <button className="orange-btn" onClick={handleClick}>/</button>
            </div>
            <div className="calculator-button-row">
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button className="orange-btn" onClick={handleClick}>*</button>
            </div>
            <div className="calculator-button-row">
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
                <button onClick={handleClick}>6</button>
                <button className="orange-btn" onClick={handleClick}>-</button>
            </div>
            <div className="calculator-button-row">
                <button onClick={handleClick}>7</button>
                <button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button className="orange-btn" onClick={handleClick}></button>
            </div>
            <div className="calculator-button-row">
                <button onClick={handleClick}>0</button>
                <button onClick={handleClick}>.</button>
                <button className="red-btn" onClick={handleClick}>=</button>
                <button className="orange-btn" onClick={handleClick}>+</button>
            </div>
        </div>
    )
}

export default Button