from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

db = SQLAlchemy()
login_manager = LoginManager()

def create_app(config_class='config.Config'):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    login_manager.init_app(app)

    with app.app_context():
        db.create_all()

    # Importa los modelos aquí
    from app.models import User, Professional

    # Registrar blueprints
    from app.main import main_bp
    app.register_blueprint(main_bp)

    return app
