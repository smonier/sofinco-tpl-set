import { jahiaComponent } from "@jahia/javascript-modules-library";
import classes from "../styles.module.css";

interface HighlightCardProps {
  "jcr:title"?: string;
  description?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:highlightCard",
    displayName: "Engagement",
  },
  ({ "jcr:title": title, description }: HighlightCardProps) => (
    <article className={classes.highlightCard}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </article>
  ),
);
