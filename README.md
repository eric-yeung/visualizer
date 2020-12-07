# CPE and CVE Visualizer Project for COMP 4990 ![python](https://img.shields.io/badge/python-3.7-yellow) ![React](https://img.shields.io/badge/React-17.0.1-green)
This was a project built by Eric Yeung, Teo Mastronardi, and Parteek Bindra as a final project.

Built using React and Flask API, we managed to scrape information from the National Vulnerability Database to be put into our own site.

Due to limitations in the NVD, our own app is also limited as well. For instance, if CVEs didn't have scores that were v2 and v3, our site could not display it.
If the NVD site itself could not load the CVEs, our site as well could not as well, as we relied on their resources. 

## Backend Dependencies: 
```bash
npm install
pip3 install requests
pip3 install bs4
```
In visualizer-backend
```bash
pip3 install python-dotenv
```
```cmd
venv\Scripts\activate (to activate virtual environment)
```
```bash
pip install Flask (within virtual environment)
```
### Help with Flask and React:
[Flask](https://flask.palletsprojects.com/en/1.1.x/installation/)
[React](https://reactjs.org/docs/getting-started.html)

## To start:
In venv:
```bash
flask run
```
In project directory:
```bash
npm install
```
