from flask import Flask, request
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

sender_email = "marcinhoguarani@gmail.com"
receiver_email = "marcioluismacedo@gmail.com"
password = ''

message = MIMEMultipart("alternative")
message["Subject"] = "multipart test"
message["From"] = sender_email
message["To"] = receiver_email

# Create the plain-text and HTML version of your message
text = """\
Hi,
How are you?
"""
html = """\
<html>
  <body>
    <p>Hi,<br>
       How are you?<br>
    </p>
  </body>
</html>
"""

# Turn these into plain/html MIMEText objects
part1 = MIMEText(text, "plain")
part2 = MIMEText(html, "html")

# Add HTML/plain-text parts to MIMEMultipart message
# The email client will try to render the last part first
message.attach(part1)
message.attach(part2)

# Create secure connection with server and send email
context = ssl.create_default_context()

def send_email(message_to_send):
  print('\nDevo enviar a mensagem ', message_to_send)
  with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
      server.login(sender_email, password)
      server.sendmail(
          sender_email, receiver_email, message.as_string()
      )
  return True

@app.route('/email', methods = ['POST'])
def receive_email():
    print('chegou request')
    message = request.json
    sent = send_email(message)
    if sent:
        return {'message': 'email sent with success'}, 200
    else:
        return {'message': 'an erro occurred sending the email'}, 400
