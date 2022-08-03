import React from 'react';
import { IoMdFitness } from 'react-icons/io';
import './WorkoutsSection.css'
const WorkoutsSection = () => {
    return (
        <div className='container'>
            <h1 className='workout-heading'>Workouts</h1>
            <div>
                <p className='workout-para'>Max Fitness provide free training for every beginners. We have classes for legs, chest, arm workout, and so on. Watch the classes right now.</p>
            </div>
            <div className='workouts'>
                <div className='workout'>
                    <div className="icon">
                        <IoMdFitness />
                    </div>
                    <h2>Chest Workout</h2>
                    <p>Watch our free chest workout tutorial. It created by one of the best gym trainer in Bangladesh.</p>
                    <button className="secondary__button">Learn More</button>
                </div>
                <div className='workout'>
                    <div className="icon">
                        <IoMdFitness />
                    </div>
                    <h2>Leg Workout</h2>
                    <p>Watch our free leg workout tutorial. It created by one of the best gym trainer in Bangladesh.</p>
                    <button className="secondary__button">Learn More</button>
                </div>
                <div className='workout'>
                    <div className="icon">
                        <IoMdFitness />
                    </div>
                    <h2>Arm Workout</h2>
                    <p>Watch our free arm workout tutorial. It created by one of the best gym trainer in Bangladesh.</p>
                    <button className="secondary__button">Learn More</button>
                </div>
            </div>
            <div style={{ textAlign: "right" }}>
                <button className="secondary__button">All Workouts</button>
            </div>
        </div>
    );
};

export default WorkoutsSection;