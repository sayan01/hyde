from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/upload', methods=['GET', 'POST'])
@cross_origin()
def upload():
    if request.method == 'GET':
        return 'send a POST request here for mock image url'
    else:
        return jsonify(
            {
                "url": "https://www.picpedia.org/highway-signs/images/example.jpg"
            }
        )

if __name__ == '__main__':
    app.run(debug=True)
