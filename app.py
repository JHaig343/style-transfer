import json
import os
from flask import Flask
from flask import send_file
from flask import render_template
from flask import request
from arbitrarystyle import draw_image_stylized
app = Flask(__name__)


@app.route('/', methods=['GET'])
def send_homepage():
    return render_template('index.html')


@app.route('/test', methods=['POST'])
def send_test_response():
    return "Here is a Test Response!"


# given to filenames, draw the 'content' image in the style of the 'style' image
@app.route('/styletransfer', methods=['POST'])
def stylize():
    savename = "images/flaskimage.png" 
    draw_image_stylized("images/webster.jpg", "images/orphism.jpg", savename=savename)
    # return styled_image
    return send_file(savename, mimetype='image/png')


# Upload and generate(?) images here
@app.route('/baseImages', methods=['POST'])
def upload_and_generate():
    if request.method == 'POST':

        content_image = request.files['contentImage']
        style_image = request.files['styleImage']
        content_image.save('content.png')
        style_image.save('style.png')

        draw_image_stylized('content.png', 'style.png', savename='images/' + request.form['savename'])
        # remove the files after
        os.remove('content.png')
        os.remove('style.png')

        return send_file('images/' + request.form['savename'], mimetype='image/png')