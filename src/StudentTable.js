import React, { Component }from 'react';
import students from './Students';

class StudentTable extends Component{

    editData(id){
       this.props.history.push('/CreateStudent/'+id);   
    }

    delete(id) {
        let index = students.findIndex(x=> x.id === id);
        students.splice(index,1);
        console.log(students);
        
    }
    render(){
        return(
            <tr>
            <td>
              {this.props.data.id}
            </td>
            <td>
              {this.props.data.name}
            </td>
            <td>
             <button onClick={()=>this.editData(this.props.data.id)}>Edit</button>
            </td>
            <td>
                <button onClick={()=>this.delete(this.props.data.id)}>Delete</button>
              </td>
          </tr>
        );
    }
}

export default StudentTable;