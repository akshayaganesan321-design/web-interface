import React from 'react';

function SubjectList() {
  // Task 4: Store subjects in an array
  const subjects = ["React", "Java", "Python", "SQL", "DBMS"];

  return (
    <div className="subject-card">
      <h3>Enrolled Subjects</h3>
      <ul className="subject-list">
        {/* Mapping array elements to JSX list items */}
        {subjects.map((subject, index) => (
          <li key={index} className="subject-item">
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;