import React, { useState } from 'react';

function ReceiptUpload({ setResult }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('receipt', image);

    const res = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Scan Receipt</button>
    </form>
  );
}

export default ReceiptUpload;