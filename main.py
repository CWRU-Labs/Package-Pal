import datetime

from flask_cors import CORS, cross_origin
from flask import Flask, request, render_template
from flask_restful import Resource, Api
from json import dumps
from flask import jsonify

app = Flask(__name__)
CORS(app)

api = Api(app)
class Package(Resource):
    def get(self, id):
        return jsonify(id="1", recipient="Jason", address="My Home", location="Wade", dateTimeIn="11", dateTimeOut="null", completeText="blah blah", imageLoc="string", description="Sample P$
class Tracks(Resource):
    def get(self, a):
        return jsonify(username="Jacob", email="je1", id="je12")
class Employees_Name(Resource):
    def get(self, employee_id):
        return jsonify(username="Jacob", email="je1", id="je12")
"""
class Package(Resource):
    def get(self):
        return jsonify(package="First Package", email="Golden Lamnet", id="2")

api.add_resource(Package, '/package') #My Route
"""

api.add_resource(Package, '/package/<id>') # Route_1
api.add_resource(Tracks, '/tracks/<a>') # Route_2
api.add_resource(Employees_Name, '/employees/<employee_id>') # Route_3

@app.route('/')
def root():
    # For the sake of example, use static information to inflate the template.
    # This will be replaced with real information in later steps.
    dummy_times = [datetime.datetime(2018, 1, 1, 10, 0, 0),
                   datetime.datetime(2018, 1, 2, 10, 30, 0),
                   datetime.datetime(2018, 1, 3, 11, 0, 0),
                   ]

    return render_template('index.html', times=dummy_times)


if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
