from app import app, db, ma
from flask import request, jsonify
from models.BookModel import Book, BookSchema

# Erstellen Book (Post)
book_schema = BookSchema(strict=True)
book_schemas = BookSchema(many=True, strict=True)

#buch adden
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

    updated_book.name = name
    updated_book.price = price
    updated_book.description = description
    updated_book.author = author
    db.session.commit()
    return book_schema.jsonify(updated_book)


@app.route('/book/<id>', methods=['DELETE'])
def delete_book(id):
    book_to_delete = Book.query.get(id)
    db.session.delete(book_to_delete)
    db.session.commit()

    return book_schema.jsonify(book_to_delete)
