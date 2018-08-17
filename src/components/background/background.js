import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import ROUTES from '../../routes';
import MedicalSVG from '../../lib/icomoon/aid-kit.svg';
import './background.scss';

class BackGround extends React.Component {
  render() {
    return (
      <div className='background-page fade-in'>
        <p className='hero-text'>
          I have 9+ years experience working in the medical industry where I held the 
          following titles:
        </p>
        <section>
          <Fade top cascade>
            <article>
              <h2>Medical Coding Specialist <MedicalSVG className='icomoon-svgs wiggle'/></h2>
              <h3>September 2015 - January 2018</h3>
              <p>
                <a className='external-link' href='https://www.aapc.com/' target='_blank' rel='noopener noreferrer' >AAPC</a>, June 2016 <br/>
                <strong>Certified Professional Coder</strong>
              </p>
              <p>
                As a medical coding specialist I reviewed Physician&apos;s documentation and 
                <strong> abstracted</strong> CPT (current procedural terminology) codes by the 
                medical, surgical, and/or diagnostic procedures and services provided per 
                patient encounter.
              </p>
              <p>
                I ensured the proper reporting of supplies used in procedures by adhering to the 
                reporting policies for HCPCS (Healthcare Common Procedure Coding System).
              </p>
              <p>
                I <strong> Exceeded</strong> industry-set data entry standards by both quantity 
                and accuracy of claims submitted.
              </p>
              <p>
                I performed quarterly Bell Curve audits on Physicians to mitigate documentation 
                errors and to provide feedback to the Physician&apos;s regarding their billing 
                and coding accuracy.
              </p>
              <p>
                I rigorously kept up with the ever-changing coding/policy changes to the CPT, 
                HCPCS, and ICD-10 code sets and <strong>drafted educational materials </strong> 
                regarding those changes for both clinical staff (including the Physician&apos;s) 
                as well as for the non-clinical staff such as our medical billers and other coding 
                staff.
              </p>
            </article>
          </Fade>
          <Fade right>
            <article>
              <h2>Revenue Cycle Specialist <MedicalSVG className='icomoon-svgs wiggle'/></h2>
              <h3>February 2014 - September 2015</h3>
              <p>
                My primary responsbility in this role was to identify the causes of medical claim 
                rejections and resolve them. There is a plethora of reasons a medical claim could 
                be denied and involved <strong>extensive problem-solving and root-cause analysis 
                skills</strong>.
              </p>
              <p>
                I was diligent in analyzing billing reports to identify claim rejection trends and 
                worked proactively to prevent further denials.
              </p>
              <p>
                I Advocated for our patients that dealt with improper insurance claim denials and 
                assisted them in the appeals process to overturn their insurance&apos;s denial 
                decisions.
              </p>
            </article>
          </Fade>
          <Fade left>
            <article>
              <h2>Patient Care Coordinator <MedicalSVG className='icomoon-svgs wiggle'/></h2>
              <h3>February 2012 - February 2014</h3>
              <p>
                This was my entry point into the medical industry. I worked directly with patients 
                by checking them into their appointments and by routing them to the appropriate 
                staff based off the patient&apos;s need.
              </p>
              <p>
                <strong>My work spoke for itself</strong> as I was quickly made into a trainer 
                for onboarding new staff. 
              </p>
              <p>
                Management was so impressed with my work ethic and ability to solve problems 
                that they paid for my medical coding education and certification to <strong>best 
                utilize my talents</strong>.
              </p>
            </article>
          </Fade>
        </section>
        <Link to={ROUTES.EDUCATION} className='buttons'>
        <button className='raise'> SEE EDUCATION NEXT</button>
        </Link>
      </div>
    );
  }
}

export default BackGround;
