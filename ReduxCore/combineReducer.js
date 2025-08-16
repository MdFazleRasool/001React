import { createStore ,bindActionCreators,combineReducers} from "redux";

const add_Todo = 'add_Todo';
const delete_Todo  = 'delete_Todo';
const update_Todo = 'edit_Todo';
const add_User = 'add_user'

function todoReducer(state=[],action){
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


function userReducer(state=[],action){
    if(action.type == add_User){
        const userName = action.payload.userName;
        return[
            ...state,
            {name:userName  , id : (state.length == 0) ? 1 : state[state.length -1].id+1}
        ]
    }
    return state;
}

const addTodo = (todoText) => ({type : add_Todo , payload:{todoText}});
const deleteTodo = (id) => ({type:delete_Todo ,payload:{todoId:id}});

const addUser = (name) => ({type:add_User , payload:{userName:name}});


const reducer = combineReducers({todo:todoReducer , user:userReducer})



const {dispatch,subscribe,getState,replaceReducer} = createStore(reducer);
subscribe(()=>console.log(getState()));

const actions = bindActionCreators({addTodo,deleteTodo,addUser},dispatch);

actions.addTodo('todo 1');
actions.addUser('fazle 1');
actions.addTodo('todo 2');

actions.deleteTodo(1);









