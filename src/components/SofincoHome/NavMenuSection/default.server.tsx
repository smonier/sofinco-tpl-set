import { RenderChildren, jahiaComponent } from "@jahia/javascript-modules-library";
import { t } from "i18next";
import classes from "../styles.module.css";

interface MegaNavSectionProps {
  title: string;
  description?: string;
  accentLabel?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:megaNavSection",
    displayName: "Mega menu section",
  },
  ({ title, description, accentLabel }: MegaNavSectionProps, { renderContext }) => (
    <section className={classes.megaMenuSection} aria-label={title}>
      <div className={classes.megaMenuSectionHeader}>
        {accentLabel && <span className={classes.sectionAccent}>{accentLabel}</span>}
        <h3 className={classes.sectionTitle}>{title}</h3>
        {description && <p className={classes.sectionDescription}>{description}</p>}
      </div>
      <div className={classes.sectionLinks}>
        <RenderChildren />
        {renderContext.isEditMode() && (
          <p className={classes.emptyState}>{t("sofincoHome.navigation.sectionEmptyState")}</p>
        )}
      </div>
    </section>
  ),
);
