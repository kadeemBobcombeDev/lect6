import os

from flask import Flask, render_template
from nyt import get_article_data
from markupsafe import escape

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def hello_world():
    """ Returns root endpoint HTML """

    keyword_query = 'Biden' # Change it to something you're interested in!
    article_data = get_article_data(keyword_query)

    return render_template(
        "index.html",
        topic=keyword_query,
        headlines=article_data['headlines'],
        snippets=article_data['snippets'],
        dates=article_data['dates'],
        urls=article_data['urls'],
    )
    
@app.route('/search/<user_text>')    
def show_user(user_text):
    #show the user that was input
    user_article=get_article_data(user_text)
    return (
        {
        'userText': user_text,
        'headlines': user_article['headlines'],
        "snippets": user_article['snippets'],
        "dates": user_article['dates'],
        "urls": user_article['urls'],
        }
    )
    
    
    


app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', 8080)),
    debug=True
)
