import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Start:</h3>
                <span className="about__subtitle">July, 2022</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10+ Projects</span>
            </div>

            <div className="about__box">
                <i class='bx bx-support about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Intern!</span>
            </div>
        </div>
    )
}

export default Info