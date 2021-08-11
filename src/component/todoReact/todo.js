import React,{ useState, useEffect } from 'react';
import "./style.css" ;

const getLocalData = () => {
    const list = localStorage.getItem('myTodoList');
    if(list){
        return JSON.parse(list)
    }
    else {
        return []
    }
}

const Todo = () => {
    const [inputdata, setInputdata] = useState("");
    const [items, setItems] = useState( getLocalData() );
    const [isEdit, setIsEdit] = useState('');
    const [toButton, setToButton] = useState(false);

    const addItems = () => {
        if(!inputdata){
            alert("Pls fill the box!");
        }
        else if (inputdata && toButton) {
            setItems(
                items.map( (currEle) => {
                    if(currEle.id === isEdit ) {
                        return {...currEle, name:inputdata} ;
                    }
                    else{
                        return currEle;
                    }
                } )
            );
            setInputdata("");
            setToButton(false);
            setIsEdit(null);
            }
        else{
            const myInpData = {
                id : new Date().getTime().toString(),
                name : inputdata,
            }
            setItems([...items, myInpData]);
            setInputdata('');
        }
    }

    const deleteItem = (index) => {
        const updatedList = items.filter( (currEle) => {
            return index !== currEle.id;
        });
        setItems(updatedList);
    }

    const removeAll = () => {
        setItems([]);
    }

    // use local storage now
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items));
    }, [items]);

    const editItem = ( index ) => {
        const item_todo_edit = items.find( (currEle) => {
            return currEle.id === index;
        } );
        setInputdata( item_todo_edit.name );
        setIsEdit(index);
        setToButton(true);
    }

    return (
        <>
           <div className='main-div'>
               <div className='child-div'>
                   <figure>
                       <img src="./images/todo.svg" alt="todologo" />
                       <figcaption>Add your list here ✌</figcaption>
                   </figure>
                   <div className='addItems'>
                       <input 
                            type="text" 
                            placeholder='✍ Write your content here!' 
                            className='form-control' 
                            value = { inputdata } 
                            onChange={ (event) => { setInputdata(event.target.value) } }
                            />
                            { toButton ? <i className="far fa-edit add-btn" onClick={ addItems } ></i> 
                            : <i className="fa fa-plus add-btn" onClick={ addItems }></i> }
                   </div>

                   {/* show items added in list */}
                   <div className="showItems">
                   { items.map( (currEle) => {
                       return (
                            <div className='eachItem' key={ currEle.id }>
                                <h3>{ currEle.name }</h3>
                                <div className='todo-btn'>
                                    <i className="far fa-edit add-btn" onClick={ () => { editItem(currEle.id) } }></i>
                                    <i className="far fa-trash-alt add-btn" onClick={ () => { deleteItem(currEle.id) } }></i>
                                </div>
                            </div>
                            )} ) }
                   </div>

                   <div className='showItems'>
                       <button className='btn effect04' data-sm-link-text="Remove All" onClick={ removeAll } ><span>Check List</span></button>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Todo;

