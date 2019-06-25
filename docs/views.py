import secrets
import os
from werkzeug.utils import secure_filename
from app import app, db, bcrypt, Book, User
from flask import request, jsonify, render_template, redirect, flash, url_for, session, abort
from flask_login import login_user, current_user, logout_user, login_required
from config import ALLOWED_EXTENSIONS, IMAGE_UPLOADS
# Bücher erstellen
# Erstellen Book (Post)
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
    flash('Book added.')
    return redirect(url_for('renderHomepage'))


# update(put) book (an sich genau so wie add, nur anders)
@app.route('/editBook/<id>', methods=['POST'])
@login_required
def editBook(id):
    updated_book = Book.query.get_or_404(id)
    if updated_book.user_id != current_user.id:
        abort(403)

    if request.method == 'POST':
        name = request.form['editTitle']
        price = request.form['editPrice']
        description = request.form['editDescription']
        author = request.form['editAuthor']

        updated_book.name = name
        updated_book.price = price
        updated_book.description = description
        updated_book.author = author
        db.session.commit()
        flash('Book updated.')
    return redirect(url_for('renderHomepage'))


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/addImage/<id>', methods=["GET","POST"])
def addImage(id):
    book = Book.query.get(id)

    if request.method == "POST":
       if request.files:

            image = request.files["image"]

            if(image.filename == ''):
                print("Image must have a filename")
                return redirect(request.url)
            if not allowed_file(image.filename):
                print ("dude wrongu namu")
                return redirect(request.url)
            else: 
                filename = secure_filename(image.filename)
                book.image_file = filename
                image.save(os.path.join(IMAGE_UPLOADS, filename))

            print("Image saved")

            return redirect(request.url)
    return redirect(url_for('renderHomepage'))

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
# delete user by ID
@app.route('/deleteUser/')
@login_required
def deleteUser():
    userToDelete = User.query.get_or_404(current_user.id)
    logout_user()
    flash('Account ' + str(userToDelete) + ' deleted.')
    db.session.delete(userToDelete)
    db.session.commit()
    return redirect(url_for('renderStartpage'))


@app.route('/editUser', methods=['POST'])
@login_required
def editUser():
    user_to_update = User.query.get_or_404(current_user.id)
    if(user_to_update.id != current_user.id):
        abort(403)
    # Inputs
    newUsername = request.form['editUsername']

    email = request.form['editEmail']

    password = request.form['editNewPassword']

    current_Password = request.form['editCurrentPassword']
# Passwordcheck and User not in database check
    currentPasswordCheck = bcrypt.check_password_hash(
        user_to_update.password, current_Password)
    usernameNotInDataBase = not User.query.filter_by(name=newUsername).first()
# Look if strings is not empty

    if newUsername:
        user_to_update.name = newUsername
    if email:
        user_to_update.email = email
    if not password:
        password = user_to_update.password
    else:
        password = bcrypt.generate_password_hash(  # password encryption
            request.form['editNewPassword']).decode('utf-8')
        user_to_update.password = password

    if(currentPasswordCheck and usernameNotInDataBase):
        user_to_update.password = password
        db.session.commit()
        flash('Account information updated.')
    else:
        flash('Current password wrong or username/Email already taken.')

    return redirect(url_for('renderHomepage'))
# _____________________________________________________________________


def save_picture(form_picture):
    randomhex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(form_picture.filename)
    picture_fn = randomhex+f_ext
    picture_path = os.path.join(
        app.root_path, 'static/assets/images', picture_fn)
    form_picture.save(picture_path)
    return picture_fn
