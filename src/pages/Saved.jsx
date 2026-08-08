import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Saved() {
  // replace this with real saved resumes from localStorage / API / context
  const [resumes, setResumes] = useState([
    { id: 1, name: 'John Doe', jobRole: 'Frontend Developer' },
    { id: 2, name: 'Jane Smith', jobRole: 'Backend Developer' },
    { id: 3, name: 'Alex Kumar', jobRole: 'Full Stack Developer' },
  ]);

  const handleDelete = (id) => {
    setResumes(resumes.filter((resume) => resume.id !== id));
  };

  return (
    <div className='my-5 container d-flex justify-content-center align-items-center flex-column'>
      <h1>All Saved Resumes</h1>
      <table className="my-5 table table-hover table-striped">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume, index) => (
            <tr key={resume.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/resumes/${resume.id}`}>{resume.name}</Link>
              </td>
              <td>{resume.jobRole}</td>
              <td>
                <button
                  className="btn text-danger"
                  onClick={() => handleDelete(resume.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {resumes.length === 0 && (
        <p className="text-muted">No saved resumes yet.</p>
      )}
    </div>
  );
}

export default Saved;