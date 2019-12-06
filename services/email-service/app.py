from flask import Flask, request
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import requests
import json

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


sender_email = ""
password = ''

# Create the plain-text and HTML version of your message
text = """\
Link para a confirmacao de email: {message}
"""
html = """\
<html>
  <body>
  </body>
</html>
"""

context = ssl.create_default_context()

def send_email(email, user_id):
  token = requests.post('http://localhost:5000/token', json={'email': email})
  token = token.content.decode("utf-8") 
  token = token.replace("'", "\"")
  token = json.loads(token)
  message = MIMEMultipart("alternative")
  message["Subject"] = "multipart test"
  message["From"] = sender_email
  message["To"] = email
  part2 = MIMEText(html, "html")
  message.attach(part2)
  part1 = MIMEText(text.format(message='http://localhost:4200/auth/'+str(user_id)+"/"+str(token['token'])), "plain")
  message.attach(part1)
  with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
      server.login(sender_email, password)
      server.sendmail(
          sender_email, email, message.as_string()
      )
  return True

@app.route('/email', methods = ['POST'])
def receive_email():
    print('chegou request')
    payload = request.json
    email = payload['email']
    user_id = payload['userId']
    sent = send_email(email, user_id)
    if sent:
        return {'message': 'email sent with success'}, 200
    else:
        return {'message': 'an erro occurred sending the email'}, 400
