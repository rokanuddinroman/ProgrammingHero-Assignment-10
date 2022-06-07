import React from 'react';
import { IoMdFitness } from 'react-icons/io';
import './WorkoutsSection.css'
const WorkoutsSection = () => {
    return (
        <div className='container'>
            <h1 className='workout-heading'>Workouts</h1>
            <div>
                <p className='workout-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aspernatur nisi ut dignissimos, mollitia autem repudiandae numquam fugiat dolor minima.</p>
            </div>
            <div className='workouts'>
                <div className='workout'>
                    <div className="icon">
                        <IoMdFitness />
                    </div>
                    <h2>Chest Workout</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aperiam, quis quibusdam nostrum ea aliquid.</p>
                    <button className="secondary__button">Learn More</button>
                </div>
                <div className='workout'>
                    <div className="icon">
                        <IoMdFitness />
                    </div>
                    <h2>Leg Workout</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aperiam, quis quibusdam nostrum ea aliquid.</p>
                    <button className="secondary__button">Learn More</button>
                </div>
                <div className='workout'>
                    <div className="icon">
                        <IoMdFitness />
                    </div>
                    <h2>Arm Workout</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aperiam, quis quibusdam nostrum ea aliquid.</p>
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