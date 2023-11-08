


const Display = props => {
    return <>
        <tr className="text-center">
            <td>{ props.student.id }</td>
            <td>{ props.student.name }</td>
            <td>{ props.student.batch}</td>
            <td>{props.student.course}</td>
            <td>
                <button onClick={() => {
                    props.updateStudent(props.student.id)
                }} className="btn btn-info">Edit</button>
                <button onClick={() => {
                    props.removeStudent(props.student.id)
                }} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    </>
}

export default Display