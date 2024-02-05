// useSheetData.js
import { useState, useEffect } from 'react';

const useSheetData = () => {
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
  }, []);

  return { sheetData, loading };
};

export default useSheetData;
