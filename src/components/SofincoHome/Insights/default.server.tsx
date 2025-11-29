import { RenderChildren, jahiaComponent } from "@jahia/javascript-modules-library";
import { t } from "i18next";
import classes from "../styles.module.css";

interface InsightSectionProps {
  kicker?: string;
  title?: string;
  lead?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:insightSection",
    displayName: "Conseils Sofinco",
  },
  ({ kicker, title, lead }: InsightSectionProps, { renderContext }) => (
    <section className={classes.insights} id="conseils">
      <div className={classes.sectionHeader}>
        {kicker && <p className={classes.kicker}>{kicker}</p>}
        {title && <h2 className={classes.sectionTitle}>{title}</h2>}
        {lead && <p className={classes.sectionLead}>{lead}</p>}
      </div>
      <div className={classes.cardGrid}>
        <RenderChildren />
        {renderContext.isEditMode() && (
          <p className={classes.emptyState}>{t("sofincoHome.insights.emptyState")}</p>
        )}
      </div>
    </section>
  ),
);
