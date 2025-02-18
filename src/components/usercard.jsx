// write the component code here
// usercard.jsx
import React from 'react';

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://farm3.static.flickr.com/2696/4518893079_beb3d7bed3.jpg"; // Placeholder image URL
  const name = "Buffy";
  const email = "BuffyBoy@example.com";
  const phoneNumber = "+1 234 567 890";
  const address = "123 Main St, Springfield, IL, USA";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.profilePhoto} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}><strong>Email:</strong> {email}</p>
      <p style={styles.detail}><strong>Phone:</strong> {phoneNumber}</p>
      <p style={styles.detail}><strong>Address:</strong> {address}</p>
    </div>
  );
};

// Styles for the component
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  profilePhoto: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  name: {
    fontSize: '24px',
    margin: '10px 0',
    color: '#333',
  },
  detail: {
    fontSize: '14px',
    margin: '5px 0',
    color: '#666',
  },
};

export default Usercard;