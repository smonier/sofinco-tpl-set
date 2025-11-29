import { RenderChildren, jahiaComponent } from "@jahia/javascript-modules-library";
import { t } from "i18next";
import classes from "../styles.module.css";

interface TestimonialSectionProps {
  kicker?: string;
  title?: string;
  lead?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:testimonialSection",
    displayName: "Témoignages Sofinco",
  },
  ({ kicker, title, lead }: TestimonialSectionProps, { renderContext }) => (
    <section className={classes.testimonials}>
      <div className={classes.sectionHeader}>
        {kicker && <p className={classes.kicker}>{kicker}</p>}
        {title && <h2 className={classes.sectionTitle}>{title}</h2>}
        {lead && <p className={classes.sectionLead}>{lead}</p>}
      </div>
      <div className={classes.metrics}>
        <RenderChildren />
        {renderContext.isEditMode() && (
          <p className={classes.emptyState}>{t("sofincoHome.testimonials.emptyState")}</p>
        )}
      </div>
    </section>
  ),
);
