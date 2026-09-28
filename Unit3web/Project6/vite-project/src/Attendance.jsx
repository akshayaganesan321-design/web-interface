import { useState } from "react";
import "./Attendance.css";

function Attendance() {

  const [students] = useState([
    { id: 1, name: "Akshaya", present: true },
    { id: 2, name: "adlin", present: false },
    { id: 3, name: "shivani", present: true },
    { id: 4, name: "pivisha", present: false },
    { id: 5, name: "atchaya", present: true },
    { id: 6, name: "priya", present: true },
    { id: 7, name: "dharshini", present: false },
    { id: 8, name: "bhavana", present: true },
    { id: 9, name: "jayagurunathan", present: false },
    { id: 10, name: "sakthi vel", present: true },
    { id: 11, name: "Shankar", present: true },
    { id: 12, name: "jebislin", present: false },
    { id: 13, name: "abinesh", present: true },
    { id: 14, name: "Nithya", present: true },
    { id: 15, name: "Surya", present: false },
    { id: 16, name: "Kalai Arasi", present: true },
    { id: 17, name: "Sakthi", present: false },
    { id: 18, name: "Nivetha", present: true },
    { id: 19, name: "Booja", present: true },
    { id: 20, name: "Hanumitha", present: false }
  ]);

  let presentCount = 0;
  let absentCount = 0;

  students.forEach((s) => {
    if (s.present) presentCount++;
    else absentCount++;
  });

  return (
    <div className="container">
      <h2>Attendance Tracker</h2>

      {students.map((s) => (
        <div className="row" key={s.id}>
          <span>{s.name}</span>
          <span className={s.present ? "present" : "absent"}>
            {s.present ? "Present" : "Absent"}
          </span>
        </div>
      ))}

      <hr />

      <h3>
        Present: {presentCount} | Absent: {absentCount}
      </h3>
    </div>
  );
}

export default Attendance;