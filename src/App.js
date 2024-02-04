import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=1mgT5WD96lGqyQV9yFINigBCFJQ5l8GohPs6cyaYqjZW4Kv0sKqlBg7SRf2Y27YkrPk9OvnScAmUp2OsRSzNmYQVFkT8LK96m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJFCQVaNSbnFFCz3_Ivvr-CfkxvNCrkfsW02PWNGyqT_uutU28fCBnwCpcLdYpQ_w1d8uktgb8u5LjcZ8Mk1sHqaYVq0CeUyhNz9Jw9Md8uu&lib=MK_dXN5_v-xlGf4jNJ_x1y5jb6L4qkw2X');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSheetData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div className="app-container">
      <h1>Data from Google Sheet</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="data-list">
          {sheetData.map((row, index) => (
            <li key={index} className="data-item">
              {Object.entries(row).map(([key, value]) => (
                <div key={key} className="data-item-field">
                  <span className="field-key">{key}:</span> {value}
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
