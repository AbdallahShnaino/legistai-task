"""
Main blueprint for general application routes
"""
from flask import Blueprint

main_bp = Blueprint('main', __name__)

from . import routes