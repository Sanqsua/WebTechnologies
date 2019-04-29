from app import db
from app import ma


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = (db.String(30))
    passwort = (db.String(30))
    email = (db.String(50))
    books = db.relationship('Book', backref='user')

    def __init__(self, userName, password, email):
        self.userName = userName
        self.password = password
        self.email = email


class UserSchema(ma.Schema):
   
    class Meta:
        fields = ('id','userName','password','email')
