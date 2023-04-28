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
            {data.map((item) => (!error ? (
              <>
                <div key={null}>
                  <li>{item.quote}</li>
                  <br />
                  <li>
                    ~
                    {item.author}
                  </li>
                  {error}
                </div>
              </>
            ) : (
              <>Sorry! there was an error loading the quotes</>
            )))}
          </>
        )}
      </ul>
    </>
  );
};

export default Quotes;
