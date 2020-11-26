import React from 'react';
import { Button } from 'reactstrap';

export default function About() {
    return (
        <div>
            <React.Fragment>
                <Button color="primary" href="https://github.com/eric-yeung/visualizer" target="_blank">GitHub</Button>
                <h1>National Vulnerability Database</h1>
                <p>
                    The NVD is the U.S. government repository of standards based 
                    vulnerability management data represented using the Security Content Automation Protocol (SCAP). 
                    This data enables automation of vulnerability management, security measurement, and compliance. 
                    The NVD includes databases of security checklist references, security-related software flaws, misconfigurations, product names, and impact metrics.
                </p>

                <h2>Common Platform Enumeration (CPE)</h2>
                <p>
                    A naming scheme for showing information on operating systems, hardware and software.
                    <ul>
                        <li>It uses the following format:</li>
                        cpe:/(part):(vendor):(product):(version):(update):(edition):(language)
                    </ul>
                </p>
                <h3>Common Vulnerabilities and Exposures</h3>
                <p>A specific instance of vulnerability within a product or system.</p>
            </React.Fragment>
        </div>
    )
}
