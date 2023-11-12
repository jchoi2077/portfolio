import React, { useState } from 'react'
import './qualification.css'



const Qualification = () => {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }


    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">Personal History</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>setToggleState(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Experience
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>setToggleState(2)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                </div>
                <div className="qualification__sections">

                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern - Web Design</h3>
                                <span className="qualification__subtitle">Megatronics</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Current
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">P&C Licensed Agent</h3>
                                <span className="qualification__subtitle">Personal & Commercial</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Head Optician/ Lasik Sx Technician</h3>
                                <span className="qualification__subtitle">Eyecare Medical Corporation</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Optician</h3>
                                <span className="qualification__subtitle">Deans Optometry</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full-Stack Development</h3>
                                <span className="qualification__subtitle">Coding Dojo Bootcamp</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">B.S. Cognitive Science</h3>
                                <span className="qualification__subtitle">University of California, Irvine</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2013 - 2016
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">General Education</h3>
                                <span className="qualification__subtitle">Pasadena City College</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2011 - 2013
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification