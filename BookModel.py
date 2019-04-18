from mainApp import db
from mainApp import ma


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    author = db.Column(db.String(30))
    description = db.Column(db.String(300))
    price = db.Column(db.Float)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), ondelete='CASCADE')
    
    def __init__(self, name, author, description, price):
        self.name = name
        self.author = author
        self.description = description
        self.price = price

class BookSchema(ma.Schema):

    class Meta:
        fields = ('id', 'name', 'author', 'description', 'price')

