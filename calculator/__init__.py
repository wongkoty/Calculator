from flask import Flask, render_template
from flask_assets import Environment, Bundle

app = Flask(__name__)
assets = Environment(app)

js = Bundle('./js/scripts.js', output='gen/packed.js')
assets.register('js_all', js)

import calculator.views



# if __name__ == "__main__":
# 	app.run()