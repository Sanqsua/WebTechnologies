from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
# Init app
app = Flask(__name__)
# Datenbank konfig
app.config.from_pyfile('config.py')
# Erstellen von db
db = SQLAlchemy(app)
# Marschmallow initieren
ma = Marshmallow(app)

from views import *
if __name__ == "__main__":
    app.run()
