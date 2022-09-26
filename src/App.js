import React from "react";
import Counter from "./Counter";
import Todolist from "./todolist";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newstudent: {
        fristname: "",
        lastname: "",
        dob: "",
        remarks: "",
      },
      students: [],
    };
  }
  addStudents = () => {
    this.setState({
      students: [...this.state.students, this.state.newstudent],
    });
  };
  handleInput = (e) => {
    this.setState({
      newstudent: {
        ...this.state.newstudents,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="betterview">
        <Todolist />
        <Counter gender="Male" step={5} />
        <Counter gender="female" step={10} />
        <hr></hr>
        <label htmlFor="fristname" name="fristname">
          FristName
        </label>
        <input type="text" onKeyUp={this.handleInput} /> <br />
        <br />
        <label htmlFor="lastname" name="lastname">
          LastName
        </label>
        <input type="text" onKeyUp={this.handleInput} />
        <br />
        <br />
        <label htmlFor="dob" name="Dob">
          DOB
        </label>
        <input type="date" onChange={this.handleInput} />
        <br />
        <br />
        <label htmlFor="remarks" name="remarks">
          Remarks
        </label>
        <input type="text" onKeyUp={this.handleInput} />
        <br />
        <br />
        <button onClick={this.addStudents}>Add Students</button>
        <table border="2px solid">
          <thead>
            <th>Frist Nmae</th>
            <th>LastName</th>
            <th>AGE</th>
            <th>DOB</th>
          </thead>
          <tbody>
            {this.state.students.map((s) => {
              return (
                <tr>
                  <td>{s.fristname}</td>
                  <td>{s.lastname}</td>
                  <td>{s.dob}</td>
                  <td>{s.remarks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
