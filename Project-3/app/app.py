from flask import Flask, render_template, json

# Create an instance of our Flask app.
app = Flask(__name__)

# Set route
@app.route('/')
def index():
    
    # Return the template with the teams list passed in
    return render_template('index.html')

@app.route('/index.html')
def index2():

    # Return the template with the teams list passed in
    return render_template('index.html')

@app.route('/summary.html')
def summary():
    
    # Return the template with the teams list passed in
    return render_template('summary.html')

@app.route('/participation.html')
def participation():
    
    # Return the template with the teams list passed in
    return render_template('participation.html')

@app.route('/gdp.html')
def gdp():
    
    # Return the template with the teams list passed in
    return render_template('gdp.html')

@app.route('/bias.html')
def bias():
    
    # Return the template with the teams list passed in
    return render_template('bias.html')

@app.route('/proof.html')
def proof():
    
    # Return the template with the teams list passed in
    return render_template('proof.html')

    
@app.route('/editor.html')
def editor():
    
    # Return the template with the teams list passed in
    return render_template('editor.html')

@app.route('/tool.html')
def tool():
    
    # Return the template with the teams list passed in
    return render_template('tool.html')

@app.route('/ending.html')
def ending():
    
    # Return the template with the teams list passed in
    return render_template('ending.html')


if __name__ == "__main__":
    app.run(debug=True)
