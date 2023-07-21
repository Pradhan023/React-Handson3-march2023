import React, { Component } from 'react'
import './datapage.css'

class Datapage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <div className="datacontainer">
                {
                    this.props.value.map((item) =>{
                        return(
                            <span>Name:{item.name} | Dept:{item.dept} | Rating:{item.rating}</span>
                        )
                    })
                }
            </div>
            <div className='goback'>
                <button className='back' onClick={this.props.toggleback}>Go Back</button>
            </div>
            </>
        )
    }
}
export default Datapage