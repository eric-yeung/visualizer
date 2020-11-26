import time,re
from flask import Flask
from flask import request
import sys,requests,json
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/getCVE')
def getCVE():
    theCPE = request.args.get('cpe')

    url = "https://nvd.nist.gov/vuln/search/results?form_type=Advanced&results_type=overview&seach_type=all&query="+str(theCPE)
    page = requests.get(url)

    soup = BeautifulSoup(page.content, 'html.parser')
    table = soup.find_all('table', attrs={'class':'table table-striped table-hover'})

    listOfCVEs=[]
    for i in table:
        tr = i.find_all('tr')
        for x in tr[1:]: #Chop first one
            listOfCVEs.append(x.text)
        break

    data ={}
    data['cves'] = []

    for block in listOfCVEs:
        cve = False
        desc = False
        pub = False

        buffer =''
        cveName =''
        descText = ''
        publishedDate = '' #chop the last 6 chars after

        for i in range(len(block)):

            if block[i] == "\n" and block[i-1] == "\n" and cve==False and i!=0:
                cveName=buffer.strip()
                buffer =''
                cve =True
                continue
            if block[i] == "." and block[i-1] == "'":
                descText=buffer[:-1]
                buffer =''
                desc = True
                continue
            if block[i] == "\n" and block[i-1] == "\n" and block[i-2] == "\n" and cve and pub==False:
                publishedDate = buffer.strip()[:-6].replace('\n','')
                buffer =''
                pub = True
                continue
            else:
                buffer += block[i]

        sevs = buffer.split("\n") # This creates a list which contains some empty sets
        sevs = (list(filter(lambda x: x!='',sevs))) #This removes the empty sets ^
        v3 = sevs[0][4:]
        v2 = sevs[1].strip()[4:]

        v3 = re.sub("[^\d.]+", "", v3)
        v2 = re.sub("[^\d.]+", "", v2)

        data['cves'].append({
        'name': cveName,
        'description': descText,
        'published date': publishedDate,
        'v3': v3,
        'v2': v2
        })
 

    return {'cve': data}





@app.route('/getCPE')
def getCPE():
    theQuery = request.args.get('search')
    theVersion = request.args.get('version')
    

    url = "https://nvd.nist.gov/products/cpe/search/results?namingFormat="+str(theVersion)+"&keyword="+str(theQuery)
    page = requests.get(url)


    soup = BeautifulSoup(page.content, 'html.parser')
    cpes = []

    for tr in soup.findAll('div', attrs={'class':'col-lg-12'})[1:]:
        temp = tr.findAll('a')[::2]
        for i in temp:
            #links.append(i['href'])
            cpes.append(i.text)

    # The last 8 aren't CPES so we chop
    cpes = cpes[:-8]
    data ={}
    data['cpes'] = []
    for cpe in cpes:  
        data['cpes'].append({
        'name': cpe,
        'version': str(theVersion)
        })
    
    return {'cpe': data}