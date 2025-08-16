import { createStore ,bindActionCreators} from "redux";

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


// action objects -> action methods (action creator)
const addTodo = (todoText) => ({type : add_Todo , payload:{todoText}});
const deleteTodo = (id) => ({type:delete_Todo ,payload:{todoId:id}})

const {dispatch,subscribe,getState,replaceReducer} = createStore(todoReducer,[]);
subscribe(() =>console.log(getState()));



const actions = bindActionCreators({addTodo,deleteTodo},dispatch);
//(bindActionCreators) return an obj we can destructure it also

actions.addTodo('todo 1');

actions.addTodo('todo 2');

actions.deleteTodo(1);



// destructing the obj


const {addTodo:addTodo1,deleteTodo:deleteTodo1} = bindActionCreators({addTodo,deleteTodo},dispatch);
//(bindActionCreators) return an obj we can destructure it also

addTodo1('todo 1');

addTodo1('todo 2');

deleteTodo1(1);





