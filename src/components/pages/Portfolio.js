import React from 'react';
import Project from '../Projects';

const projects = [
    {
        title: 'Project 1',
        image: '/project1.png',
        description: 'This is the first project I worked on in my bootcamp. It was a perfect playlist generator. The user would select from genre and activity options and it would generate a playlist using HTML and CSS.',
        link: 'https://github.com/N3tRunn3rr/group-stuff',
    },
    {
        title: 'Project 2',
        image: '/project2.png',
        description: 'This is the second project I worked on in my bootcamp.  It was a subscription management service. Subscriptions would be able to be tracked and managed based on the individual user. This project used the MVC framework.',
        link: 'https://github.com/danielgregoire34/electronic-bill-management-system',
    },
    {
        title: 'Project 3',
        image: '/project3.png',
        description: 'This is the third and most recent project. I am working on it currently with my team as it is not finished. I will update it on here when it is finished.',
        link: 'https://github.com/N3tRunn3rr/Wise-Wagers',
    },

];


const styles = {
    Portfolio: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'left',
        padding: '10px'
    },
    PortfolioTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    PortfolioImage: {
        width: '100%',
        marginBottom: '10px',
    },
    PortfolioDescription: {
        marginBottom: '10px',
    },
    PortfolioLink: {
        color: '#fff',
        textDecoration: 'none',
    },
};

function Portfolio() {
    return (
        <div style={styles.Portfolio}>
            <h1 style={styles.PortfolioTitle}>Portfolio</h1>
            {projects.map((project) => (
                <Project
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    link={project.link}
                    
                />
            ))}
        </div>
    );
}

export default Portfolio;