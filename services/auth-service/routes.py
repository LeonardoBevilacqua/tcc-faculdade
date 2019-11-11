from flask import Blueprint, jsonify
import json
from service.user_service import user_login, get_user
from flask import request


my_app = Blueprint('my_app', __name__)


@my_app.route('/login', methods = ['POST'])
def login():
    user, code = user_login(request.json)
    return jsonify(user), code

@my_app.route('/users', methods = ['POST'])
def create_user():
    return {'message':'user created'}

@my_app.route('/users/<user_id>', methods = ['GET'])
def fetch_users(user_id):
    user, code = get_user(user_id)
    return jsonify(user), code