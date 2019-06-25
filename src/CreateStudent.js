import React, { Component }from 'react';
import students from './Students';
import queryString from 'query-string';


class CreateStudent extends Component{
    state ={
        isEdit: true
    }

    componentWillMount(){
        console.log(this.props);
    }
    
    handleSubmit(){
        const data = {
            name:this.getName.value,
            id:this.getid.value
        }
        students.push(data);
        this.getid.value = '';
        this.getName.value = '';
        this.props.history.push('/StudentsList');
      }
    render(){
        return(
            <div>
                <form onSubmit={()=>this.handleSubmit()}>
                <p> CreateStudent </p>
                    <div>
                    <span>ID: </span>
                    <input ref = {(input)=> this.getid = input }></input>
                    </div>
                    <div>
                    <span>Name:</span>
                    <input ref = {(input)=> this.getName = input }></input>
                    </div>
                    {this.state.isEdit ?<button>Create</button> :<button>save</button>}
                </form>
            </div>
        );
    }
}

export default CreateStudent;