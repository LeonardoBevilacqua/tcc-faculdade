from flask import Flask, request
from email_sender import send_email

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


@app.route('/email', methods = ['POST'])
def receive_email():
    print('chegou request')
    message = request.json
    sent = send_email(message)
    if sent:
        return {'message': 'email sent with success'}, 200
    else:
        return {'message': 'an erro occurred sending the email'}, 400
