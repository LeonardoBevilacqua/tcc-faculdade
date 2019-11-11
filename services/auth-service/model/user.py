from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cpf = db.Column(db.String(120))
    email = db.Column(db.String(120))
    password = db.Column(db.String(200))
    profile_id = db.Column(db.String(120))
    company_id = db.Column(db.String(120))

    __dict__ = {
        "cpf": cpf,
        "id": id,
        "email": email,
        "profile_id": profile_id,
        "company_id": company_id
    }
