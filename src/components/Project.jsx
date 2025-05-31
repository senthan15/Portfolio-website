import React from 'react'
import "../index.css"
import aidlink from "../assets/AidLink.jpg"
import shopverse from "../assets/Shopverse.webp"
import mindmesh from "../assets/Mindmesh.png"
import insightly from "../assets/Insightly.jpg"


function Project() {

    const projects =[
        {
            title:"AidLink",
            description:"AidLink is a full-stack application designed for coordinating emergency aid logistics during natural disasters. It connects field agents, supply centers, and central coordinators in real-time. It features dynamic maps, inventory tracking, task assignment, and analytics dashboards.",
            image:aidlink,
            tech:["React.js", "Tailwind CSS", "Mapbox","Node.js","Express.js","MongoDB"],
            live:"#",
            code:"#"
        },
        {
            title:"ShopVerse",
            description:"A scalable e-commerce solution with a complete admin dashboard for managing orders, inventory, user roles, and analytics. Users can browse, search, filter, and purchase products using Razorpay/Stripe integration.",
            image:shopverse,
            tech:["Next.js", "Tailwind CSS","Node.js","Express.js","MongoDB","Stripe API"],
            live:"#",
            code:"#"
        },
        {
            title:"MindMesh",
            description:"MindMesh helps users capture, organize, and connect thoughts using smart tagging and GPT-powered auto-suggestions. It’s a modern personal knowledge management system with markdown support and sync.",
            image:mindmesh,
            tech:["React.js", "Tailwind CSS", "Open AI","FastAPI","Supabase"],
            live:"#",
            live:"#",
            code:"#"
        },
        {
            title:"Insightly",
            description:"A fully-responsive SaaS dashboard that visualizes real-time business metrics like sales, user behavior, churn rate, and revenue forecasts. Includes multi-tenant support, role-based dashboards, and scheduled report exports.",
            image:insightly,
            tech:["React.js","Tailwind CSS","Django","OAuth","JWT"],
            live:"#",
            code:"#"
        }
    ]

  return (
    <div id="projects" className="project">
        <h3 className='head '>Projects</h3>
        <div className='pro-grid'>
            {projects.map((project,index)=>(
                
                <div key={index} className=' card-style pro-card'>
                <img src={project.image} alt={`${project.title} screenshot`} 
                className='pro-img'/>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className='pro-tech'>
                    {project.tech.map((item,idx) =>(
                        <span key={idx} className='tech-btn'>{item}</span>
                    ))}
                </div>
                <div className='code'>
                    <a href={project.live} className='code-btn'>🔗 Live</a>
                    <a href={project.code} className='code-btn'>💻 Code</a>
                </div>

                </div>
                



            ))}
       </div>
    </div>


  )
}

export default Project