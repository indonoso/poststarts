from flask import Flask, request
from text2image_search import Text2ImageSearch, DataBase
# create a Flask instance
app = Flask(__name__)


database = DataBase('metadata.csv', 'vectors.npy')
search_engine = Text2ImageSearch(database.vectors)


@app.route('/search', methods=['POST'])
def search():
    query = request.json['query']
    hits = search_engine.search(query, k=10)
    return database.get_data_for(hits, columns=['title', 'public_url'])


if __name__ == "__main__":
    # for debugging locally
    # app.run(debug=True, host='0.0.0.0',port=5000)

    # for production
    app.run(host='0.0.0.0', port=5000)