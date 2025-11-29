import { jahiaComponent } from "@jahia/javascript-modules-library";
import { t } from "i18next";
import classes from "../styles.module.css";

interface HeroProps {
  kicker?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  trustPoints?: string[];
  panelLabel?: string;
  panelValue?: string;
  panelHint?: string;
  panelAmountLabel?: string;
  panelAmountValue?: string;
  panelDurationLabel?: string;
  panelDurationValue?: string;
  panelProcessLabel?: string;
  panelProcessValue?: string;
}

const defaultTrustPoints = () =>
  t("sofincoHome.hero.defaultTrustPoints", { returnObjects: true }) as string[];

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:heroSection",
    displayName: "Hero Sofinco",
  },
  (
    {
      kicker,
      title,
      description,
      primaryCtaLabel,
      secondaryCtaLabel,
      trustPoints,
      panelAmountLabel,
      panelAmountValue,
      panelDurationLabel,
      panelDurationValue,
      panelHint,
      panelLabel,
      panelProcessLabel,
      panelProcessValue,
      panelValue,
    }: HeroProps,
  ) => {
    const trustList = trustPoints && trustPoints.length > 0 ? trustPoints : defaultTrustPoints();

    return (
      <section className={classes.hero} id="simuler">
        <div className={classes.heroContent}>
          {kicker && <p className={classes.kicker}>{kicker}</p>}
          {title && <h1 className={classes.title}>{title}</h1>}
          {description && <p className={classes.subtitle}>{description}</p>}
          <div className={classes.heroCtas}>
            {primaryCtaLabel && <button className={classes.primaryButton}>{primaryCtaLabel}</button>}
            {secondaryCtaLabel && <button className={classes.ghostButton}>{secondaryCtaLabel}</button>}
          </div>
          {trustList.length > 0 && (
            <ul className={classes.trustList}>
              {trustList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={classes.heroPanel}>
          <div className={classes.panelCard}>
            {panelLabel && <p className={classes.panelLabel}>{panelLabel}</p>}
            {panelValue && <p className={classes.panelValue}>{panelValue}</p>}
            {panelHint && <p className={classes.panelHint}>{panelHint}</p>}
            <div className={classes.panelGrid}>
              <div>
                {panelAmountLabel && <p className={classes.panelSubLabel}>{panelAmountLabel}</p>}
                {panelAmountValue && <p className={classes.panelStrong}>{panelAmountValue}</p>}
              </div>
              <div>
                {panelDurationLabel && <p className={classes.panelSubLabel}>{panelDurationLabel}</p>}
                {panelDurationValue && <p className={classes.panelStrong}>{panelDurationValue}</p>}
              </div>
              <div>
                {panelProcessLabel && <p className={classes.panelSubLabel}>{panelProcessLabel}</p>}
                {panelProcessValue && <p className={classes.panelStrong}>{panelProcessValue}</p>}
              </div>
            </div>
            {secondaryCtaLabel && <button className={classes.secondaryButton}>{secondaryCtaLabel}</button>}
          </div>
        </div>
      </section>
    );
  },
);
