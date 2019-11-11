import os
from datetime import datetime, timedelta

import jwt
from passlib.context import CryptContext


JWT_SECRET = 'admin'
JWT_ALGORITHM = 'HS512'
JWT_EXP_DELTA_SECONDS = 1000000


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
    return True, {'token': 'Bearer ' + jwt_token.decode('utf-8')}


def validate_token(jwt_token):
    """
    This function checks if the token is valid and the exp date is ok
    :param jwt_token:
    :return: the token claims
    """
    return jwt.decode(jwt_token[7:], JWT_SECRET, algorithms=[JWT_ALGORITHM])
