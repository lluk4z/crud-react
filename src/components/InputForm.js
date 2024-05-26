import React, { useState } from 'react';

const InputForm = ({ addUser, updateUser, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({ id: '', title: '', body: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Id:
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
      </label>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
      </label>
      <label>
        Body:
        <input type="text" name="body" value={formData.body} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;