import "./Button.css" 

export default function Button ({name, handleClick}) {
    // State

    // Comportemen
    const getPressedValue = () => {
        handleClick(name)
    }

    // Render
    return <div>
        <button onClick={getPressedValue}>{name}</button>
    </div>
}