"""
Authentication routes for user registration, login, and token management
"""
from flask import request, jsonify
from app.extensions import db
from app.models.user import User
from app.utils.auth import generate_token, token_required
from . import auth_bp

@auth_bp.route('/register', methods=['POST'])
def register():
    """Register a new user"""
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    try:
        if User.query.filter_by(email=email).first():
            return jsonify({'error': 'User already exists'}), 409
        
        new_user = User(email=email)
        new_user.set_password(password)
        
        db.session.add(new_user)
        db.session.commit()
        
        token = generate_token(new_user.id, email)
        
        return jsonify({
            'message': 'User registered successfully',
            'token': token,
            'user': new_user.to_dict()
        }), 201
    except Exception as ex:
        db.session.rollback()
        return jsonify({'error': 'Server error', 'details': str(ex)}), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    """Login user with email and password"""
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    try:
        user = User.query.filter_by(email=email).first()
        
        # Check if user exists and password matches
        if user and user.check_password(password):
            # Generate JWT token
            token = generate_token(user.id, user.email)
            
            return jsonify({
                'message': 'Login successful',
                'token': token,
                'user': user.to_dict()
            })
        else:
            return jsonify({'error': 'Invalid credentials'}), 401
    except Exception as ex:
        return jsonify({'error': 'Server error', 'details': str(ex)}), 500

@auth_bp.route('/check-user', methods=['POST'])
def check_user():
    """Check if user exists by email"""
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Email is required'}), 400

    try:
        exists = User.query.filter_by(email=email).first() is not None
        return jsonify({'exists': exists})
    except Exception as ex:
        return jsonify({'error': 'Server error', 'details': str(ex)}), 500

@auth_bp.route('/login-or-register', methods=['POST'])
def login_or_register():
    """Login user or register if user doesn't exist"""
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    try:
        user = User.query.filter_by(email=email).first()
        
        if user and user.check_password(password):
            token = generate_token(user.id, user.email)
            
            return jsonify({
                'message': 'Login successful',
                'token': token,
                'user': user.to_dict(),
                'action': 'login'
            })
        elif user:
            return jsonify({'error': 'Invalid credentials'}), 401
        else:
            # Register new user
            new_user = User(email=email)
            new_user.set_password(password)
            
            db.session.add(new_user)
            db.session.commit()
            
            token = generate_token(new_user.id, email)
            
            return jsonify({
                'message': 'User registered and logged in successfully',
                'token': token,
                'user': new_user.to_dict(),
                'action': 'register'
            }), 201
            
    except Exception as ex:
        db.session.rollback()
        return jsonify({'error': 'Server error', 'details': str(ex)}), 500

@auth_bp.route('/verify', methods=['GET'])
@token_required
def verify_token_endpoint(payload):
    """Verify if the current token is valid"""
    return jsonify({
        'valid': True,
        'user': {
            'id': payload['user_id'],
            'email': payload['email']
        }
    })