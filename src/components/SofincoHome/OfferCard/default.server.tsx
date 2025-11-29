import { jahiaComponent } from "@jahia/javascript-modules-library";
import { t } from "i18next";
import classes from "../styles.module.css";

interface OfferCardProps {
  "jcr:title"?: string;
  description?: string;
  rate?: string;
  amount?: string;
  ctaLabel?: string;
  badgeLabel?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:offerCard",
    displayName: "Carte d'offre",
  },
  ({ "jcr:title": title, amount, badgeLabel, ctaLabel, description, rate }: OfferCardProps) => (
    <article className={classes.card}>
      <div className={classes.cardHeader}>
        {title && <h3 className={classes.cardTitle}>{title}</h3>}
        {badgeLabel && <span className={classes.badge}>{badgeLabel}</span>}
      </div>
      {description && <p className={classes.cardText}>{description}</p>}
      <dl className={classes.cardMeta}>
        <div>
          <dt>{t("sofincoHome.offerCard.rateLabel")}</dt>
          <dd>{rate}</dd>
        </div>
        <div>
          <dt>{t("sofincoHome.offerCard.amountLabel")}</dt>
          <dd>{amount}</dd>
        </div>
      </dl>
      {ctaLabel && <button className={classes.primaryButton}>{ctaLabel}</button>}
    </article>
  ),
);
