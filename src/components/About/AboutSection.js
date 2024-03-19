import css from "./AboutSection.module.css";
import cross from "../../images/svg/add-sharp.svg";
import crossTicker from "../../images/svg/add-sharpcrossMax.svg";
import aboutImage from "../../images/mobileImages/about/about_image@1x.png";
import aboutImage2x from "../../images/mobileImages/about/about_image@2x.png";
export const AboutSection = () => {
  return (
    <section className={css.aboutSection}>
      <h2>
        <span className={css.styleTitleAbout}>
          A STORY THAT <br /> STARTED <br /> WITH
        </span>{" "}
        <span className={css.styleTitleAboutTwo}>
          ONE <br /> SIMPLE <br />
          APE
        </span>
      </h2>
      <p className={css.textAbout}>
        WHO GOT <br />
        FED UP WITH BORING <br />
        AND HYPOCRITIC <br />
        COMMONPLACE THIS IS <br />
        HOW THE IDEA OF <br />
        ESCAPING AND DYNAMIC <br />
        JOURNEY ON THE YACHT
      </p>
      <img src={cross} alt="Cross" className={css.crossStyle}></img>
      <p className={css.paragraphAbout}>
        EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE
        RANDOMLY GENERATED BY USERS
      </p>
      <picture className={css.stylePicture}>
        <source
          media="(max-width: 480px)"
          srcSet={`${aboutImage} 1x, ${aboutImage2x} 2x`}
        ></source>
        <img src={aboutImage} alt="A monkey in a cap"></img>
      </picture>
      <div className={css.containerTicker}>
        <div className={css.merquee}>
          <div className={css.tickerStyle}>
            <p>HAVE NO LIMITS</p>
            <img
              src={crossTicker}
              alt="Cross"
              className={css.crossTickerStyle}
            ></img>
          </div>
          <div className={css.tickerStyle}>
            <p>HAVE NO LIMITS</p>
            <img
              src={crossTicker}
              alt="Cross"
              className={css.crossTickerStyle}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
