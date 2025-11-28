import { jahiaComponent } from "@jahia/javascript-modules-library";
import classes from "../styles.module.css";

interface MetricCardProps {
  value: string;
  label?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:metricCard",
    displayName: "Indicateur",
  },
  ({ value, label }: MetricCardProps) => (
    <div>
      <p className={classes.metricValue}>{value}</p>
      {label && <p className={classes.metricLabel}>{label}</p>}
    </div>
  ),
);
