from sentence_transformers import SentenceTransformer, util
import numpy as np
import pandas as pd


class Text2ImageSearch:
    def __init__(self, vectors):
        self.vectors_matrix = vectors

        self.sentence_transformer = SentenceTransformer('models/clip-ViT-B-32-multilingual-v1')

    def search(self, query, k=10):
        # First, we encode the query (which can either be an image or a text string)
        query_emb = self.sentence_transformer.encode([query],
                                                     convert_to_tensor=True, show_progress_bar=False)

        hits = util.semantic_search(query_emb, self.vectors_matrix, top_k=k)[0]

        return [h['corpus_id'] for h in hits]


class DataBase:
    def __init__(self, metadata_path, vectors_path):
        self.vectors = np.load(vectors_path)
        self.metadata = pd.read_csv(metadata_path)

    def get_data_for_mmi(self, mmi):
        return self.metadata[self.metadata['MMS ID'] == mmi].to_dict(orient='records')

    def get_vectors_for_mmi(self, mmi):
        return self.vectors[self.metadata[self.metadata['MMS ID'] == mmi]['id']]

    def get_data_for_id(self, id_):
        return self.metadata[self.metadata['id'] == id_].to_dict(orient='records')[0]

    def get_vector_for_id(self, id_):
        return self.vectors[id_]

    def get_data_for(self, ids, columns=('title', 'public_url')):
        return self.metadata[self.metadata['id'].isin(ids)][columns].to_dict(orient='records')

