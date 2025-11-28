import { RenderChildren, jahiaComponent } from "@jahia/javascript-modules-library";
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
      <div className={classes.brand} aria-label={brandName ?? "Sofinco"}>
        <span className={classes.brandMark} />
        <span className={classes.brandName}>{brandName ?? "Sofinco"}</span>
      </div>
      <nav className={classes.nav} aria-label="Navigation principale">
        <RenderChildren />
        {renderContext.isEditMode() && (
          <p className={classes.emptyState}>Ajoutez des liens de navigation dans cette zone.</p>
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
