import React, {useState, useEffect} from 'react';
import './Projects.css';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const games = [
    {
      title: 'Paper Blades',
      description: 'Paper Blades is a dynamic roguelike in which you command a team of origami samurai as they fight for their paper homes against the sinister Inkies. Explore mysterious islands, upgrade your feudal crew, discover new skills and never give up - the gods are on your side! To win, you will need masterful tactics and an unwavering voice - although you control the team leader, you can influence the rest of the team with voice commands. Get ready for a battle of paper!',
      link: 'https://place-holders.itch.io/paper-blades',
      pitchdeckUrl: '/pitch/paper_blades_pitchdeck.pdf',
      img: '/img/paper_blades.png',
      pitchDeckExists: true
    },
    {
      title: 'KnotFun',
      description: 'KnotFun is a unique game combining swarm-style gameplay with roguelike progression and character development. The game is set in a Wild West atmosphere with a slight futuristic twist. Three bounty hunters wake up in a bar after a long night — for unknown reasons, they find themselves tied together with ropes in a literal KNOT. Under these unusual circumstances, they must face hordes of robots while dealing with the challenge of limited mobility in order to UNTIE this peculiar mystery. The game is designed to provide solid fun during LOOSE hangouts with friends in local co-op for up to 4 players.',
      link: 'https://place-holders.itch.io/knot-fun',
      pitchdeckUrl: '/pitch/knot_fun_pitchdeck.pdf',
      img: '/img/knot_fun.png',
      pitchDeckExists: false // pitch deck doesn't exist - show modal
    }
  ];

  // const checkFileExists = async (url) => {
  //   try {
  //     const response = await fetch(process.env.PUBLIC_URL + url, { method: 'HEAD' });
  //     return response.ok;
  //   } catch (error) {
  //     return false;
  //   }
  // };

  // ESC key support dla modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showModal) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscKey);
      // Zablokuj scrollowanie
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // Przywróć scrollowanie
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleProjectClick = async (game) => {
    if (game.pitchdeckUrl) {
      if (game.pitchDeckExists) {
        // check if pitch deck exists
        window.open(process.env.PUBLIC_URL + game.pitchdeckUrl, '_blank');
      } else {
        // show modal
        setModalContent({
          title: game.title,
          message: "Pitch deck for this project is currently being prepared and will be available soon."
        });
        setShowModal(true);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section id="projects" className="projects-section">
        <h2>Our <span className="accent">Projects</span></h2>
        <div className="projects-grid">
          {games.map((game, i) => (
            <div 
              key={i} 
              className="project-card"
              onClick={() => handleProjectClick(game)}
            >
              <div className="project-image">
                <img 
                  src={process.env.PUBLIC_URL + game.img}
                  alt={game.title}
                />
                {/* <div className="project-overlay">
                  <a href={game.link} target="_blank" rel="noreferrer" className="btn btn-primary">Play on itch.io</a>
                </div> */}
                <div className="project-overlay">
                    <div className="overlay-content">
                      <div className="play-button">
                        <span>
                          {game.pitchDeckExists ? 'View Pitch Deck' : 'Pitch Deck Coming Soon'}
                        </span>
                      </div>
                      <div className="arrow-indicator">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="project-content">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                
                {/* Przyciski na dole karty projektu */}
                <div className="project-links">
                  {/* <a 
                    href={game.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Play on itch.io
                  </a> */}
                  
                  {/* {game.pitchdeckUrl && (
                    <a 
                      href={process.env.PUBLIC_URL + game.pitchdeckUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-link btn-pitch"
                    >
                      View the Pitch Deck
                    </a>
                  )} */}
                  {game.pitchdeckUrl && (
                    <span className={`btn-link btn-pitch-info ${!game.pitchDeckExists ? 'coming-soon' : ''}`}>
                      📄 {game.pitchDeckExists ? 'Click to view Pitch Deck' : 'Pitch Deck Coming Soon'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal dla 404/placeholder z obsługą ESC */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📄 Pitch Deck Placeholder</h3>
              <button className="modal-close" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="error-icon">🚧</div>
              <h4>{modalContent.title}</h4>
              <p>{modalContent.message}</p>
              <p className="modal-subtitle">
                In the meantime, you can check out our Discord community or contact us for more information.
              </p>
              <p className="modal-tip">
                Press <kbd>ESC</kbd> or click outside to close
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn-primary" onClick={closeModal}>Got it!</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;