import React, { useState } from 'react';

// Options Arrays
const genderOptions = [
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' },
  { id: 'others', label: 'Others' }
];

const hobbyOptions = [
  { id: 'music', label: 'Music' },
  { id: 'movies', label: 'Movies' },
  { id: 'models', label: 'Plastic Model' }
];

const roleOptions = [
  { id: 'staff', label: 'General staff' },
  { id: 'dev', label: 'Developer' },
  { id: 'sa', label: 'System Analyst' }
];

function RegisterSubmit() {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: roleOptions[0].label
  });

  const [hobbies, setHobbies] = useState([]);

  // 2. State for View Switching (Form vs Result)
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Handlers ---

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;
    if (!isChecked) {
      setHobbies(prev => prev.filter(item => item !== targetValue));
    } else {
      setHobbies(prev => [...prev, targetValue]);
    }
  };

  // Switch to "Submitted" view
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    setIsSubmitted(true);
  };

  // Switch back to "Form" view
  const handleBack = () => {
    setIsSubmitted(false);
  };

  // --- Render ---
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '500px' }}>
      <h2>Registration with Submit</h2>
      
      {/* TERNARY OPERATOR: Check if submitted */}
      { !isSubmitted ? (
        
        /* === VIEW 1: THE FORM === */
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          {/* Username */}
          <label>Username: <input type="text" name="username" value={formData.username} onChange={handleInputChange} required /></label>
          
          {/* Names */}
          <label>Firstname: <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} /></label>
          <label>Lastname: <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} /></label>

          {/* Gender */}
          <div>
            <span>Gender: </span>
            {genderOptions.map((opt) => (
              <label key={opt.id} style={{ marginRight: '10px' }}>
                <input 
                  type="radio" 
                  name="gender" 
                  value={opt.label} 
                  onChange={handleInputChange} 
                  checked={formData.gender === opt.label}
                />
                {opt.label}
              </label>
            ))}
          </div>

          {/* Hobbies */}
          <div>
            <span>Hobbies: </span>
            {hobbyOptions.map((hobby) => (
              <label key={hobby.id} style={{ marginRight: '10px' }}>
                <input
                  type="checkbox"
                  value={hobby.label}
                  onChange={onHobbiesToggle}
                  checked={hobbies.includes(hobby.label)}
                />
                {hobby.label}
              </label>
            ))}
          </div>

          {/* Role */}
          <label>
            Role:
            <select name="role" value={formData.role} onChange={handleInputChange}>
              {roleOptions.map((role) => (
                <option key={role.id} value={role.label}>{role.label}</option>
              ))}
            </select>
          </label>

          {/* SUBMIT BUTTON */}
          <button type="submit" style={{ padding: '10px', marginTop: '10px', backgroundColor: '#4CAF50', color: 'white', border:'none' }}>
            Submit Data
          </button>
        </form>

      ) : (

        /* === VIEW 2: THE SUMMARY === */
        <div style={{ backgroundColor: '#e8f4f8', padding: '20px', borderRadius: '8px' }}>
          <h3>Submission Successful</h3>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Name:</strong> {formData.firstname} {formData.lastname}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
          <p><strong>Role:</strong> {formData.role}</p>

          {/* BACK BUTTON */}
          <button onClick={handleBack} style={{ padding: '10px', marginTop: '15px' }}>
            Back to Form
          </button>
        </div>

      )}
    </div>
  );
}

export default RegisterSubmit;