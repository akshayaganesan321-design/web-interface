import React from 'react';
import Header from './Header.jsx';
import StudentCard from './StudentCard.jsx';
import SubjectList from './SubjectList.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  // Task 5 Data values
  const semester = "VI";
  const year = "III";
  const subjects = ["React", "Java", "Python", "SQL", "DBMS"];

  // Student Object
  const student = {
    name: "Suji",
    registerNo: "101",
    department: "CSE",
    year: "III",
    cgpa: 8.5,
    attendance: 82,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80"
  };

  return (
    <div className="app-wrapper">
      <Header />

      <main className="dashboard-container">
        
        <div className="summary-card">
          <p>Current Semester : <span>{semester}</span></p>
          <p>Current Year : <span>{year}</span></p>
          <p>Total Subjects : <span>{subjects.length}</span></p>
        </div>

  
        <StudentCard
          name={student.name}
          registerNo={student.registerNo}
          department={student.department}
          year={student.year}
          cgpa={student.cgpa}
          attendance={student.attendance}
          photo={student.photo}
        />

        <SubjectList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
