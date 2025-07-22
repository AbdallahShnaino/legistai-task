"""
Main application routes
"""
from flask import jsonify
from app.extensions import db
from . import main_bp

@main_bp.route('/')
def index():
    """Main application endpoint"""
    return jsonify({
        'message': 'Flask backend with SQL Server authentication is running!',
        'version': '2.0',
        'status': 'healthy'
    })

@main_bp.route('/health')
def health_check():
    """Health check endpoint"""
    try:
        db.session.execute('SELECT 1')
        db_status = 'connected'
    except Exception:
        db_status = 'disconnected'
    
    return jsonify({
        'status': 'healthy',
        'database': db_status,
        'version': '2.0'
    })

@main_bp.route('/init-db', methods=['POST'])
def init_db_route():
    """Initialize database tables (for first-time setup)"""
    try:
        db.create_all()
        return jsonify({'message': 'Database tables created successfully'}), 200
    except Exception as ex:
        return jsonify({'error': 'Failed to initialize database', 'details': str(ex)}), 500