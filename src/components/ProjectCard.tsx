import { Card, Badge } from 'react-bootstrap';
import '../assets/styles/ProjectCard.css'
import { Project } from './ProjectList';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {

  const hasSite = project.siteLink !== ''

  return(
    <Card className="project-card m-2" data-aos="fade-up" data-aos-delay={project.delay} data-aos-duration="1000">
      {hasSite ? (
        <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" draggable="false" />
        </a>
      ) : (
        <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" draggable="false" />
      )}
      <Card.Body>
        <Card.Title className="project-title">{project.title}</Card.Title>
        <Card.Text className="project-description">{project.description}</Card.Text>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <Badge key={index} pill className="tec-badge">{tech}</Badge>
          ))}
        </div>
        <div>
          {hasSite &&
            <Badge className="px-3 mt-2 mb-1 me-2 link-badge" bg="secondary" pill>
              <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Ir para o site</a>
            </Badge>
          }
          <Badge className="px-3 link-badge" bg="secondary" pill>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Ir para o código no GitHub</a>
          </Badge>
        </div>
      </Card.Body>
    </Card>     
  )
}

export default ProjectCard;