import profilePic from './assets/parejaPfp.jpg'

function Student(){
    
    const students = [{id: 1, name: "Matthew Daniel V. Pareja", email: "mathdaniel2002@gmail.com"}, 
                {id: 2, name: "Matthew Daniel V. Pareja", email: "mathdaniel2002@gmail.com"},
                {id: 3, name: "Matthew Daniel V. Pareja", email: "mathdaniel2002@gmail.com"},
                {id: 4, name: "Matthew Daniel V. Pareja", email: "mathdaniel2002@gmail.com"},
                {id: 5, name: "Matthew Daniel V. Pareja", email: "mathdaniel2002@gmail.com"},];

const listOfStudent = students.map(students => <li key={students.id}> 
                                    {students.name} &nbsp; {students.email}</li>);
                                    
return (
    <div className="student-list">
      {students.map((student) => (
        <div className="card" key={student.id}>
          <img src={profilePic} alt="Profile Picture" />
          <p>{student.name}</p>
          <p>{student.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Student