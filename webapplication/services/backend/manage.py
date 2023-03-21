from app import app


if __name__ == "__main__":
    # for debugging locally
    app.run(debug=True, host='0.0.0.0',port=5000)

    # for production
    # app.run(host='0.0.0.0', port=5000)
