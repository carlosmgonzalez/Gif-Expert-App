import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return
        // setCategories(categories.concat(onNewCategory));
        // Otra forma de hacerlo es:
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = {event => onAddCategory(event)}
            />

            {
                categories.map( category => {

                    return (

                        <GifGrid 
                            key={category}
                            category={category} 
                        />

                    )
                })
            }
        </>
    );
};