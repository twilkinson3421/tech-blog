import overviewArticles from '../data/overviewArticles.json';

import classes from './OverviewArticles.module.css';

function OverviewArticles() {
  return (
    <section className={classes.overviewArticlesSection}>
      {overviewArticles.map((articleovview) => {
        return (
          <div key={articleovview.id} className={classes.ovvarticleSingle}>
            <img
              src={articleovview.url}
              className={classes.ovvarticleImage}
              alt={'THUMBNAIL_' + articleovview.id}
            />
            <div className={classes.ovvarticleAllText}>
              <div className={classes.ovvarticleTopText}>
                <p>{articleovview.date}</p>
                <h2 className={classes.ovvarticleTitle}>
                  {articleovview.title}
                </h2>
              </div>
              <p>{articleovview.description}</p>
            </div>
            <div className={classes.ovvarticleReadMore}>
              <p>Read More</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default OverviewArticles;
