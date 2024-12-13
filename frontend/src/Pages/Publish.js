import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../App.css';
const Publish = () => {
    
    return (
        <div className='publish-page'>
        
            <h3 className="recent-publications-h2 mb-2">
                Fill the form or Mail us to publish your paper
            </h3>
            <iframe className='iframe' title='publish' src="https://docs.google.com/forms/d/e/1FAIpQLSezS8KPAyqOivBc6MJKCWBhQXSJrkT6h2F5S6ZQWuS4m_4CVg/viewform?embedded=true"
                width="840" height="485" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <h3 className="recent-publications-h2 mb-2">
                Mail Us <a href="mailto:publish@primepublicationhub.com">(publish@primepublicationhub.com)</a> <br /><br />
            </h3>
            <div className="recent-publications-p">
                <div className="recent-publications-p">
                    <p>Subject: Submission for Publication - [Title of Journal/Article/Research Paper]</p>
                    <p>Dear [Your Name or “Editorial Team”],</p>
                    <p>I hope this email finds you well. I would like to submit my journal/article/research paper for evaluation and publication with Prime Publication Hub. Below are the details of my submission:</p>
                    <h4>Author Information</h4>
                    <ul>
                        <li>Full Name: [Your First Name, Middle Name (if applicable), Last Name]</li>
                        <li>Email Address: [Your Email Address]</li>
                        <li>Phone Number: [Your Phone Number, including country code]</li>
                        <li>Website/Profile Link: [Your Website or Profile]</li>
                        <li>Institution/Affiliation: [Name of Institution or “Independent Researcher”]</li>
                        <li>State/Province: [Your Location]</li>
                    </ul>
                    <h4>Submission Details</h4>
                    <ul>
                        <li>Title of Paper: [Enter the title]</li>
                        <li>Journal Publisher: [Name of the publishing entity, if applicable]</li>
                        <li>Prepared Date: [Date of preparation or submission]</li>
                        <li>Publication Language: [Specify language, e.g., English]</li>
                    </ul>
                    <h4>Co-Authors Information (if applicable)</h4>
                    <ul>
                        <li>Author 1 Name: [Name]</li>
                        <li>Author 1 Email: [Email Address]</li>
                        <li>Author 2 Name: [Name]</li>
                        <li>Author 2 Email: [Email Address]</li>
                        <li>[Include additional authors, if any, or mention that all other authors will be emailed separately.]</li>
                    </ul>
                    <h4>Additional Details</h4>
                    <ul>
                        <li>Source Code Link: [Provide link, if applicable]</li>
                        <li>Attached File: [Attach the document in PDF or DOC format, ensuring it’s within the 10 MB limit.]</li>
                    </ul>
                    <p>I confirm that this submission is original and adheres to ethical publication standards. Please let me know if further details or documentation are required.</p>
                    <p>Thank you for your time and consideration. I look forward to hearing from you.</p>
                    <p>Best regards,</p>
                    <p>[Your Full Name]</p>
                    <p>[Your Email Address]</p>
                    <p>[Your Contact Number]</p>
                </div>
            </div>
            <Navbar />
            <Footer />
        </div>
    )
}

export default Publish
