from mainApp import db
from mainApp import ma


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = (db.String(30))
    books = db.relationship('Book', backref='user',
                            passive_deletes=True, lazy=True)

    def __init__(self, userName):
        self.userName = userName


class UserSchema(ma.Schema):
    class Meta:
        fields = ('userName')
