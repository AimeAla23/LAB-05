import { useState } from "react";

export const Button = (props) => {
    const handlerButton = () => {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        alert("Valor aleatorio: " + randomValue);
    };
    return(
        <div>
            <button
                onClick={handlerButton}
                style={
                    {
                        marginRight: "20px",
                        backgroundColor: "pink",
                        color: "white",
                        border: "2px solid pink",
                        borderRadius: "5px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        outline: "none",
                        textDecoration: "none",
                        display: "inline-block",
                        textAlign: "center",
                }}
            >
                Generar
            </button>
        </div>
    );
};
/*
export const Button = props => {
    const { text } = props;
    const[count, setCount] = useState(0);

    function handlerButton(){
        setCount(count + 5);
    }
    return (
        <button onClick={ handlerButton }>
            { count }
        </button>
    );
}*/

/*
export const Button = () => {
    const[count, setCount] = useState(0);

    function handlerButton(){
        setCount(count + 1);
    }
    return (
        <button onClick={ handlerButton }>
            { count }
        </button>
    );
}*/