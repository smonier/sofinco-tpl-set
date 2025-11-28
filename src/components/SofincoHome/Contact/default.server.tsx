import { jahiaComponent } from "@jahia/javascript-modules-library";
import classes from "../styles.module.css";

interface ContactSectionProps {
  kicker?: string;
  title?: string;
  lead?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:contactSection",
    displayName: "Contact Sofinco",
  },
  ({ kicker, title, lead, primaryCtaLabel, secondaryCtaLabel }: ContactSectionProps) => (
    <section className={classes.contact}>
      <div>
        {kicker && <p className={classes.kicker}>{kicker}</p>}
        {title && <h2 className={classes.sectionTitle}>{title}</h2>}
        {lead && <p className={classes.sectionLead}>{lead}</p>}
      </div>
      <div className={classes.contactActions}>
        {primaryCtaLabel && <button className={classes.primaryButton}>{primaryCtaLabel}</button>}
        {secondaryCtaLabel && <button className={classes.ghostButton}>{secondaryCtaLabel}</button>}
      </div>
    </section>
  ),
);
