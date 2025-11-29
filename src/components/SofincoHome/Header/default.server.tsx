import { RenderChildren, jahiaComponent } from "@jahia/javascript-modules-library";
import { t } from "i18next";
import classes from "../styles.module.css";

interface HeaderProps {
  brandName?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:sofincoHeader",
    displayName: "Sofinco header",
  },
  ({ brandName, primaryCtaLabel, secondaryCtaLabel }: HeaderProps, { renderContext }) => (
    <header className={classes.header}>
      <div className={classes.brand} aria-label={brandName ?? t("sofincoHome.header.brandDefault")}>
        <span className={classes.brandMark} />
        <span className={classes.brandName}>{brandName ?? t("sofincoHome.header.brandDefault")}</span>
      </div>
      <nav className={classes.nav} aria-label={t("sofincoHome.header.navLabel")}>
        <RenderChildren />
        {renderContext.isEditMode() && (
          <p className={classes.emptyState}>{t("sofincoHome.header.emptyState")}</p>
        )}
      </nav>
      <div className={classes.actions}>
        {secondaryCtaLabel && (
          <button type="button" className={classes.secondaryButton}>
            {secondaryCtaLabel}
          </button>
        )}
        {primaryCtaLabel && (
          <button type="button" className={classes.primaryButton}>
            {primaryCtaLabel}
          </button>
        )}
      </div>
    </header>
  ),
);
