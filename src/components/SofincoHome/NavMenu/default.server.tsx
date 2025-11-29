import { RenderChildren, jahiaComponent } from "@jahia/javascript-modules-library";
import { t } from "i18next";
import classes from "../styles.module.css";

interface MegaNavProps {
  brandName?: string;
  brandTagline?: string;
  brandHref?: string;
  brandImage?: { path?: string; url?: string } | string;
  languages?: string;
}

const parseLanguages = (languages?: string) =>
  languages
    ?.split(",")
    .map((language) => language.trim())
    .filter(Boolean) ?? ["FR", "EN"];

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:megaNav",
    displayName: "Mega navigation",
  },
  (
    { brandName, brandHref, brandTagline, brandImage, languages }: MegaNavProps,
    { renderContext },
  ) => {
    const languageOptions = parseLanguages(languages);
    const menuId = "sofincotplset-mega-menu";
    const brandImageUrl =
      (typeof brandImage === "string" && brandImage) || brandImage?.url || brandImage?.path;

    return (
      <nav className={classes.megaNav} aria-label={t("sofincoHome.navigation.label")}>
        <input id={`${menuId}-toggle`} type="checkbox" className={classes.megaNavToggle} />
        <div className={classes.megaNavBar}>
          <div className={classes.navBrand}>
            <a
              href={brandHref ?? "#"}
              className={classes.navBrandLink}
              aria-label={brandName ?? t("sofincoHome.navigation.brandFallback")}
            >
              {brandImageUrl ? (
                <img
                  src={brandImageUrl}
                  alt={brandName ?? t("sofincoHome.navigation.brandFallback")}
                  className={classes.navBrandImage}
                />
              ) : (
                <span className={classes.brandMark} aria-hidden="true" />
              )}
              <span className={classes.navBrandText}>
                <span className={classes.navBrandTitle}>{brandName ?? t("sofincoHome.navigation.brandFallback")}</span>
                {brandTagline && <span className={classes.navBrandTagline}>{brandTagline}</span>}
              </span>
            </a>
          </div>

          <div className={classes.navControls}>
            <div className={classes.languageSwitcher} role="group" aria-label={t("sofincoHome.navigation.languageLabel")}>
              {languageOptions.map((language, index) => (
                <button
                  key={language}
                  type="button"
                  className={`${classes.languagePill} ${index === 0 ? classes.languageActive : ""}`.trim()}
                  aria-pressed={index === 0}
                >
                  {language}
                </button>
              ))}
            </div>
            <label className={classes.menuToggleButton} htmlFor={`${menuId}-toggle`}>
              <span className={classes.menuToggleIcon} aria-hidden="true" />
              <span className={classes.menuToggleLabel}>{t("sofincoHome.navigation.menuLabel")}</span>
            </label>
          </div>
        </div>

        <div className={classes.megaMenu}>
          <div className={classes.megaMenuInner}>
            <RenderChildren />
            {renderContext.isEditMode() && (
              <p className={classes.emptyState}>{t("sofincoHome.navigation.emptyState")}</p>
            )}
          </div>
          <div className={classes.megaMenuFooter}>
            <div>
              <p className={classes.megaMenuTitle}>{t("sofincoHome.navigation.footerTitle")}</p>
              <p className={classes.megaMenuHelper}>{t("sofincoHome.navigation.footerHelper")}</p>
            </div>
            <a className={classes.primaryButton} href="#">
              {t("sofincoHome.navigation.footerCta")}
            </a>
          </div>
        </div>
      </nav>
    );
  },
);
