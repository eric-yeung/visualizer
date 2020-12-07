# CPE and CVE Visualizer Project for COMP 4990 
This was a project built by Eric Yeung, Teo Mastronardi, and Parteek Bindra as a final project.

Built using React and Flask API, we managed to scrape information from the National Vulnerability Database to be put into our own site.

Due to limitations in the NVD, our own app is also limited as well. For instance, if CVEs didn't have scores that were v2 and v3, our site could not display it.
If the NVD site itself could not load the CVEs, our site as well could not as well, as we relied on their resources. 

## Backend Dependencies: 
```bash
npm install

pip3 install python-dotenv in visualizer-backend

pip3 install flask in visualizer-backend

source venv/bin/activate

pip3 install requests

pip3 install bs4
```
