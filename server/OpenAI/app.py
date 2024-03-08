from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/submit-form": {"origins": "http://localhost:3001"}})

@app.route('/submit-form', methods=['POST'])
def handle_form():
   data = request.json
   print(data)
   return jsonify({"message": "Data received"}), 200    


if __name__ == "__main__":
   app.run(debug=True)
