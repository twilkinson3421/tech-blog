import classes from './Hero.module.css';

function Hero() {
  return (
    <div className={classes.hero}>
      <h1 className={classes.herotitle}>
        Title, <br /> Text
      </h1>
      <p className={classes.herodesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui
        ut ornare lectus sit amet est placerat.
      </p>
    </div>
  );
}

export default Hero;
