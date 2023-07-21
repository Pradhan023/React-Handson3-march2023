import React, { Component } from 'react'
import Datapage from './datapage'
import './form.css'
 
class Form extends Component{
    state={
        Name : '',
        Dept : '',
        Rating : '',
        Data : [],
        click : true
    }
    setvalue = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    togglevalue = ()=>{
        const obj = {
            name : this.state.Name,
            dept : this.state.Dept,
            Rating : this.state.Rating
        }
        this.state.Data.push(obj)
        this.setState(
            {
                Data : this.state.Data, 
                Name:"", 
                Dept: " ", 
                Rating : "",
                click : false
            })
    }
    togglefun = ()=>{
        this.setState({click : !this.state.click})
    }


    render(){
        return(
            <>
            {
                this.state.click ?
                <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"  name="Name" value={this.state.Name} onChange={this.setvalue} required/><br/>
                <label htmlFor="dept">Department</label>
                <input type="text" id="dept"  name="Dept" value={this.state.Dept} onChange={this.setvalue} required/><br/>
                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating"  name="Rating" min={1} max={10} value={this.state.Rating} onChange={this.setvalue} required/>

                <div className="btn">
                <button type='button' className='button' onClick={this.togglevalue}>Submit</button>
                </div>
                </form>

            : <Datapage value = {this.state.Data} toggleback = {this.togglefun}/>
            }
            </>
        )
    }
}
export default Form