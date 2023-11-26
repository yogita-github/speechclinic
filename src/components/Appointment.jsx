import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Appointment.css";

// Styled components for styling
const FormContainer = styled.div`
  max-width: 400px;
  margin:  auto;
  padding-top:20px;
  
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
`;

// const CaptchaContainer = styled.div`
//   /* Add styles for captcha container */
// `;

const SubmitButtonContainer = styled.div`
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom:20px;

  &:hover {
    background-color: #45a049;
  }
`;

// Main AppointmentForm component
function Appointment({ onAppointmentSubmit }) {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    gender: "",
    childrenAge: "",
    appointmentDate: "",
    appointmentTime: "",
    captcha: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function passed as a prop to handle the form submission
    onAppointmentSubmit(formData);
  };

  // Render the form
  return (
    <>
      <Navbar />
      <div className="appointment_container">
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <StyledLabel>
              Name:
              <StyledInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </StyledLabel>

            <StyledLabel>
              Contact Number:
              <StyledInput
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </StyledLabel>

            <StyledLabel>
              Email:
              <StyledInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </StyledLabel>

            <StyledLabel>
              Gender:
              <StyledSelect
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </StyledSelect>
            </StyledLabel>

            <StyledLabel>
              Children Age:
              <StyledInput
                type="number"
                name="childrenAge"
                value={formData.childrenAge}
                onChange={handleChange}
              />
            </StyledLabel>

            <StyledLabel>
              Appointment Date:
              <StyledInput
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />
            </StyledLabel>

            <StyledLabel>
              Appointment Time:
              <StyledInput
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
              />
            </StyledLabel>

            <SubmitButtonContainer>
              <SubmitButton type="submit">Submit</SubmitButton>
            </SubmitButtonContainer>
          </form>
        </FormContainer>
      </div>
      <Footer />
    </>
  );
  
}

// Export the Appointment component
export default Appointment;
