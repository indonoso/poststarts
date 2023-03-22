from flask import Flask, request, jsonify
from text2image_search import Text2ImageSearch, DataBase
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

database = DataBase('metadata.csv', 'vectors.npy')
search_engine = Text2ImageSearch(database.vectors)


@app.route('/search', methods=['POST'])
def search():
    query = request.json['query']
    hits = search_engine.search(query, k=10)
    return jsonify(database.get_data_for(hits, columns=['title', 'public_url']))

@app.route('/geo_data', methods=['GET'])
def geo_data():
    with open('data_all.json') as f:
        data = json.load(f)

    return jsonify([{'title': d['properties']['main_title'],
                     'position': d['geometry']['coordinates'][::-1],
                     'public_url': "https://kuleuven.limo.libis.be/view/delivery/thumbnail/32KUL_KUL/" + str(d['properties']['ID'])}
                    for d in data["features"][:100]])


if __name__ == "__main__":
    # for debugging locally
    # app.run(debug=True, host='0.0.0.0',port=5000)

    # for production
    app.run(host='0.0.0.0', port=5000)