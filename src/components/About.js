// About.js
import React from "react";

const tradersData = [
  { id: 1, name: "JVipin Soni", expertise: "Equity Trading" },
  { id: 2, name: "Aaheli Tanavar", expertise: "Options Trading" },
  { id: 3, name: "Bob Johnson", expertise: "Forex Trading" },
];

const About = () => {
  return (
    <div>
      <h2>About StockTrade</h2>
      <p>
        StockTrade is a leading financial services company based out of India.
        We specialize in providing comprehensive trading solutions to our
        clients, helping them navigate the complex world of financial markets.
      </p>

      <h3>Our Traders</h3>
      <ul>
        {tradersData.map((trader) => (
          <li key={trader.id}>
            {trader.name} - {trader.expertise}
          </li>
        ))}
      </ul>

      <h3>Contact Us</h3>
      <p>
        If you have any questions or inquiries, feel free to reach out to us at{" "}
        <a href="mailto:info@stocktrade.com">info@stocktrade.com</a>.
      </p>
    </div>
  );
};

export default About;
