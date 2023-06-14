import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=courage', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'dIYBbmcWP9ypkFaqkR6nUw==qLUYTZI32BXKuCdF',
        },
      });
      const data = await response.json();

      if (response.ok) {
        setQuote(data[0]);
      } else {
        throw new Error(data.message || 'No quote available');
      }
    } catch (error) {
      setError(`Error fetching quote: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (isLoading) {
    return <div className="display-text">Loading...</div>;
  }

  if (error) {
    return <div className="display-text">{error}</div>;
  }

  return (
    <div className="display-text">
      <p className="quote">
        <span>Quote:</span>
        &ldquo;
        {quote.quote}
        &rdquo;
      </p>
      <span className="author">{quote.author}</span>
    </div>
  );
};

export default Quote;
