import { useEffect, useState } from 'react';

const Quotes = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = 'https://api.api-ninjas.com/v1/quotes';
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'X-Api-Key': 'eYPIRhhkNTX2LPyC2m6a6A==psZgcCiykqUJROEl',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {loading ? (
          <>Loading . . .</>
        ) : (
          <>
            {!error ? (
              <>
                <li>{data[0].quote}</li>
                <br />
                <li>
                  ~
                  {data[0].author}
                </li>
                {error}
              </>
            ) : (
              <>Sorry! there was an error loading the quotes</>
            )}
          </>
        )}
      </ul>
    </>
  );
};

export default Quotes;
