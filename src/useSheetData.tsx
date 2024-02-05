// useSheetData.js
import { useState, useEffect } from 'react';

const useSheetData = () => {
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=472peQrSvcDHyTo_ymnQEoPEGT6ixw7zV9h6UvF7kZ11j1a3RZCdTiLXvH-siMPq_GZn44BKl5-cBiEYrvx3PFIvxqh9QPlLm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBAkvgWcg7LwQZPOql4OJcljy48bBNcP1En4O5BPfeI0GMsCqQxr7YLfYGvVnIahjbPceRRD5EJrs3BsraqI5S3sHzTZK5Zxx9z9Jw9Md8uu&lib=MK_dXN5_v-xlGf4jNJ_x1y5jb6L4qkw2X');
        
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
