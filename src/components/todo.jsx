import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({tabTodo , todo, setTodo, deleteTodo}) => {

    let name = "todo"+todo[0];

    const handleChange = () => {
        const element = document.querySelector("." + name);
        todo[2] = !todo[2]
        if (element.style.textDecoration === "line-through" && todo[2] !== true) {
            element.style.textDecoration = "none";
        } else {
            element.style.textDecoration = "line-through";
            todo[2] = true;
            let sortedTodos = tabTodo.sort((a, b) => {
                // Si `a[2]` est `true`, mettez-le après `b`
                if (a[2] === true && b[2] === false) {console.log(1); return 1;}
                // Si `b[2]` est `true`, mettez `b` après `a`
                if (a[2] === false && b[2] === true) {console.log(-1);return -1;} 
                // Sinon, gardez leur ordre
                return 0;
            });
            setTodo([...sortedTodos]);
        }
    };

    return (
    <div className="todo-container">
        <input type="checkbox" onChange={handleChange} />
        <span className={name}>{todo[1]}</span>
        <button className="delete" onClick={() => deleteTodo(todo[0])}><FontAwesomeIcon icon={faTrash} className='fa-1x'/>
        </button>
    </div>
    );
};

export default ToDo;
