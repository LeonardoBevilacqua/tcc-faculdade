from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
from flask_cors import CORS
import os
import requests
from datetime import datetime, timedelta
import jwt
from passlib.context import CryptContext


app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/login": {"origins": "*"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/jobs'
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
    profile_id = db.Column(db.Integer)
    company_id = db.Column(db.Integer)
    active = db.Column(db.Boolean)

    __dict__ = {
        "cpf": cpf,
        "id": id,
        "email": email,
        "profile_id": profile_id,
        "company_id": company_id,
        "active": active
    }

class Roles(db.Model):
    user_id = db.Column(db.Integer, primary_key=True, nullable=True, server_default=db.FetchedValue())
    roles = db.Column(db.String(120))

    __dict__ = {
        "roles": roles
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
        if user.__dict__['active'] is False:
            return {'error': 'user pending activation'}, False, 400
        valid, token = generate_token(possible_user['email'], possible_user['password'], 
        user.__dict__['password'])
        if valid:
            user.__dict__['profileId'] = user.__dict__['profile_id']
            user.__dict__['companyId'] = user.__dict__['company_id']
            del user.__dict__['password']
            del user.__dict__['profile_id']
            del user.__dict__['company_id']
            role = get_role_by_user_id(user.__dict__['id'])
            roles = list()
            roles.append(role.__dict__['roles'])
            user.__dict__['roles'] = roles
            return user.__dict__, token, 200
        else:
            return {"error": "wrong password"}, False, 400
    else:
        return {"error": "user not found"}, False, 400

def user_get_token(user):
    payload = {
        'exp': datetime.now() + timedelta(seconds=int(JWT_EXP_DELTA_SECONDS)),
        'email': user['email']
    }
    jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)
    return jwt_token.decode('utf-8')

def get_role_by_user_id(user_id):
    return Roles.query.filter(Roles.user_id == user_id).first()

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
        return user, code, {'Authorization': token,'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods' : 'PUT,GET, POST, OPTIONS', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, token", "Access-Control-Expose-Headers": "Authorization, test, token"}


class Token(Resource):

    def post(self):
        data = request.get_json()
        token = user_get_token(data)
        return {'token': token}


api.add_resource(Login, '/login')
api.add_resource(Token, '/token')

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')
