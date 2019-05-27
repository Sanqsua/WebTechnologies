from app import db,ma,login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    return user.query.get(int(user_id))

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

class UserSchema(ma.ModelSchema): 
    class Meta:
        # fields = ('id','name','password','email')
        model = User 
