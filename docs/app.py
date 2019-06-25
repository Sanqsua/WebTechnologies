from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager,UserMixin



# Init app
app = Flask(__name__,static_url_path='/static')
# Datenbank konfig
app.config.from_pyfile('config.py')
# Erstellen von db
db = SQLAlchemy(app)
login_manager = LoginManager(app) #durch verändern der Models, werden die sessions gemanaged
login_manager.login_view = 'login' # function for login_required
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30))
    author = db.Column(db.String(30))
    description = db.Column(db.String(300))
    price = db.Column(db.Float)
    image_file = db.Column(db.String(20))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __init__(self, name, author, description, price, user_id):
        self.name = name
        self.author = author
        self.description = description
        self.price = price
        self.user_id = user_id

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(30))
    email = db.Column(db.String(50))
    books = db.relationship('Book',cascade="all, delete, delete-orphan",backref='user')

    def __init__(self, name, password, email):
        self.name = name
        self.password = password
        self.email = email

db.create_all()
db.session.commit()
#password encrypction/decryption
bcrypt = Bcrypt(app)

from views import *
if __name__ == "__main__":
    app.run()