import { RenderChildren, jahiaComponent } from "@jahia/javascript-modules-library";
import classes from "../styles.module.css";

interface OfferSectionProps {
  kicker?: string;
  title?: string;
  lead?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:offerSection",
    displayName: "Offres Sofinco",
  },
  ({ kicker, title, lead }: OfferSectionProps, { renderContext }) => (
    <section className={classes.offerSection} id="offres">
      <div className={classes.sectionHeader}>
        {kicker && <p className={classes.kicker}>{kicker}</p>}
        {title && <h2 className={classes.sectionTitle}>{title}</h2>}
        {lead && <p className={classes.sectionLead}>{lead}</p>}
      </div>
      <div className={classes.cardGrid}>
        <RenderChildren />
        {renderContext.isEditMode() && (
          <p className={classes.emptyState}>Ajoutez des cartes d'offres pour alimenter cette grille.</p>
        )}
      </div>
    </section>
  ),
);
