import { Link } from 'react-router-dom'
import './ProjectCard.scss'

function ProjectCard({item}) {
  return (
    <div className='projectCard'>
        <Link to="/">
          <img src={item.img} alt="" />
          <div className="details">
            <img src={item.pp} alt="" />
            <div className="info">
                <span>{item.cat}</span>
                <h3>{item.username}</h3>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default ProjectCard