import { useState } from "react";
import "./acordion.css";
import { useEffect } from "react";

function Info() {
  const [quotes, setQuotes] = useState([]);
  const [accordion, setAccordion] = useState(null);

  const accordionToggle = (length) => {
    setAccordion(accordion === length ? null : length);
  };

  async function FetchQuotes() {
    try {
      const quotes = await fetch("https://dummyjson.com/quotes");
      const res = await quotes.json();
      setQuotes(res.quotes.slice(0, 5));
    } catch (error) {}
  }

  useEffect(() => {
    FetchQuotes();
  }, []);

  return (
    <>
      <div className="second-side">
        <div className="Header">
          <h1 className="faq">FAQ</h1>
        </div>
        <div className="quotes">
          {quotes.length > 0 &&
            quotes.map((quote, length) => (
              <div className="first" key={length}>
                <p onClick={() => accordionToggle(length)} className="author">
                  {quote.author}
                  <span
                    className={`material-symbols-outlined ${
                      accordion === length ? "rotate" : ""
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </p>
                {accordion === length && <span>{quote.quote}</span>}
                <div className="line"></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Info;
