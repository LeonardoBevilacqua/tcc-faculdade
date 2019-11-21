from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
import os
import requests
from datetime import datetime, timedelta
import jwt
from passlib.context import CryptContext


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://teuhjktbskesdv:ee969564d1a4ab53dc0ffff91bd19c13d05aff59785e2a85540476022af67129@ec2-23-21-148-223.compute-1.amazonaws.com/dfbj7ja49drdpu'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

JWT_SECRET = 'admin'
JWT_ALGORITHM = 'HS512'
JWT_EXP_DELTA_SECONDS = 1000000


class Users(db.Model):

    id = db.Column(db.Integer, primary_key=True, nullable=True, server_default=db.FetchedValue())
    cpf = db.Column(db.String(120))
    email = db.Column(db.String(120))
    password = db.Column(db.String(200))
    profile_id = db.Column(db.String(120))
    company_id = db.Column(db.String(120))
    status = db.Column(db.Boolean)

    __dict__ = {
        "cpf": cpf,
        "id": id,
        "email": email,
        "profile_id": profile_id,
        "company_id": company_id,
        "status": status
    }


def generate_token(email, password, db_password):
    """
    This function is responsible for checking with the email and password are valid, if It is OK a valid JWT is returned
    :param email: email of the user
    :param password: password of the user
    :return: a valid token
    """
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    valid_result = pwd_context.verify(password, db_password)
    if valid_result is False:
        return False, None
    payload = {
        'exp': datetime.now() + timedelta(seconds=int(JWT_EXP_DELTA_SECONDS)),
        'email': email
    }
    jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)
    return True, 'Bearer ' + jwt_token.decode('utf-8')


def validate_token(jwt_token):
    """
    This function checks if the token is valid and the exp date is ok
    :param jwt_token:
    :return: the token claims
    """
    return jwt.decode(jwt_token[7:], JWT_SECRET, algorithms=[JWT_ALGORITHM])


def user_login(possible_user):
    user = get_user_by_email(possible_user['email'])
    if user:
        if user['status'] is False:
            return {'error': 'user pending activation'}, False, 400
        valid, token = generate_token(possible_user['email'], possible_user['password'], 
        user.__dict__['password'])
        if valid:
            del user.__dict__['password']
            # res = requests.post('http://localhost:8085/email', json={'message': 'ola'})
            return user.__dict__, token, 200
        else:
            return {"error": "wrong password"}, False, 400
    else:
        return {"error": "user not found"}, False, 400

def get_user_by_email(email):
    return Users.query.filter(Users.email == email).first()

def get_user(user_id):
    user = Users.query.get(user_id)
    if user:
        return user.__dict__, 200
    return {"message": "user not found"}, 404

class Login(Resource):

    def post(self):
        data = request.get_json()
        user, token, code = user_login(data)
        return user, code, {'token': token}

api.add_resource(Login, '/login')

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')