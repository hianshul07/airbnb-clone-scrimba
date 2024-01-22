import NavBar from './components/NavBar';
import './App.css';
import Hero from './components/Hero';
import data from './data';
import Card from './components/Card';

const App = () => {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // // description={item.description}
        // price={item.price}
        // spots={item.openSpots}
        item={item}
      />
    );
  });

  return (
    <div>
      <NavBar />
      <Hero />
      {/* <Card /> */}
      <section className='card-list'>{cards}</section>
    </div>
  );
};

export default App;
