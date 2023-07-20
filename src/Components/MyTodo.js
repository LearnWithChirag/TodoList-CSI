import React, { useState } from "react";
import '../CSS/MyTodo.css';


const MyTodo = () => {
    const [inputData , setInputData] = useState('');
    const [list , setItems] = useState([]);
    const addList =() =>{
        if(!inputData){
            alert('You cannot add empty data')
        }else{
            setItems([...list,inputData]);
            setInputData('')
        }
    }

    const deleteList = (id) =>{
        const updateList = list.filter((list , ind) =>{
            return ind !== id;
        })
        setItems(updateList);
    }

    const removeAll =() =>{
        setItems([]);
    }
    return(
        <>
        <div className="mainContainer">
            <div className="childContainer">
                
                {/*    <img src={logo} alt="logo" /> */}
                    <h1>My ToDo List</h1>
                

                <div className="addList">
                    <input type="text" placeholder="Add Your ToDo" value={inputData} className="todoInput" onChange={(e) => setInputData(e.target.value)} />
                    <input type="button" className="todoBtn" value={'Add'}  onClick={addList} />

                </div>

                <div className="showList">
                    {
                        list.map((list ,ind) => {
                            return(
                                <div className="eachList">
                                    <h3>{list}</h3>
                                    <h4 onClick={ () => deleteList(ind)} title="Delete List">x</h4>
                                </div>

                            )
                        })
                    }
                </div>


                <div className="remove-All-Btn">
                    
                    <input type="button" value="Remove All" onClick={removeAll} />                                                                    
                </div>
            </div>
        </div>
        
        </>
    )
}

export default MyTodo;