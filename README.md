# Django REST Framework Backend Setup

This repository contains a Django REST Framework backend and an Angular app. Follow the steps below to set up and run both components.

## Django REST Framework Backend

### Prerequisites
- Python (3.6 or higher)
- pip

### Installation

Clone the repository.

Create and activate a virtual environment (optional but recommended):
```bash
python -m venv venv
source venv/bin/activate
```

Install dependencies
```bash
pip install django
pip install djangorestframework
python -m pip install django-cors-headers
```

This Django project uses a SQLite database by default. If you want to use a different database, update the settings in github_proxy_service/settings.py accordingly.

To apply the initial database migration, run the following command:
```bash
python manage.py migrate
```

### Run the Development Server
Start the Django development server:
```bash
python manage.py runserver
```

### Verify
The backend server should now be running at http://127.0.0.1:8000/.
The end point for our github issue can be veried using curl
```bash
curl http://127.0.0.1:8000/proxy/d3-d3-issues/
```

## Django REST Framework Backend
