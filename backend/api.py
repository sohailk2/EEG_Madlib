import time
# import the eeg sign decoder when done
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

app.run()
