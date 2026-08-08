import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';

function Download() {
  // replace this with real data from localStorage / API / context
  const [downloads, setDownloads] = useState([
    { id: 1, timestamp: '08-08-2026 10:30 AM' },
    { id: 2, timestamp: '07-08-2026 04:15 PM' },
    { id: 3, timestamp: '05-08-2026 09:00 AM' },
  ]);

  const handleDelete = (id) => {
    setDownloads(downloads.filter((item) => item.id !== id));
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Downloaded Resume Details</h2>
        <Link to={'/resume-details'}>
          <IoMdArrowBack /> Back
        </Link>
      </div>

      <p className="mt-3">
        Total Downloaded resumes from our site is{' '}
        <span className="fw-bolder">{downloads.length}</span>
      </p>

      <div className="row my-2">
        {/* duplicate according to download resume count */}
        {downloads.map((item) => (
          <div className="col-lg-4 mb-3" key={item.id}>
            <div style={{ height: '400px' }} className="shadow p-3 rounded">
              <div className="d-flex justify-content-between align-items-center">
                <h6>Review at : {item.timestamp}</h6>
                <button
                  className="btn text-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrash />
                </button>
              </div>

              <div className="mt-3 text-center">
                <Link to={`/resumes/${item.id}`}>
                  <img
                    className="w-100"
                    height={'300px'}
                    src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg"
                    alt="download cv"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {downloads.length === 0 && (
        <p className="text-center text-muted mt-5">No downloaded resumes yet.</p>
      )}
    </div>
  );
}

export default Download;