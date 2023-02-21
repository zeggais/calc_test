import Button from "./Button";

import "./Keyboard.css"

export default function Keyboard (props) {
    // State

    // Comportement
    const getPressedValue = buttonName => {
        props.onClick(buttonName)
    }

    // Render
    return <div className="component-button-panel">
        <div>
            <Button name="AC" handleClick={getPressedValue}/>
            <Button name="+/-" handleClick={getPressedValue}/>
            <Button name="%" handleClick={getPressedValue}/>
            <Button name="/" handleClick={getPressedValue}/>
        </div>
        <div>
            <Button name="7" handleClick={getPressedValue}/>
            <Button name="8" handleClick={getPressedValue}/>
            <Button name="9" handleClick={getPressedValue}/>
            <Button name="x" handleClick={getPressedValue}/>
        </div>
        <div>
            <Button name="4" handleClick={getPressedValue}/>
            <Button name="5" handleClick={getPressedValue}/>
            <Button name="6" handleClick={getPressedValue}/>
            <Button name="-" handleClick={getPressedValue}/>
        </div>
        <div>
            <Button name="1" handleClick={getPressedValue}/>
            <Button name="2" handleClick={getPressedValue}/>
            <Button name="3" handleClick={getPressedValue}/>
            <Button name="+" handleClick={getPressedValue}/>
        </div>
        <div>
            <Button name="0" handleClick={getPressedValue}/>
            <Button name="," handleClick={getPressedValue}/>
            <Button name="=" handleClick={getPressedValue}/>
        </div>
    </div>
}