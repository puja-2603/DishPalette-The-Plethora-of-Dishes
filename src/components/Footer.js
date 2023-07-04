import React from 'react';
import './css/footer.css'

const quotes = [
  "The only thing that will make you happy is being happy with who you are.",
  "Cooking is like love. It should be entered into with abandon or not at all.",
  "In the kitchen, we dance!",
  "Life is uncertain. Eat dessert first.",
  "Good food is the foundation of genuine happiness.",
];

const Footer = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer className="footer">
      <div className="container">
        
       
        <p className="footer__quote">"{randomQuote}"</p>
        <p className="footer__text">© 2023 RecipeApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
