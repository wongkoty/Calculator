from flask import Flask, render_template
from flask_assets import Environment, Bundle

app = Flask(__name__)
app.config['DEBUG'] = True

assets = Environment(app)

js = Bundle('./js/scripts.js', output='gen/packed.js')
assets.register('js_all', js)

scss = Bundle('./scss/styles.scss', filters='pyscss', output='gen/packed.css')
assets.register('scss_all', scss)

import calculator.views



# if __name__ == "__main__":
# 	app.run()