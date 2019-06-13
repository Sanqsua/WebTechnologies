from app import app, db, ma, bcrypt
from flask import request, jsonify, render_template, redirect, flash, url_for, session, abort
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
        user = current_user
        userBooks = Book.query.join(
            User, Book.user_id == current_user.id).all()
    return render_template('home_react.html', books=userBooks, user=user)

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
        flash('The Email or username is already taken.')
        return redirect(url_for('renderStartpage'))

    flash('Creating your account was successful.')
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
        flash('You signed in as ' + str(user.name))
        return redirect(url_for('renderHomepage'))
    else:
        flash('Sign in was not successful. Please try again.')
        return redirect(url_for('renderStartpage'))


@app.route('/logout', methods=['GET'])
def logout():
    logout_user()
    flash('Sign out was successful.')
    return redirect(url_for('renderStartpage'))


# Buchoptionen
# create and add book
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
# @app.route('/book/<id>', methods=['GET'])
# def get_Book_by_id(id):
#     book = Book.query.get(id)
#     return book_schema.jsonify(book)

# update(put) book (an sich genau so wie add, nur anders)
@app.route('/editBook/<id>', methods=['POST'])
@login_required
def editBook(id):
    updated_book = Book.query.get_or_404(id)
    
    if updated_book.user_id != current_user.id:
        abort(403)
    name = request.form['editTitle']
    price = request.form['editPrice']
    description = request.form['editDescription']
    author = request.form['editAuthor']
    

    updated_book.name = name
    updated_book.price = price
    updated_book.description = description
    updated_book.author = author
    db.session.commit()
    flash('Book updated')
    return redirect(url_for('renderHomepage'))


@app.route('/getbooks', methods=['GET'])
def getAllBooks():
    allbooks = Book.query.all()
    result = book_schemas.dump(allbooks)
    return jsonify(result.data)

# delete
@app.route('/deleteBook/<id>', methods=['POST'])
def delete_book(id):
    book_to_delete = Book.query.get_or_404(id)
    if(book_to_delete.user != current_user):
        abort(403)
    db.session.delete(book_to_delete)
    db.session.commit()

    return redirect(url_for('renderHomepage'))

# Users


# get userbyid
@app.route('/user/<id>', methods=['GET'])
def get_User_by_id(id):
    userToGet = User.query.get(id)
    return user_schema.jsonify(userToGet)

# Getallusers
@app.route('/users', methods=['GET'])
def get_Users():
    all_Users = User.query.all()
    result = user_schemas.dump(all_Users)
    return jsonify(result.data)

# delete user by ID
@app.route('/deleteUser/<id>', methods=['POST'])
@login_required
def deleteUser(id):
    userToDelete = User.query.get_or_404(id)
    logout_user()
    db.session.delete(userToDelete)
    db.session.commit()
    return redirect(url_for('renderStartpage'))


@app.route('/editUser/<id>', methods=['POST'])
@login_required
def update_user(id):
    user_to_update = User.query.get_or_404(id)
    email = request.form['editEmail']
    password = request.form['editPassword']
    user_to_update.password = password
    user_to_update.email = email
    db.session.commit()
    flash('user updated')
    return redirect(url_for('renderHomepage'))
# _____________________________________________________________________
# @app.route('/editBook/<id>', methods=['POST'])
# @login_required
# def editBook(id):
#     updated_book = Book.query.get_or_404(id)
    
#     if updated_book.user_id != current_user.id:
#         abort(403)
#     name = request.form['editTitle']
#     price = request.form['editPrice']
#     description = request.form['editDescription']
#     author = request.form['editAuthor']
    

#     updated_book.name = name
#     updated_book.price = price
#     updated_book.description = description
#     updated_book.author = author
#     db.session.commit()
#     flash('Book updated')
#     return redirect(url_for('renderHomepage'))