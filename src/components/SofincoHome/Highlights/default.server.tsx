import { RenderChildren, jahiaComponent } from "@jahia/javascript-modules-library";
import { t } from "i18next";
import classes from "../styles.module.css";

interface HighlightSectionProps {
  kicker?: string;
  title?: string;
  lead?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:highlightSection",
    displayName: "Engagements Sofinco",
  },
  ({ kicker, title, lead }: HighlightSectionProps, { renderContext }) => (
    <section className={classes.highlightSection} id="services">
      <div className={classes.sectionHeader}>
        {kicker && <p className={classes.kicker}>{kicker}</p>}
        {title && <h2 className={classes.sectionTitle}>{title}</h2>}
        {lead && <p className={classes.sectionLead}>{lead}</p>}
      </div>
      <div className={classes.highlightGrid}>
        <RenderChildren />
        {renderContext.isEditMode() && (
          <p className={classes.emptyState}>{t("sofincoHome.highlights.emptyState")}</p>
        )}
      </div>
    </section>
  ),
);
