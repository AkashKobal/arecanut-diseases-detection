import React from 'react'
import '../assets/css/componentFooter.css'


const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer">
                <div className="container copyright text-center mt-4">
                    <p>
                        © <span>Copyright</span>{" "}
                        <strong className="px-1 sitename">Akash Kobal</strong>{" "}
                        <span>All Rights Reserved</span>
                    </p>
                </div>
            </footer>
        </div>

    )
}

export default Footer
