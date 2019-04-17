from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
# Datenbank konfig
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Erstellen von db
db = SQLAlchemy(app)
# Marschmallow initieren
ma = Marshmallow(app)

# Books /Model


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    author = db.Column(db.String(30))
    description = db.Column(db.String(300))
    price = db.Column(db.Float)

    def __init__(self, name, author, description, price):
        self.name = name
        self.author = author
        self.description = description
        self.price = price

# Buchschema zur ausgabe einrichten


class BookSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'author', 'description', 'price')


# schema initieren
book_schema = BookSchema(strict=True)
book_schemas = BookSchema(many=True, strict=True)

# Erstellen Book (Post)

@app.route('/book', methods=['POST'])
def add_Book():
    name = request.json['name']
    author = request.json['author']
    description = request.json['description']
    price = request.json['price']

    new_Book = Book(name, author, description, price)
    db.session.add(new_Book)
    db.session.commit()
    return book_schema.jsonify(new_Book)

# getAllBooks (alle)
@app.route('/book', methods=['GET'])
def get_Books():
    all_Books = Book.query.all()
    result = book_schemas.dump(all_Books)
    return jsonify(result.data)

# getBook durch <id> (query parameter)
@app.route('/book/<id>', methods=['GET'])
def get_Book_by_id(id):
    book = Book.query.get(id)
    return book_schema.jsonify(book)

# update(put request) an sich genau so wie add, nur anders
@app.route('/book/<id>', methods=['PUT'])
def update_Book(id):
    updated_book = Book.query.get(id)
    name = request.json['name']
    author = request.json['author']
    description = request.json['description']
    price = request.json['price']

    product.name = name
    product.price = price
    product.description = description
    product.author = author
    db.session.commit()

    return book_schema.jsonify(update_Book)


@app.route('book/<id>', methods=['DELETE'])
def deleteBook(id):
    book_To_Delete = Book.query.get(id)
    db.session.delete(book_To_Delete)
    db.session.commit()

    return BookSchema.jsonify(book_To_Delete)


if __name__ == "__main__":
    app.run(debug=True)
