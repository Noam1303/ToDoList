import { useState } from 'react'
let idCounter = 0;

const Input = ({todo, setTodo}) => {


    const [input, setInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit = () => {        
        if(input.length > 0) {            
            if(input.length < 70){
                const newTab = [...todo , [idCounter++, input, false]]
                newTab.sort((a, b) => {
                    // Si `a[2]` est `true`, mettez-le après `b`
                    if (a[2] === true && b[2] === false) {console.log(1); return 1;}
                    // Si `b[2]` est `true`, mettez `b` après `a`
                    if (a[2] === false && b[2] === true) {console.log(-1);return -1;} 
                    // Sinon, gardez leur ordre
                    return 0;
                });
                setTodo(newTab)
                setInput("")
            }  
            else {
                alert("Max 70 characters")
            } 
        }
        else {
            alert("Enter character")
        }
    }

    return (
        <div className="input-container">
            <input type="text" value={input || ""} placeholder="New Task" onChange={handleChange}/>
            <input type="submit" value="Add Task" onClick={handleSubmit}/>
        </div>
    )
}

export default Input;