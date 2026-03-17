import React from 'react';

const About = () => {
  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>About Us</h2>
        <p style={styles.text}>
          Welcome to our platform! We are dedicated to providing the best 
          experience using modern web technologies like React and CSS.
        </p>
        <button style={styles.button}>Learn More</button>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 20px',
    backgroundColor: '#f0f2f5', // Light grey background to make the card pop
  },
  card: {
    maxWidth: '600px',
    padding: '30px',
    borderRadius: '15px',
    background: 'white',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
    borderTop: '5px solid #a777e3', // Matches your header purple
  },
  title: {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '15px',
  },
  text: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: '1.1rem',
  },
  button: {
    marginTop: '20px',
    padding: '10px 25px',
    border: 'none',
    borderRadius: '25px',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default About;