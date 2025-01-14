from flask import Flask

app = Flask(__name__)

app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['API_TITLE'] = 'Model Rest Api'
app.config['API_VERSION'] = 'v1'
app.config['OPENAPI_VERSION'] = '3.0.3'
app.config['OPENAPI_URL_PREFIX'] = '/'
app.config['OPENAPI_SWAGGER_UI_PATH'] = '/swagger-ui'
app.config['OPENAPI_SWAGGER_UI_URL'] = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/'


@app.get('/model')
def run():
    return "{\"message\" : \"Hey there python\"}"


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=str(3002),debug=True)
