from app import app, db, ma, bcrypt
from flask import request, jsonify, render_template,redirect, flash
from models.BookModel import Book, BookSchema
from models.UserModel import User, UserSchema
# from forms import RegistrationForm, LoginForm

# Bücher erstellen
# Erstellen Book (Post)
book_schema = BookSchema(strict=True)
book_schemas = BookSchema(many=True, strict=True)
user_schema = UserSchema(strict=True)
user_schemas = UserSchema(many=True,strict = True)

# buch adden
@app.route('/book', methods=['POST'])
def add_Book():
    name = request.json['name']
    author = request.json['author']
    description = request.json['description']
    price = request.json['price']
    user_id = request.json['user_id']

    new_Book = Book(name, author, description, price,user_id)
    db.session.add(new_Book)
    db.session.commit()
    return book_schema.jsonify(new_Book)

# Startseite mit allen Bücher werden angezeigt
@app.route('/', methods=['GET','POST'])
def get_Startpage():
    all_books = Book.query.all()
    return render_template('startpage.html', books = all_books)

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

# Users
#addUser/registrate
@app.route('/registration', methods=['GET','POST'])
def registrate():
    # name = request.json['name']
    # password = request.json['password']
    # email = request.json['email']
    # userToAdd = User(name, password, email)
    # db.session.add(userToAdd)
    # db.session.commit()
    # return user_schema.jsonify(userToAdd)
    hashed_password = bcrypt.generate_password_hash(request.form['accountPassword']).decode('utf-8')
    accountUsername = request.form['accountUsername']
    accountEmail = request.form['accountEmail']
    user = User(name=accountUsername, email = accountEmail, password = hashed_password)
    db.session.add(user)
    db.session.commit()
    if(db.user.filter(db.user.name == user.name)):
        flash("user eingefügt")
    return render_template('home.html')
#get userbyid
@app.route('/user/<id>',methods=['GET'])
def get_User_by_id(id):
    userToGet = User.query.get(id)
    return user_schema.jsonify(userToGet)

#Getallusers
@app.route('/user', methods=['GET'])
def get_Users():
    all_Users = User.query.all()
    result = user_schemas.dump(all_Users)
    return jsonify(result.data)

#delete
@app.route('/user/<id>', methods=['DELETE'])
def deleteUser(id):
    userToDelete = User.query.get(id)
    db.session.delete(userToDelete)
    db.session.commit()
    return user_schema.jsonify(userToDelete)

@app.route('/user/<id>', methods=['PUT'])
def update_user(id):
    user_to_update = User.query.get(id) 
    name = request.json['name']
    password = request.json['password']
    email = request.json['email']

    user_to_update.name = name
    user_to_update.password = password
    user_to_update.email = email
    db.session.commit()
    return user_schema.jsonify(user_to_update)