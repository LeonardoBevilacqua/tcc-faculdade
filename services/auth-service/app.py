from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes import my_app


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/jobs'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
app.register_blueprint(my_app)

import model.user