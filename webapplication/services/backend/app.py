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
    hits = search_engine.search(query, k=12)
    return jsonify(database.get_data_for(hits, columns=['title', 'public_url']))


@app.route('/geo_data', methods=['GET'])
def geo_data():
    return jsonify(database.metadata[~database.metadata['Lat'].isna() & ~database.metadata['title'].isna()]
                   [['title', 'Lng', 'Lat', 'public_url']].to_dict(orient='records'))


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
