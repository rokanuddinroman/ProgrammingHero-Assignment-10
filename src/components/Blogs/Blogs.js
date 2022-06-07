import React from 'react';
import Header from '../Header/Header';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className=''>
            <Header color={"#000"}></Header>
            <div className="blogs__container container">
                <h2>Blogs</h2>
                <div className="blogs">
                    <div>
                        <h1>Difference between authorization and authentication</h1>
                        <p>If I want to verify someone or something. There is a process of doing that. Thats called Authentication. On the other hand Authorization is if I wanna verify what specific data a user has access.</p>
                    </div>
                    <div>
                        <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <p>Firebase is full of features. But for I now I'm using Firebase as my hosting and authenticating my users. People mostly use Firebase for Database, App development and more. Some more Fire base Alternatives are Parse, Back4App, AWS Amplify, Kuzzle, Couchbase and many more.</p>
                    </div>
                    <div>
                        <h1>What other services does firebase provide other than authentication</h1>
                        <p> Tthere are some other features on firebase. Like we can see full analytics of my website using Firebase. I can see my website traffic growth and user engagement. We can Cloud Messaging, Real time Database with Firebase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;