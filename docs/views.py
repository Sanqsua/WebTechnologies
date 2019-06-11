from app import app, db, ma, bcrypt
from flask import request, jsonify, render_template, redirect, flash, url_for, session
from models.BookModel import Book, BookSchema
from models.UserModel import User, UserSchema
from flask_login import login_user, current_user, logout_user, login_required

# Bücher erstellen
# Erstellen Book (Post)
book_schema = BookSchema(strict=True)
book_schemas = BookSchema(many=True, strict=True)
user_schema = UserSchema(strict=True)
user_schemas = UserSchema(many=True, strict=True)

# Startseite mit allen Bücher werden angezeigt
@app.route('/', methods=['GET'])
@app.route('/startpage', methods=['GET'])
def renderStartpage():
    # if current_user.is_authenticated:
    #     return redirect(url_for('renderHomepage'))
    all_books = Book.query.all()
    return render_template('startpage_react.html', books=all_books)

# Render pageHomepage
@login_required  # decorator need to log in
@app.route('/home', methods=['GET'])
def renderHomepage():
    if current_user.is_authenticated:
        userBooks = Book.query.join(
            User, Book.user_id == current_user.id).all()
    return render_template('home_react.html', books=userBooks)

# addUser/registrate
@app.route('/registrate', methods=['GET', 'POST'])
def registrate():

    hashed_password = bcrypt.generate_password_hash(  # password encryption
        request.form['accountPassword']).decode('utf-8')
    accountUsername = request.form['accountUsername']
    accountEmail = request.form['accountEmail']
    user = User(name=accountUsername, email=accountEmail,  # generate user
                password=hashed_password)

    emailCheck = User.query.filter_by(email=accountEmail).first()
    userNameCheck = User.query.filter_by(name=accountUsername).first()
    if(emailCheck or userNameCheck):
        flash('电脑说没有')
        return redirect(url_for('renderStartpage'))

    flash('You in nigger')
    db.session.add(user)  # add user to db
    db.session.commit()
    return redirect(url_for('renderStartpage'))

# LOGIN
@app.route('/login', methods=['GET', 'POST'])
def login():

    inputEmail = request.form['loginEmail']
    inputPassword = request.form['loginPassword']
    user = User.query.filter_by(email=inputEmail).first()

    if user and bcrypt.check_password_hash(user.password, inputPassword):
        login_user(user, remember=True)
        flash('You logged in nigga as ' + str(user.name))
        return redirect(url_for('renderHomepage'))
    else:
        return render_template('startpage.html')


@app.route('/logout', methods=['GET'])
def logout():
    logout_user()
    flash('You logged out mate ')
    return redirect(url_for('renderStartpage'))

# buch adden
@app.route('/createBook', methods=['POST'])
def createBook():
    name = request.form['createTitle']
    author = request.form['createAuthor']
    description = request.form['createDescription']
    price = request.form['createPrice']
    user_id = current_user.id
    new_Book = Book(name, author, description, price, user_id)
    db.session.add(new_Book)
    db.session.commit()
    flash('book added')
    # book_schema.jsonify(new_Book)
    return redirect(url_for('renderHomepage'))
  
# getBook durch <id> (query parameter)
@app.route('/book/<id>', methods=['GET'])
def get_Book_by_id(id):
    book = Book.query.get(id)
    return book_schema.jsonify(book)

# update(put request) an sich genau so wie add, nur anders
@app.route('/book/<id>', methods=['PUT'])
def editBook(id):
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


@app.route('/getbooks', methods=['GET'])
def getAllBooks():
    allbooks = Book.query.all()
    result = book_schemas.dump(allbooks)
    return jsonify(result.data)


@app.route('/book/<id>', methods=['DELETE'])
def delete_book(id):
    book_to_delete = Book.query.get(id)
    db.session.delete(book_to_delete)
    db.session.commit()

    return book_schema.jsonify(book_to_delete)

# Users


# get userbyid
@app.route('/user/<id>', methods=['GET'])
def get_User_by_id(id):
    userToGet = User.query.get(id)
    return user_schema.jsonify(userToGet)

# Getallusers
@app.route('/user', methods=['GET'])
def get_Users():
    all_Users = User.query.all()
    result = user_schemas.dump(all_Users)
    return jsonify(result.data)

# delete
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


@app.route('/users', methods=['GET'])
def getallusers():

    users = User.query.all()
    result = user_schemas.dump(users)

    return book_schemas.jsonify(result.data)
