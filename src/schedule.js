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
          subject: "Python Basics",
          time: "11:00 AM - 12:00 PM",
          dateRange: "December 2, 2024 - December 6, 2024",
          color: "#80b3ff",
          contents: [
            "Python Syntax & Indentation",
            "Variables and Data Types",
            "Operators in Python",
            "Control Flow: if, else, elif",
            "Loops: for, while",
            "Outcome of the week - ATM Project",
          ],
        },
        {
          subject: "React I",
          time: "8:30 PM - 10:00 PM",
          dateRange: "December 2, 2024 - December 6, 2024",
          color: "#ffa366",
          contents: [
            "Revise of Html,CSS,JS",
            "Variables & Data Types, Operators",
            "Conditions & Loops, Functions",
            "Objects & Maps, Destructuring",
            "Events",
            "Outcome of the week - Calculator Project",
          ],
        },
      ],
    },
    {
      week: 2,
      subjects: [
        {
          subject: "Html & CSS",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#aaff80",
          contents: [
            "HTML Basics",
            "Introduction to CSS",
            "CSS Selectors, Styling",
            "HTML Forms, Semantic HTML",
            "CSS Layouts and Positioning (Grid, Flexbox)",
            "Advanced Styling (Animations, Transitions)",
            "Final Project - Personal Portfolio",
          ],
        },
        {
          subject: "Python Part II",
          time: "11:00 AM - 12:00 PM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#80b3ff",
          contents: [
            "Lists",
            "File Handling, Dictionaries",
            "Sets, Tuples",
            "Classes and Objects",
            "Outcome of the week - Inventory Management",
          ],
        },
        {
          subject: "React II",
          time: "8:30 PM - 10:00 PM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#ffa366",
          contents: [
            "NPM Create a Project",
            "Introduction to Components",
            "Header, Sidebar, Footer",
            "Grid Alignments (CSS)",
            "Final Project - To-Do List",
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
          dateRange: "December 16, 2024 - December 20, 2024",
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
          subject: "Python Basics",
          time: "11:00 AM - 12:00 PM",
          dateRange: "December 16, 2024 - December 20, 2024",
          color: "#80b3ff",
          contents: [
            "Python Syntax & Indentation",
            "Variables and Data Types",
            "Operators in Python",
            "Control Flow: if, else, elif",
            "Loops: for, while",
            "Outcome of the week - ATM Project",
          ],
        },
        {
          subject: "React III",
          time: "8:30 PM - 10:00 PM",
          dateRange: "December 16, 2024 - December 20, 2024",
          color: "#ffa366",
          contents: [
            "React Hooks (useState, useEffect)",
            "Axios (async/await), API Integration",
            "Fetch (API)",
            "Final Project - OTT APP",
          ],
        },
      ],
    },
    {
      week: 4,
      subjects: [
        {
          subject: "Html & CSS",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 23, 2024 - December 27, 2024",
          color: "#aaff80",
          contents: [
            "HTML Basics",
            "Introduction to CSS",
            "CSS Selectors, Styling",
            "HTML Forms, Semantic HTML",
            "CSS Layouts and Positioning (Grid, Flexbox)",
            "Advanced Styling (Animations, Transitions)",
            "Final Project - Personal Portfolio",
          ],
        },
        {
          subject: "Python Part II",
          time: "11:00 AM - 12:00 PM",
          dateRange: "December 23, 2024 - December 27, 2024",
          color: "#80b3ff",
          contents: [
            "Project Setup and Requirements",
            "Building Real-World Applications",
            "Debugging and Testing",
            "Code Optimization",
            "Outcome of the week - Inventory Management",
          ],
        },
        {
          subject: "React IV",
          time: "8:30 PM - 10:00 PM",
          dateRange: "December 23, 2024 - December 27, 2024",
          color: "#ffa366",
          contents: [
            "Redux Intro",
            "useSelector, Dispatch",
            "Routers",
            "Final Project - Weather App",
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
          {scheduleData.map((week, index) => (
            <tr key={index}>
              <td></td>
              <td colSpan="5">
                {week.subjects.map((subject, subIndex) => (
                  <div
                    key={subIndex}
                    style={{
                      backgroundColor: subject.color,
                      textAlign: "left",
                      padding: "1px",
                      marginBottom: "8px",
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
                      {subject.subject}
                      <span>{subject.time}</span>
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
            <h2>{selectedCard.subject}</h2>

            <p>
              <strong>⏰ {selectedCard.time}</strong>
            </p>
            <ul>
              {selectedCard.contents.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
            <button onClick={closeCard}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
