import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

import roundProfilePic from '../../assets/contact-profile.gif';
import './contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-page fade-in'>
        <img src={roundProfilePic} alt='Clean-shaven profile pic of me' title='Clean-shaven profile pic of me'/>
        <p className='hero-text'>
          Like what you&apos;ve seen so far? You can find me here.
        </p>
        <div className='contact-svg-wrapper'>

          { /* GITHUB SVG */ }
          <a href='https://github.com/danielvportlandia' target='_blank' rel='noopener noreferrer'>
            <svg viewBox="0 0 256 259.3" className='other-svgs' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
              <title>https://github.com/danielvportlandia</title>
              <g>
                <path fill="#9EDCF2" d="M200.9,199.8c0,13.9-32.2,25.1-71.9,25.1c-39.7,0-71.9-11.3-71.9-25.1c0-13.9,32.2-25.1,71.9-25.1C168.7,174.7,200.9,185.9,200.9,199.8L200.9,199.8z M200.9,199.8" />
                <g>
                  <defs>
                    <path id="SVGID_1_" d="M98.1,244.8c1.6,7.5,5.5,11.9,9.4,14.5l41.1,0c5-3.4,10.1-9.8,10.1-21.8v-31c0,0,0.6-7.7,7.7-10.2c0,0,4.1-2.9-0.3-4.5c0,0-19.5-1.6-19.5,14.4v23.6c0,0,0.8,8.7-3.8,12.3v-29.2c0,0,0.3-9.3,5.1-12.8c0,0,3.2-5.7-3.8-4.2c0,0-13.4,1.9-14,17.6l-0.3,30h-3.2l-0.3-30c-0.6-15.6-14-17.6-14-17.6c-7-1.6-3.8,4.2-3.8,4.2c4.8,3.5,5.1,12.8,5.1,12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4c-4.5,1.6-0.3,4.5-0.3,4.5c7,2.6,7.7,10.2,7.7,10.2v21.7L98.1,244.8z" />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use xlinkHref="#SVGID_1_" overflow="visible" />
                  </clipPath>
                  <path clipPath="url(#SVGID_2_)" fill="#7DBCE7" d="M200.9,199.8c0,13.9-32.2,25.1-71.9,25.1c-39.7,0-71.9-11.3-71.9-25.1c0-13.9,32.2-25.1,71.9-25.1C168.7,174.7,200.9,185.9,200.9,199.8L200.9,199.8z M200.9,199.8" />
                </g>
                <path fill="#9EDCF2" d="M46.9,125.9l-2.1,7.2c0,0-0.5,2.6,1.9,3.1c2.6-0.1,2.4-2.5,2.2-3.2L46.9,125.9L46.9,125.9z M46.9,125.9" />
                <path fill="#010101" d="M255.8,95.6l0.2-0.9c-21.1-4.2-42.7-4.3-55.8-3.7c2.1-7.7,2.8-16.7,2.8-26.6c0-14.3-5.4-25.7-14-34.3c1.5-4.9,3.5-15.8-2-29.7c0,0-9.8-3.1-32.1,11.8c-8.7-2.2-18-3.3-27.3-3.3c-10.2,0-20.5,1.3-30.2,3.9C74.4-2.9,64.3,0.3,64.3,0.3c-6.6,16.5-2.5,28.8-1.3,31.8c-7.8,8.4-12.5,19.1-12.5,32.2c0,9.9,1.1,18.8,3.9,26.5c-13.2-0.5-34-0.3-54.4,3.8l0.2,0.9c20.4-4.1,41.4-4.2,54.5-3.7c0.6,1.6,1.3,3.2,2,4.7c-13,0.4-35.1,2.1-56.3,8.1l0.3,0.9c21.4-6,43.7-7.6,56.6-8c7.8,14.4,23,23.8,50.2,26.7c-3.9,2.6-7.8,7-9.4,14.5c-5.3,2.5-21.9,8.7-31.9-8.5c0,0-5.6-10.2-16.3-11c0,0-10.4-0.2-0.7,6.5c0,0,6.9,3.3,11.7,15.6c0,0,6.3,21,36.4,14.2V177c0,0-0.6,7.7-7.7,10.2c0,0-4.2,2.9,0.3,4.5c0,0,19.5,1.6,19.5-14.4v-23.6c0,0-0.8-9.4,3.8-12.6v38.8c0,0-0.3,9.3-5.1,12.8c0,0-3.2,5.7,3.8,4.2c0,0,13.4-1.9,14-17.6l0.3-39.3h3.2l0.3,39.3c0.6,15.6,14,17.6,14,17.6c7,1.6,3.8-4.2,3.8-4.2c-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6,3.6,3.8,12.3,3.8,12.3v23.6c0,16,19.5,14.4,19.5,14.4c4.5-1.6,0.3-4.5,0.3-4.5c-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8c29-2.9,42.9-12.2,49.3-26.8c12.7,0.3,35.6,1.9,57.4,8.1l0.3-0.9c-21.7-6.1-44.4-7.7-57.3-8.1c0.6-1.5,1.1-3,1.6-4.6C212.9,91.4,234.6,91.4,255.8,95.6L255.8,95.6z M255.8,95.6" />
                <path fill="#F5CCB3" d="M174.6,63.7c6.2,5.7,9.9,12.5,9.9,19.8c0,34.4-25.6,35.3-57.2,35.3c-31.6,0-57.2-4.8-57.2-35.3c0-7.3,3.6-14.1,9.8-19.7c10.3-9.4,27.7-4.4,47.4-4.4C147,59.4,164.3,54.3,174.6,63.7L174.6,63.7z M174.6,63.7" />
                <path fill="#FFFFFF" d="M108.3,85.3c0,9.5-5.3,17.1-11.9,17.1c-6.6,0-11.9-7.7-11.9-17.1c0-9.5,5.3-17.1,11.9-17.1C103,68.1,108.3,75.8,108.3,85.3L108.3,85.3z M108.3,85.3" />
                <path fill="#AF5C51" d="M104.5,85.5c0,6.3-3.6,11.4-7.9,11.4c-4.4,0-7.9-5.1-7.9-11.4c0-6.3,3.6-11.4,7.9-11.4C100.9,74.1,104.5,79.2,104.5,85.5L104.5,85.5z M104.5,85.5" />
                <path fill="#FFFFFF" d="M172.2,85.3c0,9.5-5.3,17.1-11.9,17.1c-6.6,0-11.9-7.7-11.9-17.1c0-9.5,5.3-17.1,11.9-17.1C166.8,68.1,172.2,75.8,172.2,85.3L172.2,85.3z M172.2,85.3" />
                <path fill="#AF5C51" d="M168.3,85.5c0,6.3-3.6,11.4-7.9,11.4c-4.4,0-7.9-5.1-7.9-11.4c0-6.3,3.6-11.4,7.9-11.4C164.8,74.1,168.3,79.2,168.3,85.5L168.3,85.5z M168.3,85.5" />
                <path fill="#AF5C51" d="M130.5,100.5c0,1.6-1.3,3-3,3c-1.6,0-3-1.3-3-3s1.3-3,3-3C129.1,97.5,130.5,98.8,130.5,100.5L130.5,100.5z M130.5,100.5" />
                <path fill="#AF5C51" d="M120.6,108c-0.2-0.5,0.1-1,0.6-1.2c0.5-0.2,1,0.1,1.2,0.6c0.8,2.2,2.8,3.6,5.1,3.6c2.3,0,4.3-1.5,5.1-3.6c0.2-0.5,0.7-0.8,1.2-0.6c0.5,0.2,0.8,0.7,0.6,1.2c-1,2.9-3.8,4.9-6.9,4.9C124.4,112.9,121.6,110.9,120.6,108L120.6,108z M120.6,108" />
                <path fill="#C4E5D9" d="M54.5,121.6c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C53.6,120.2,54.5,120.8,54.5,121.6L54.5,121.6z M54.5,121.6" />
                <path fill="#C4E5D9" d="M60.3,124.8c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C59.4,123.4,60.3,124,60.3,124.8L60.3,124.8z M60.3,124.8" />
                <path fill="#C4E5D9" d="M63.8,129c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C62.9,127.5,63.8,128.2,63.8,129L63.8,129z M63.8,129" />
                <path fill="#C4E5D9" d="M67,133.8c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C66.1,132.3,67,133,67,133.8L67,133.8z M67,133.8" />
                <path fill="#C4E5D9" d="M70.5,138.2c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C69.6,136.8,70.5,137.4,70.5,138.2L70.5,138.2z M70.5,138.2" />
                <path fill="#C4E5D9" d="M75.3,142.1c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C74.4,140.6,75.3,141.3,75.3,142.1L75.3,142.1z M75.3,142.1" />
                <path fill="#C4E5D9" d="M82,144.6c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C81.1,143.2,82,143.8,82,144.6L82,144.6z M82,144.6" />
                <path fill="#C4E5D9" d="M88.7,144.6c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C87.8,143.2,88.7,143.8,88.7,144.6L88.7,144.6z M88.7,144.6" />
                <path fill="#C4E5D9" d="M95.5,143.5c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C94.5,142.1,95.5,142.7,95.5,143.5L95.5,143.5z M95.5,143.5" />
              </g>
            </svg>
          </a>

          { /* LINKEDIN SVG */ }
          <a href='https://www.linkedin.com/in/daniel-w-shelton/' target='_blank' rel='noopener noreferrer'>
            <svg viewBox="0 0 512 130" className='other-svgs' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
              <title>https://www.linkedin.com/in/daniel-w-shelton</title>
              <g>
                <path d="M0,19.1635571 L19.9868963,19.1635571 L19.9868963,91.9683374 L56.9975677,91.9683374 L56.9975677,110.411135 L0,110.411135 L0,19.1635571" fill="#1A1918"></path>
                <path d="M75.4304675,17.8111213 C81.5825659,17.8111213 86.5756907,22.804246 86.5756907,28.9509455 C86.5756907,35.1075431 81.5825659,40.0889701 75.4304675,40.0889701 C69.2846678,40.0889701 64.2915431,35.1075431 64.2915431,28.9509455 C64.2915431,22.804246 69.2846678,17.8111213 75.4304675,17.8111213 L75.4304675,17.8111213 Z M65.8239438,48.5509174 L85.0369912,48.5509174 L85.0369912,110.38774 L65.8239438,110.38774 L65.8239438,48.5509174 Z" fill="#1A1918"></path>
                <path d="M95.662116,48.558116 L114.104014,48.558116 L114.104014,57.0101652 L114.360464,57.0101652 C116.919564,52.1448155 123.196738,47.0248155 132.545912,47.0248155 C152.01451,47.0248155 155.600309,59.8284148 155.600309,76.4742636 L155.600309,110.38774 L136.388162,110.38774 L136.388162,80.3219121 C136.388162,73.1458137 136.255888,63.9271142 126.393814,63.9271142 C116.406664,63.9271142 114.873364,71.7429877 114.873364,79.8072127 L114.873364,110.38774 L95.662116,110.38774 L95.662116,48.558116" fill="#1A1918"></path>
                <path d="M165.343606,19.1581582 L184.548555,19.1581582 L184.548555,73.6929069 L206.306306,48.5230228 L229.852907,48.5230228 L204.655128,77.1527311 L229.32561,110.411135 L205.182425,110.411135 L184.799606,79.8441054 L184.548555,79.8441054 L184.548555,110.411135 L165.343606,110.411135 L165.343606,19.1581582" fill="#1A1918"></path>
                <path d="M286.551733,99.6798313 C280.398735,107.495705 270.290109,111.982228 260.295761,111.982228 C241.089012,111.982228 225.719114,99.1678313 225.719114,79.3177083 C225.719114,59.4675852 241.089012,46.6639859 260.295761,46.6639859 C278.236457,46.6639859 289.499557,59.4675852 289.499557,79.3177083 L289.499557,85.3375325 L244.931262,85.3375325 C246.457364,92.6387065 251.971487,97.3780808 259.401336,97.3780808 C265.679409,97.3780808 269.902285,94.1747065 273.105659,89.8186573 L286.551733,99.6798313 L286.551733,99.6798313 Z M270.290109,72.2783831 C270.416084,65.8734341 265.42206,60.4951845 258.499712,60.4951845 C250.050362,60.4951845 245.437863,66.2585589 244.931262,72.2783831 L270.290109,72.2783831 L270.290109,72.2783831 Z" fill="#1A1918"></path>
                <path d="M362.567086,110.376942 L344.887339,110.376942 L344.887339,102.177743 L344.638088,102.177743 C341.683065,106.658868 334.262214,111.912942 325.550116,111.912942 C307.101919,111.912942 294.937195,98.5982425 294.937195,79.7685202 C294.937195,62.4756977 305.694594,46.5955993 323.367142,46.5955993 C331.31439,46.5955993 338.74154,48.7722742 343.097589,54.7902988 L343.34954,54.7902988 L343.34954,19.1581582 L362.567086,19.1581582 L362.567086,110.376942 L362.567086,110.376942 Z M329.510243,63.5023972 C319.911817,63.5023972 314.150243,69.9118453 314.150243,79.2529209 C314.150243,88.611993 319.911817,95.0070439 329.510243,95.0070439 C339.124865,95.0070439 344.887339,88.611993 344.887339,79.2529209 C344.887339,69.9118453 339.124865,63.5023972 329.510243,63.5023972 L329.510243,63.5023972 Z" fill="#1A1918"></path>
                <path d="M501.763599,0 L391.342566,0 C386.065996,0 381.779234,4.18238313 381.779234,9.33927592 L381.779234,120.224619 C381.779234,125.386011 386.065996,129.574692 391.342566,129.574692 L501.763599,129.574692 C507.049167,129.574692 511.355726,125.386011 511.355726,120.224619 L511.355726,9.33927592 C511.355726,4.18238313 507.049167,0 501.763599,0" fill="#006087"></path>
                <path d="M410.603304,17.8390158 C416.749104,17.8390158 421.741329,22.8321406 421.741329,28.9788401 C421.741329,35.1300387 416.749104,40.1249631 410.603304,40.1249631 C404.444907,40.1249631 399.458981,35.1300387 399.458981,28.9788401 C399.458981,22.8321406 404.444907,17.8390158 410.603304,17.8390158 L410.603304,17.8390158 Z M400.990482,48.5779121 L420.208928,48.5779121 L420.208928,110.414735 L400.990482,110.414735 L400.990482,48.5779121 Z" fill="#FFFFFF"></path>
                <path d="M432.262974,48.5779121 L450.699473,48.5779121 L450.699473,57.026362 L450.955023,57.026362 C453.519522,52.1655114 459.789497,47.0392127 469.138671,47.0392127 C488.60007,47.0392127 492.193069,59.8464112 492.193069,76.4958594 L492.193069,110.414735 L472.98812,110.414735 L472.98812,80.3435079 C472.98812,73.1692091 472.855845,63.9460105 463.00097,63.9460105 C452.999424,63.9460105 451.467923,71.7582847 451.467923,79.8243093 L451.467923,110.414735 L432.262974,110.414735 L432.262974,48.5779121" fill="#FFFFFF"></path>
              </g>
            </svg>
          </a>
        </div>
        <Link to={ROUTES.LANDING}>
          <button className='raise'>RETURN TO HOME PAGE</button>
        </Link>
      </div>
    );
  }
}

export default Contact;
