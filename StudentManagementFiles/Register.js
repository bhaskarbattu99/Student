import { useState } from "react"
import Display from "./Display"


const Register = () => {

    const [student, setStudent] = useState({})
    const [studentList, setStudentList] = useState([])

    const changeValue = event => {
        const value = event.target.value
        const name = event.target.name
        setStudent({ ...student, [name]: value })
    }

    const addStudent = event => {
        event.preventDefault();
        setStudentList(studentList => [...studentList, student])
        setStudent({})
    }

    const removeStudent = studentId => {
        let newList =
            studentList.filter(
                student => student.id !== studentId
            )
        setStudentList(newList)
    }

    const updateStudent = studentId => {
        let requiredStudent;
        for (let i = 0; i < studentList.length; i++){
            let student = studentList[i];
            if (student.id === studentId) {
                requiredStudent = student;
                break;
            }
        }
        setStudent(requiredStudent)
    }

    return <>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <form onSubmit={addStudent}>
                    <div>
                        <label htmlFor="id">Id:</label>
                        <input className="form-control" onChange={changeValue} value={student.id || ""} id="id" name="id" placeholder="Enter your ID"/>
                    </div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input className="form-control" onChange={changeValue} value={student.name || ""} id="name" name="name" placeholder="Enter your Name"/>
                    </div>
                    <div>
                        <label htmlFor="batch">Batch:</label>
                        <input className="form-control" onChange={changeValue}  value={student.batch || ""} id="batch" name="batch" placeholder="Enter your Batch"/>
                    </div>
                    <div>
                        <label htmlFor="course">Course:</label>
                        <input className="form-control" onChange={changeValue} value={student.course || ""} id="course" name="course" placeholder="Enter your Course"/>
                    </div><br></br>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        </div><br></br>
        <div className="row">
            <table className="table">
                <thead>
                    <tr className="table-primary text-center">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Course</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* call child component for each student */}
                    {
                        studentList.map(student => <Display key={student.id} student={student} removeStudent={removeStudent} updateStudent={ updateStudent } />)
                    }
                </tbody>
            </table>
        </div>
        
        
    
    </>
}

export default Register