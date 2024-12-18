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
          subject: "React Fundamentals",
          time: "2:00 PM - 3:30 PM",
          dateRange: "December 2, 2024 - December 6, 2024",
          color: "#ffa366",
          contents: [
            "React Introduction",
            "JSX Syntax and Basics",
            "Components and Props",
            "State Management Basics",
            "Creating a Simple React Application",
            "Outcome of the week - Build a React UI Component",
          ],
        },
      ],
    },
    {
      week: 2,
      subjects: [
        {
          subject: "Advanced Git",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#aaff80",
          contents: [
            "Merge Conflicts",
            "Rebasing and Squashing",
            "Tagging Commits",
            "Working with Remote Repositories",
            "Git Workflows",
            "Assignments for Practice",
            "Outcome - Advanced Collaboration Techniques",
          ],
        },
        {
          subject: "Python OOPs",
          time: "11:30 AM - 1:00 PM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#80b3ff",
          contents: [
            "Classes and Objects",
            "Inheritance",
            "Polymorphism",
            "Encapsulation",
            "Static & Instance Methods",
            "Outcome of the week - Build Object-Oriented Programs",
          ],
        },
        {
          subject: "React Routing",
          time: "2:00 PM - 3:30 PM",
          dateRange: "December 9, 2024 - December 13, 2024",
          color: "#ffa366",
          contents: [
            "React Router Introduction",
            "Setting Up Routes",
            "Nested Routes",
            "Dynamic Routes and Parameters",
            "Redirects and Navigation",
            "Outcome - Build a Multi-Page React App",
          ],
        },
      ],
    },
    {
      week: 3,
      subjects: [
        {
          subject: "Git Workflows",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 16, 2024 - December 20, 2024",
          color: "#aaff80",
          contents: [
            "Forking and Pull Requests",
            "Working in Teams",
            "CI/CD Pipelines Overview",
            "Git Hooks",
            "Outcome - Understand Deployment Workflows",
          ],
        },
        {
          subject: "Python Libraries",
          time: "11:30 AM - 1:00 PM",
          dateRange: "December 16, 2024 - December 20, 2024",
          color: "#80b3ff",
          contents: [
            "Numpy Basics",
            "Pandas for Data Manipulation",
            "Matplotlib for Visualization",
            "Exploring the Standard Library",
            "Outcome - Analyze Data with Python Libraries",
          ],
        },
        {
          subject: "React State Management",
          time: "2:00 PM - 3:30 PM",
          dateRange: "December 16, 2024 - December 20, 2024",
          color: "#ffa366",
          contents: [
            "React State and useState Hook",
            "useEffect and Lifecycle",
            "React Context API",
            "Redux Introduction",
            "Outcome - Manage Application State Efficiently",
          ],
        },
      ],
    },
    {
      week: 4,
      subjects: [
        {
          subject: "Git Final Topics",
          time: "10:00 AM - 11:00 AM",
          dateRange: "December 23, 2024 - December 27, 2024",
          color: "#aaff80",
          contents: [
            "Git Bisect",
            "Submodules",
            "Git Large File Storage",
            "Review of All Git Topics",
            "Final Git Assessment",
            "Outcome - Become Git Certified",
          ],
        },
        {
          subject: "Python Projects",
          time: "11:30 AM - 1:00 PM",
          dateRange: "December 23, 2024 - December 27, 2024",
          color: "#80b3ff",
          contents: [
            "Project Setup and Requirements",
            "Building Real-World Applications",
            "Debugging and Testing",
            "Code Optimization",
            "Outcome - Deploy Python Projects",
          ],
        },
        {
          subject: "React Project",
          time: "2:00 PM - 3:30 PM",
          dateRange: "December 23, 2024 - December 27, 2024",
          color: "#ffa366",
          contents: [
            "Project Requirements & Setup",
            "Build Complete React Application",
            "Integrating APIs",
            "Code Review and Refactoring",
            "Outcome - Deploy Final React Project",
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
  {/* Week 1 Schedule */}
  <tr>
    <td></td>
    <td colSpan="5">
      <div
        style={{
          backgroundColor: "#aaff80",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[0].subjects[0])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          Git and GitHub
          <span>10:00 AM - 11:00 AM</span>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#80b3ff",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[0].subjects[1])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          Python Basics
          <span>11:30 AM - 1:00 PM</span>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#ffa366",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[0].subjects[2])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          React Fundamentals
          <span>2:00 PM - 3:30 PM</span>
        </p>
      </div>
    </td>
    <td></td>
  </tr>

  {/* Week 2 Schedule */}
  <tr>
    <td></td>
    <td colSpan="5">
      <div
        style={{
          backgroundColor: "#aaff80",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[1].subjects[0])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          Advanced Git
          <span>10:00 AM - 11:00 AM</span>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#80b3ff",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[1].subjects[1])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          Python OOPs
          <span>11:30 AM - 1:00 PM</span>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#ffa366",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[1].subjects[2])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          React Routing
          <span>2:00 PM - 3:30 PM</span>
        </p>
      </div>
    </td>
    <td></td>
  </tr>

  {/* Week 3 Schedule */}
  <tr>
    <td></td>
    <td colSpan="5">
      <div
        style={{
          backgroundColor: "#aaff80",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[2].subjects[0])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          Git Workflows
          <span>10:00 AM - 11:00 AM</span>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#80b3ff",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[2].subjects[1])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          Python Libraries
          <span>11:30 AM - 1:00 PM</span>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#ffa366",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[2].subjects[2])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          React State Management
          <span>2:00 PM - 3:30 PM</span>
        </p>
      </div>
    </td>
    <td></td>
  </tr>

  {/* Week 4 Schedule */}
  <tr>
    <td></td>
    <td colSpan="5">
      <div
        style={{
          backgroundColor: "#aaff80",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[3].subjects[0])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          Git Final Topics
          <span>10:00 AM - 11:00 AM</span>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#80b3ff",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[3].subjects[1])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          Python Projects
          <span>11:30 AM - 1:00 PM</span>
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#ffa366",
          textAlign: "left",
          padding: "1px",
          marginBottom: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => handleCardClick(scheduleData[3].subjects[2])}
      >
        <p style={{ display: "flex", gap: "20px", left: "20px", position: "relative" }}>
          React Project
          <span>2:00 PM - 3:30 PM</span>
        </p>
      </div>
    </td>
    <td></td>
  </tr>
</tbody>






      </table>

      {selectedCard && (
        <div className="popup-overlay" onClick={closeCard}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
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
            <button onClick={closeCard}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
