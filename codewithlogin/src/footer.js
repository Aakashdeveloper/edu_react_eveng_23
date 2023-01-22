import React from 'react';

const Footer = (props) => {
    return(
        <>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel</h3>
                <div>
                    <a href="https://facebook.com/">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="facebook" className="socialImg"/>
                    </a>
                    <a href="https://Instagram.com/">
                        <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="instagram" className="socialImg"/>
                    </a>
                </div>
            </center>
        </>
    )
}

export default Footer;