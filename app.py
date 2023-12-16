import os

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'sdfjkhjsdnsnk32i3jbruyfk_wurj**msfj'
db = SQLAlchemy(app)


@app.route('/')
def index():  # put application's code here
    return render_template('main_block.html')


if __name__ == '__main__':
    app.run()
