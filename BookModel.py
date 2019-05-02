from app import db
from app import ma


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)
    author = db.Column(db.String(30))
    description = db.Column(db.String(300))
    price = db.Column(db.Float)
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __init__(self, name, author, description, price, user_id):
        self.name = name
        self.author = author
        self.description = description
        self.price = price
        self.user_id = user_id

class BookSchema(ma.ModelSchema):
    class Meta:
        # fields = ('id', 'name', 'author', 'description', 'price')
        model = Book
