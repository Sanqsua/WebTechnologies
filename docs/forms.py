# from flast_wtf import FlaskForm
# from wtforms import StringField,PasswordField,SubmitField

# from wtfroms.validators import DataRequired,Length,Email,EqualTo

# class RegistrationForm(FlaskForm):
#     username = StringField('RegUsername',validators=[DataRequired(), Length(min = 5,max=30)])
#     email = StringField('RegEmail',validators=[DataRequired(),Email()])
#     password = PasswordField('RegPassword',validators=[DataRequired()])
#     confirm_password = PasswordField('Confirm password',validators=[DataRequired(),EqualTo('password')])
#     submit = SubmitField('Sign Up')

# class LoginForm(FlaskForm):
#     email = StringField('LogEmail', validators=[DataRequired(),Email()])
#     password = PasswordField('LogPassword',validators=[DataReqired()])
#     submit = SubmitField('Login')
