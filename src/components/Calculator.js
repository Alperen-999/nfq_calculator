import React, {useState} from "react"
import Button from "./Button"

const Calculator = () => {

    //Verwendung von UseState, da sich die Zahlen nach jedem Click immer ändern und diese angezeigt werden sollen
    //Anfangswert setzen wir auf einen leeren String
    const [value, setValue] = useState(" ")

    //Funktion um den Bildschirm zu säubern
    //dafür müssen wir die setValue in einem leeren String setzen
    const clearDisplay = () => {
        setValue(" ");
    };

    //Funktion, um die Rechnung auszuführen
    const handleButtonClick = (buttonValue) => {
        //Benutzung der Clear-Funktion, sobald der Button "C" gedrückt wird
        if (buttonValue === "C") {
            clearDisplay();
        }
        //Benutzung der eval-Funktion, um die Rechnung auszuführen
        else if (buttonValue === "=") {
            const result = eval(value);
            setValue(result);
        }
        //Nötig, um andere Buttons zu verwenden, wie unter anderem Operatoren oder Kommazahlen
        else {
            //Operatoren handeln
            setValue((prevValue) => prevValue + buttonValue);
        }
    };

    return (
        <div className="wrapper">
            <div className="calculator">
                <div className="calculator-header">
                    <div className="calculator-display">
                        <h1 className="calculator-number">{value}</h1>
                    </div>
                </div>
                <div className="calculator-body">
                    <Button handleButtonClick={handleButtonClick}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator