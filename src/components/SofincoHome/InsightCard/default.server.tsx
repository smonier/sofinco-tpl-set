import { jahiaComponent } from "@jahia/javascript-modules-library";
import classes from "../styles.module.css";

interface InsightCardProps {
  "jcr:title"?: string;
  description?: string;
  ctaLabel?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:insightCard",
    displayName: "Carte conseil",
  },
  ({ "jcr:title": title, description, ctaLabel }: InsightCardProps) => (
    <article className={classes.card}>
      {title && <h3 className={classes.cardTitle}>{title}</h3>}
      {description && <p className={classes.cardText}>{description}</p>}
      {ctaLabel && <button className={classes.secondaryButton}>{ctaLabel}</button>}
    </article>
  ),
);
