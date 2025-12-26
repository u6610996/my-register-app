import React, { useState } from 'react';

// declaring options as Arrays/JSON as requested
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

function Register() {
  // State for simple text/radio/select inputs
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: roleOptions[0].label // Default selection
  });

  // Separate state for Hobbies array
  const [hobbies, setHobbies] = useState([]);

  // Handler for Text, Radio, and Select
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler for Checkboxes (using the logic provided in instructions)
  const onHobbiesToggle = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => {
        return prev.filter((item) => {
          if (item === targetValue) return false;
          else return true;
        });
      });
    } else {
      setHobbies((prev) => {
        return [...prev, targetValue];
      });
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Registration Form</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        
        {/* Username */}
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>

        {/* Firstname */}
        <label>
          Firstname:
          <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} />
        </label>

        {/* Lastname */}
        <label>
          Lastname:
          <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} />
        </label>

        {/* Gender (Radio) */}
        <div>
          <span>Gender: </span>
          {genderOptions.map((option) => (
            <label key={option.id} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name="gender"
                value={option.label}
                onChange={handleInputChange}
              />
              {option.label}
            </label>
          ))}
        </div>

        {/* Hobbies (Checkbox) */}
        <div>
          <span>Hobbies: </span>
          {hobbyOptions.map((hobby) => (
            <label key={hobby.id} style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                value={hobby.label}
                onChange={onHobbiesToggle}
              />
              {hobby.label}
            </label>
          ))}
        </div>

        {/* Apply Role (Dropdown) */}
        <label>
          Apply Role:
          <select name="role" value={formData.role} onChange={handleInputChange}>
            {roleOptions.map((role) => (
              <option key={role.id} value={role.label}>
                {role.label}
              </option>
            ))}
          </select>
        </label>
      </form>

      <hr />

      {/* Reflection Section (Lower part of page) */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', marginTop: '20px' }}>
        <h3>Submitted Data Reflection:</h3>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Full Name:</strong> {formData.firstname} {formData.lastname}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
        <p><strong>Role:</strong> {formData.role}</p>
      </div>
    </div>
  );
}

export default Register;