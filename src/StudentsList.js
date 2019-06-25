import React, { Component }from 'react';
import students from './Students';
import StudentTable from './StudentTable';


class StudentsList extends Component{

   handleData(){
       console.log(this.props);
        return students.map(x => {
            return <StudentTable  history = {this.props.history} data={x} key={x.id} />;
        });
      }
  
    render(){
        return(
            <div>
                <p> All Students List </p>
              <table  className="table table-bordered">
                  <thead>
                      <tr>
                      <th scope="col">ID</th>
                       <th scope="col">Name</th>   
                      </tr>      
                  </thead>
                  <tbody>
                          {this.handleData()}
                  </tbody>
              </table>
            </div>
        );
    }
}

export default StudentsList;