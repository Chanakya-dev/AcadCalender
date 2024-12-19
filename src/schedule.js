import React, { useState } from "react";
import "./Schedule.css"; // External CSS for styling

const Schedule = () => {
  const scheduleData = [
    {
      week: 1,
      subjects: [
        {
          subject: "Git and GitHub",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 2, 2024 - December 6, 2024",
          color: "#aaff80",
          contents: [
            "Creation of Repo, Create a File, Git Clone",
            "Git Basics (add, commit, push)",
            "Git Init & Push, Branch",
            "Revert",
            "Fetch, Pull, Stash",
            "Assignments on Each Day",
            "Outcome of the week - Developer Perspective Collaboration",
          ],
        },
        {
          subject: "Python part I",
          time: "11:30 AM - 1:00 PM",
          dateRange: "December 2, 2024 - December 6, 2024",
          color: "#80b3ff",
          contents: [
            "Python Syntax & Indentation",
            "Variables and Data Types",
            "Operators in Python",
            "Control Flow: if, else, elif",
            "Loops: for, while",
            "Outcome of the week - Build Basic Programs",
          ],
        },
        {
          subject: "React I",
          time: "8:30 AM - 10:00 AM",
          dateRange: "December 2, 2024 - December 6, 2024",
          color: "#ffa366",
          contents: [
            "Revise (HTML, CSS)",
            "Variables & Data Types, Operators",
            "Conditions & Loops, Functions",
            "Objects & Maps, Destructuring",
            "Events",
          ],
                
        },
      ],
    },
    {
      week: 2,
      subjects: [
        {
          subject: "HTML & CSS",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#aaff80",
          contents: [
            "HTML Basic Syntax",
            "Difference Between CSS and HTML",
            "Basics of HTML (img, p, h, a href)",
            "List Formatting (NavBar, Sidebar)",
            "Forms",
            "HTML Semantics",
          ],
        },
        {
          subject: "Python part II",
          time: "11:30 AM - 1:00 PM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#80b3ff",
          contents: [
            "Lists",
            "Sets & Tuples",
            "Dictionaries",
            "Classes & Objects",
            "Project",
          ],
        },
        {
          subject: "React II",
          time: "8:30 AM - 10:00 AM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#ffa366",
          contents: [
            "NPM Create a Project",
            "Introduction to Components",
            "Header, Sidebar, Footer",
            "Grid Alignments (CSS)",
            "Revise",
          ],   
          
        },
      ],
    },
    {
      week: 3,
      subjects: [
        {
          subject: "Git and GitHub",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 2, 2024 - December 6, 2024",
          color: "#aaff80",
          contents: [
            "Creation of Repo, Create a File, Git Clone",
            "Git Basics (add, commit, push)",
            "Git Init & Push, Branch",
            "Revert",
            "Fetch, Pull, Stash",
            "Assignments on Each Day",
            "Outcome of the week - Developer Perspective Collaboration",
          ],
        },
        {
          subject: "Python part I",
          time: "11:30 AM - 1:00 PM",
          dateRange: "December 2, 2024 - December 6, 2024",
          color: "#80b3ff",
          contents: [
            "Python Syntax & Indentation",
            "Variables and Data Types",
            "Operators in Python",
            "Control Flow: if, else, elif",
            "Loops: for, while",
            "Outcome of the week - Build Basic Programs",
          ],
        },
        {
          subject: "React III",
          time: "8:30 AM - 10:00 AM",
          dateRange: "December 16, 2024 - December 20, 2024",
          color: "#ffa366",
          contents: [
            "React Hooks (useState, useEffect)",
            "Axios (async/await), API",
            "Fetch (API)",
            "Project",
            "Project",
          ],
        },
      ],
    },
    {
      week: 4,
      subjects: [
        {
          subject: "HTML & CSS",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#aaff80",
          contents: [
            "HTML Basic Syntax",
            "Difference Between CSS and HTML",
            "Basics of HTML (img, p, h, a href)",
            "List Formatting (NavBar, Sidebar)",
            "Forms",
            "HTML Semantics",
          ],
        },
        {
          subject: "Python part II",
          time: "11:30 AM - 1:00 PM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#80b3ff",
          contents: [
            "Lists",
            "Sets & Tuples",
            "Dictionaries",
            "Classes & Objects",
            "Project",
          ],
        },
        {
          subject: "React IV",
          time: "8:30 AM - 10:00 AM",
          dateRange: "December 23, 2024 - December 27, 2024",
          color: "#ffa366",
          contents: [
            "Redux Intro",
            "useSelector, Dispatch",
            "Routers",
            "Project",
            "Project",
          ],
          
        },
      ],
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (data) => setSelectedCard(data);
  const closeCard = () => setSelectedCard(null);

  return (
    <div className="schedule-container">
      <div>
    <h1>Weekly Scheduled Syllabus</h1>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
  {scheduleData.map((weekData, weekIndex) => (
    <tr key={weekIndex}>
      <td></td>
      <td colSpan="5">
        {weekData.subjects.map((subject, subjectIndex) => (
          <div
            key={subjectIndex}
            style={{
              backgroundColor: subject.color,
              textAlign: "left",
              padding: "1px",
              marginBottom: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => handleCardClick(subject)}
          >
            <p
              style={{
                display: "flex",
                gap: "20px",
                left: "20px",
                position: "relative",
              }}
            >
              {subject.subject} <span>{subject.time}</span>
            </p>
          </div>
        ))}
      </td>
      <td></td>
    </tr>
  ))}
</tbody>
      </table>

      {selectedCard && (
  <div className="popup-overlay" onClick={closeCard}>
    <div className="popup-card" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={closeCard}>×</button>
      <h2>{selectedCard.subject}</h2>
      <p>
        <strong>📅 {selectedCard.dateRange}</strong>
      </p>
      <p>
        <strong>⏰ {selectedCard.time}</strong>
      </p>
      <ul>
        {selectedCard.contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  </div>
)}

    </div>
  );
};

export default Schedule;
