from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

chatbot = pipeline("text-generation", model="microsoft/BioGPT")

@app.route("/chat", methods=["POST"])
def chat():

    data = request.json
    message = data["message"]

    result = chatbot(message, max_length=100)

    reply = result[0]["generated_text"]

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)
