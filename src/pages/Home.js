import Hero from '../components/Hero';
import Catagories from '../components/Catagories';
import OverviewArticles from '../components/OverviewArticles';

// Standard CSS Red looks very nice, perhaps a color for buttons or some other small component

function Home() {
  return (
    <main>
      <Hero />
      <OverviewArticles />
      <Catagories />
    </main>
  );
}

export default Home;
