import React, { useState } from 'react';
import './Style.css';
const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Kumar Satish', class: '10', section: 'A', rollNumber: '001' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    firstName: '', lastName: '', email: '', phoneNumber: '',
    dateOfBirth: '', address: '', class: '', section: '',
    rollNumber: '', guardianName: '', gender: '', bloodGroup: ''
  });
  const [editStudent, setEditStudent] = useState(null);

  const handleAddStudent = (e) => {
    e.preventDefault();
    const student = {
      id: students.length + 1,
      name: `${newStudent.firstName} ${newStudent.lastName}`,
      ...newStudent
    };
    setStudents([...students, student]);
    setIsModalOpen(false);
    setNewStudent({
      firstName: '', lastName: '', email: '', phoneNumber: '',
      dateOfBirth: '', address: '', class: '', section: '',
      rollNumber: '', guardianName: '', gender: '', bloodGroup: ''
    });
  };

  const handleEditStudent = (student) => {
    setEditStudent(student);
    setIsModalOpen(true);
    setNewStudent({
      firstName: student.name.split(' ')[0],
      lastName: student.name.split(' ')[1],
      ...student
    });
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    const updatedStudent = { ...editStudent, ...newStudent, name: `${newStudent.firstName} ${newStudent.lastName}` };
    setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
    setIsModalOpen(false);
    setEditStudent(null);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Add Student
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>
                <button onClick={() => handleEditStudent(student)}>Edit</button>
                <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                <button onClick={() => alert(`Viewing student: ${student.name}`)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div>
          <form onSubmit={editStudent ? handleUpdateStudent : handleAddStudent}>
            {Object.keys(newStudent).map(field => (
              <div key={field}>
                <label>{field}</label>
                <input
                  name={field}
                  value={newStudent[field]}
                  onChange={(e) => setNewStudent({
                    ...newStudent, 
                    [field]: e.target.value
                  })}
                />
              </div>
            ))}
            <button type="submit">{editStudent ? 'Update' : 'Add'}</button>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Students;