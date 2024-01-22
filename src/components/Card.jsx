/* eslint-disable react/prop-types */
// import profilePhoto from '../images/katie-zaferes.png';
import starPhoto from '../images/star.png';
import './Card.css';

const Card = (props) => {
  let badgeText;
  if (props.item.spots === 0) {
    badgeText = 'Sold Out';
  } else if (props.item.location === 'Online') {
    badgeText = 'Online';
  }
  return (
    // <div className='card'>
    <section className=''>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img
        className='profile-photo'
        src={`./user-images/${props.item.coverImg}`}
        alt='profile photo'
      />
      <div className='profile-info'>
        <div className='rating'>
          <img
            className='star-photo'
            src={starPhoto}
            alt='Photo of a red star'
          />
          <p>
            {props.item.stats.rating} ({props.item.stats.reviewCount}) . {props.item.location}
          </p>
        </div>
        <p className='tagline'>{props.item.title}</p>
        {/* <p>{props.item.description}</p> */}
        <p className='price'>
          <b>from ${props.item.price} /</b> person
        </p>
        <p className='spots'></p>
      </div>
    </section>
    // </div>
  );
};
export default Card;
