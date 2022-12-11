import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 0) return
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={event => onSubmit(event)}>

            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)} 
            />

        </form>
    );
};




// if (event.code !== "Enter" ){

//     busqueda = busqueda + event.key
//     console.log(busqueda)

// } else if (event.code === "Enter") {
//     return busqueda
// }