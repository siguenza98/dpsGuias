import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({
        todo: '',
        cantidad: ''
    });

    const [todos, setTodos] = useState([
        {todo: 'todo 1', cantidad: '1'},
        {todo: 'todo 2', cantidad: '2'},
        {todo: 'todo 3', cantidad: '3'}
    ]); 

        
    const handleChange = e =>{
        
        setTodo({...todo, [e.target.name] : e.target.value})

    } 
    const handleClick = e => {
        var mensaje ="";
        var datosCorrectos = true;

        if(Object.keys(todo).lenght === 0 || todo.todo.trim() === '' || todo.cantidad.trim() === ''){
            mensaje += "Ningún campo puede estar vacio.\n";
            datosCorrectos = false;
        }

        if(isNaN(Number(todo.cantidad)) || !Number.isInteger(Number(todo.cantidad)) || (Number(todo.cantidad) <= 0)){
            mensaje += "La cantidad debe ser un número entero positivo.\n";
            datosCorrectos = false;
        }
        
        if(datosCorrectos){
            setTodos([...todos, todo])
        }else{
            alert(mensaje);
            return
        } 
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return(
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br/>
                <input type="text" name="todo" onChange={handleChange}/>
                <input type="text" name="cantidad" onChange={handleChange}/>
                <button onClick={handleClick}>agregar</button>
            </form>
            {
                todos.map((value, index) => (<Todo todo = {value.todo} key={index} index={index} deleteTodo={deleteTodo} cantidad = {value.cantidad}/>))

            }
        
             
        </>
    );
}
export default Form