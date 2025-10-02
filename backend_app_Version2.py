from flask import Flask, request, jsonify
from utils.ocr_utils import process_receipt

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_receipt():
    file = request.files['receipt']
    image_bytes = file.read()
    info = process_receipt(image_bytes)
    return jsonify(info)

if __name__ == '__main__':
    app.run(debug=True)