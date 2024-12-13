import React from 'react'
import { useState } from 'react';
import { data } from './data.js'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer.js';
const Publications = () => {
    // console.log(data);
    const [search, setSearch] = useState("");
    console.log(search);

    const dataPublication = data.filter((data) => {
        return search.toLowerCase() === '' ? data : data.journalTitle.toLowerCase().includes(search)
    }).map((data) => {


        return (
            <div className='publication-card'>
                <p key={data._id}>
                    <span className='authors'>{data.authorOneFname},{" "}{data.authorTwoFname},{" "}{data.authorThreeFname},{" "}{data.authorFourFname}{" "}and{" "}{data.authorFiveFname}.{" "}</span>
                    <span className='journalTitle'><Link className='publication-card-link' to={data.journalTitle}>{data.journalTitle}{" "}</Link></span>
                    <span className='journalPublisher'>{data.journalPublisher}{" "}</span>
                    <span className='publicationLanguage'>{data.publicationLanguage}{" "}</span>
                    <span className='institution'>{data.institution}{" "}</span>
                    <span className='website'><Link className='publication-card-link' to={data.website}>{data.website},{" "}</Link></span>
                    <span className='state'>{data.state}{" "}</span>
                    <span className='preparedDate'>{data.preparedDate}{" "}</span>
                    <span className='openPaper'>[<Link to={data.journalTitle}>Open</Link>]</span>
                    <span className='openPaper'>[<Link to={data.journalTitle}>Code</Link>]</span>
                    <span className='openPaper'>[<Link to={data.journalTitle}>GitHub</Link>]</span>
                </p>
            </div>
        )
    })

    return (

        <div>
            <div className="sectionTwoPublications">
                <div className="research-paper-component" >
                    <div className="research-paper-component-item">
                        <div className="card">
                            <div className="input-group mb-3">
                                <h5 className="card-header">Publications</h5>
                                <input type="text" className="form-control" placeholder="Search by title" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => { setSearch(e.target.value) }} />
                                <span className="input-group-text" id="basic-addon2"><img className='searchIcon' src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="icon-not-found" /></span>
                            </div>
                            <div className="card-body">
                                {dataPublication}
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li> 
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Publications
