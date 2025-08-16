import { createStore } from "redux";

const add_Todo = 'add_Todo';
const delete_Todo  = 'delete_Todo';
const update_Todo = 'edit_Todo';


function todoReducer(state,action){
    if(action.type == add_Todo){
        const todoText = action.payload.todoText;
        return[
            ...state,
            {text:todoText , isFinished :false , id : (state.length == 0) ? 1 : state[state.length -1].id+1}
        ]
    }
    else if(action.type == delete_Todo){
        const todoId = action.payload.todoId;
        return state.filter(t => t.id != todoId)    
    }
    else if(action.type == update_Todo){
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        return state.map(t => {
            if(t.id == todo.id){
                t.text=todoText;
            }
            return t;
        })    

    }
    return state;
}
/* 
const func = createStore(todoReducer,[]);
console.log(func);
*/

// action objects -> action methods (action creator)
const addTodo = (todoText) => ({type : add_Todo , payload:{todoText}});
const deleteTodo = (id) => ({type:delete_Todo ,payload:{todoId:id}})

const {dispatch,subscribe,getState,replaceReducer} = createStore(todoReducer,[]);

// dispatch({type : add_Todo , payload : {todoText : 'Todo 1'}});
console.log(getState());

dispatch(addTodo('todo 1'));
console.log(getState());
dispatch(addTodo('todo 2'));
console.log(getState());
dispatch(deleteTodo(1));
console.log(getState());





/* 2nd one :- 

 dispatch({type : add_Todo , payload : {todoText : 'Todo 1'}});
 dispatch({type : delete_Todo , payload : {todoId :  1}});


*/ 

// action can be termed here this :--  {type : add_Todo , payload : {todoText : 'Todo 1'}}


/*
    const addTodo = (todoText) => ({type : add_Todo , payload:{todoText}});
    const deleteTodo = (id) => ({type:delete_Todo ,payload:{todoId:id}})
    
    
    dispatch(addTodo('todo 1'));
    dispatch(deleteTodo(1));

*/ 