import React from 'react';

function StudentCard(props) {
  // Destructuring props for clean variable usage
  const { name, registerNo, department, year, cgpa, attendance, photo } = props;

  // Task 7: Inline Styles via JavaScript Objects
  const nameStyle = { color: '#0056b3', fontWeight: 'bold' };
  const cgpaStyle = { color: '#2e7d32', fontWeight: 'bold' };
  const attendanceStyle = { color: '#e65100', fontWeight: 'bold' };

  // Logic evaluations for Task 6
  const isExamEligible = attendance >= 75;
  const isPlacementEligible = cgpa >= 8.0;

  return (
    <div className="student-card">
      <div className="photo-container">
        <img src={photo} alt={name} className="student-photo" />
      </div>

      <div className="details-container">
        <div className="detail-row">
          <span className="detail-label">Name:</span>
          <span style={nameStyle}>{name}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Register No:</span>
          <span>{registerNo}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Department:</span>
          <span>{department}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Year:</span>
          <span>{year}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">CGPA:</span>
          <span style={cgpaStyle}>{cgpa}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Attendance:</span>
          <span style={attendanceStyle}>{attendance}%</span>
        </div>

        {/* Task 6: Conditional Rendering via Ternary Operator */}
        <div className="detail-row">
          <span className="detail-label">Attendance Status:</span>
          <span className={`status-badge ${isExamEligible ? 'status-eligible' : 'status-ineligible'}`}>
            {isExamEligible ? 'Eligible for Semester Exam' : 'Not Eligible'}
          </span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Placement Status:</span>
          <span className={`status-badge ${isPlacementEligible ? 'status-eligible' : 'status-warning'}`}>
            {isPlacementEligible ? 'Eligible' : 'Need Improvement'}
          </span>
        </div>

        {/* Example of React Fragment and Logical && Operator */}
        {cgpa >= 9.0 && (
          <React.Fragment>
            <div className="detail-row" style={{ marginTop: '0.5rem' }}>
              <span className="detail-label">Honors:</span>
              <span style={{ color: '#6b21a8', fontWeight: 'bold' }}>Dean's List Candidate</span>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default StudentCard;