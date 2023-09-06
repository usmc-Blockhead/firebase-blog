import React from 'react'

const Home = () => {
    return (
        <div className="container padding">
        <div className="col-md-12">
            <div className="row text-left mx-0">
                <h1>
                    Welcome to my_Blog!
                </h1>
                <p>---------------------------</p>
                <h2>September 04, 2023</h2>
                <p>
                    I wanted to create a project for my portfolio that would be useful and show my versatility.  I also wanted to create a project that I could build in stages and take you along on the journey and the mishaps that I will encounter along the way.  I researched many different ways to build a blog and decided to use React and Firebase.
                </p>
                <p>---------------------------</p>
                <p>
                    Come with me on a journey while I build this blog to include in my portfolio. I will be adding new features and functionality as we continue along.
                </p>  
                <p>
                    I will be using the following technologies:
                </p>
                <p>
                    <ul className="techList">
                        <li>React, React Router, React Bootstrap, and Firebase for the front-end</li>
                        <li>Node.js, Express, MongoDB Atlas and Firebase for the back-end</li>
                        <li>React Context API for state management</li>
                        <li>React Hooks for functional components</li>
                        <li>React Router for routing</li>
                        <li>React Bootstrap for styling</li>
                        <li>Firebase for authentication</li>
                        <li>Firebase Hosting for hosting the application</li>
                        <li>Firebase Storage for storing images</li>
                        <li>React Toastify for displaying toast messages</li>
                        <li>React Tag Input for tags</li>
                        <li>React Paginate for pagination</li>
                        <li>React Helmet for SEO</li>
                        <li>React Quill for the text editor</li>
                        <li>React Icons for icons</li>
                    </ul>
                </p>
                <p>---------------------------</p>
                <h2>September 05, 2023</h2>
                <p>
                    I embark on this journey to build a blog using React not really certain how to deploy to Firebase.  So I turned to the interenet for some support and found a great article on Knowledgehut.com <a href="https://www.knowledgehut.com/blog/web-development/deploying-react-app-to-firebase#create-a-simple-react-application-with-create-react-app-%C2%A0">How to Deploy React Application to Firebase</a>  by Mritunjay Gupta that walked me through the process.  I was able to deploy the starter "create-react-app" application to Firebase and it is now live.  I am so excited to be able to share this journey with you, as I take that starter code and turn it into this blog.
                </p>
            </div>
        </div>
    </div>
    )
}

export default Home;