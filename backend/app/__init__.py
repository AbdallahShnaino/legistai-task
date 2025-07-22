"""
Flask Application Factory
"""
from flask import Flask
from app.extensions import db, cors

def create_app(config_name='development'):
    """Create and configure Flask application"""
    app = Flask(__name__)
    
    from app.config import config
    app.config.from_object(config[config_name])
    
    db.init_app(app)
    cors.init_app(app)
    
    from app.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/v1/auth')
    
    from app.main import main_bp
    app.register_blueprint(main_bp)
    
    return app