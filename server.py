from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
from recognise_face import run_setup

file = open("./data.json")
data = json.load(file)

app = Flask(__name__)
CORS(app)


@app.route("/api/login", methods=["POST"])
def login():
    json_req = request.get_json()
    response = {
        "authenticated": False,
        "message": ""
    }
    for user in data:
        if user["ID"] == json_req["id"]:

            if user["DOB"] == json_req["dob"]:
                response["authenticated"] = True
                response["message"] = "Authentication Successful!"
            else:
                response["message"] = "Invalid DOB! Try Again"
    if response["message"] == "":
        response["message"] = "Invalid User! Try Again"

    return jsonify(response), 201


@app.route("/api/recognise_face", methods=["POST"])
def recognise():
    json_request = request.get_json()
    response = run_setup()
    return jsonify(response), 201


app.run("127.0.0.1", port=5000)
