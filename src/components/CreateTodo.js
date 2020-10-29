import React, { useState } from 'react'

function CreateTodo() {

    //all hooks state
    const [desc,setDesc] = useState('');
    const [responsible,setResponsible] = useState('');
    const [priority,setPriority] = useState('');
    const [completed,setCompleted] = useState(false);
    
    //all methods
    const handleDescription = (e)=>{
        setDesc(e.target.value);
    }
    const handleResponsible = (e)=>{
        setResponsible(e.target.value);
    }
    const handlePriority = (e)=>{
        setPriority(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('Form submitted');
        console.log(desc);
        console.log(responsible);
        console.log(priority);
        console.log(completed);
    } 

    return (
        <div className="createTodo">
            <h3>Create New Todo</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={desc}
                                onChange={handleDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={responsible}
                                onChange={handleResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    // checked={this.state.todo_priority==='Low'} 
                                    onChange={handlePriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    // checked={this.state.todo_priority==='Medium'} 
                                    onChange={handlePriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High"
                                    onChange={handlePriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
        </div>
    )
}

export default CreateTodo
