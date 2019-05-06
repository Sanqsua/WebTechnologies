from app import db
from app import ma


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(30))
    email = db.Column(db.String(50))
    books = db.relationship('Book', backref='user')

    def __init__(self, name, password, email):
        self.name = name
        self.password = password
        self.email = email

class UserSchema(ma.ModelSchema): 
    class Meta:
        # fields = ('id','name','password','email')
        model = User 
