from model.user import Users
from service.auth_service import generate_token
import requests


def user_login(possible_user):
    user = get_user_by_email(possible_user['email'])
    if user:
        valid, token = generate_token(possible_user['email'], possible_user['password'], 
        user.__dict__['password'])
        if valid:
            del user.__dict__['password']
            res = requests.post('http://localhost:8085/email', json={'message': 'ola'})
            return user.__dict__, 200
        else:
            return {"error": "wrong password"}, 400
    else:
        return {"error": "user not found"}, 400

def get_user_by_email(email):
    return Users.query.filter(Users.email == email).first()

def get_user(user_id):
    user = Users.query.get(user_id)
    if user:
        return user.__dict__, 200
    return {"message": "user not found"}, 404

def add_user(user):
    return Users.insert(user)
