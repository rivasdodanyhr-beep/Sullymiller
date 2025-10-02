# Sullymiller Repository

This repository is initialized for future development.

## Receipt Scanner Website

A full-stack project to scan and process receipts using Tesseract OCR.

### Structure

- `frontend/`: React application for receipt upload and display.
- `backend/`: Flask server for OCR processing.

### Usage

1. Start the backend:
    ```bash
    cd backend
    pip install -r requirements.txt
    python app.py
    ```

2. Start the frontend:
    ```bash
    cd frontend
    npm install
    npm start
    ```

3. Visit [http://localhost:3000](http://localhost:3000) and upload a receipt image!

### Features

- Upload receipt images
- Image preprocessing for OCR accuracy
- Extract and parse receipt details
