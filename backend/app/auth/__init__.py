"""
Authentication blueprint for user registration, login, and token management
"""
from flask import Blueprint

auth_bp = Blueprint('auth', __name__)

from . import routes