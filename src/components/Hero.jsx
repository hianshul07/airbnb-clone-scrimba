import heroImg from '../images/photo-grid.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <img className='hero-image' src={heroImg} alt='' />
      <h1 className='hero-header'>Online Experiences</h1>
      <p className='hero-text'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};
export default Hero;
