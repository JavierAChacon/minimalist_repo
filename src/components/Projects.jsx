import '../Styles/projects.css'
import { ProjectCard } from './'
import mediaFinder from '../assets/images/mediaFinder.png'
import calculator from '../assets/images/calculator.png'
import quotes from '../assets/images/quotes.png'
import pokeredux from '../assets/images/pokeredux.png'
const Projects = () => {


  return (
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      <div className="projectCardContainer">
        <ProjectCard
          image={mediaFinder}
          title='Media Finder'
          github='https://github.com/JavierAChacon/youtubeClone'
          link='https://mediafinder.netlify.app/'
          />
        <ProjectCard
          image={calculator}
          title='Calculator'
          github='https://github.com/JavierAChacon/calculator'
          link='https://agoodcalculator.netlify.app/'
        />
        <ProjectCard
          image={quotes}
          title='Random Quotes'
          github='https://github.com/JavierAChacon/RandomQuotes'
          link='https://therandomquotes.netlify.app/'
        />
        <ProjectCard
        image={pokeredux}
        title='Pokeredux'
        github='https://github.com/JavierAChacon/Pokeredux'
        link='https://thepokeredux.netlify.app/#'
        />
      </div>
    </div>
  )
}

export default Projects