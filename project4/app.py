from flask import Flask, render_template, url_for
import requests

app = Flask(__name__)

@app.route("/")

def index():
    url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=44966082a8b84a2caa89bf017005d99c"
    r = requests.get(url).json()   

    cases = {
        'articles' : r['articles']
    }
    return render_template("index.html", case = cases)

if __name__ == "__main__":
    app.run(debug = True)