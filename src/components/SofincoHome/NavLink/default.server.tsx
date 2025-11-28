import { jahiaComponent } from "@jahia/javascript-modules-library";
import classes from "../styles.module.css";

interface NavLinkProps {
  label: string;
  href?: string;
}

export default jahiaComponent(
  {
    componentType: "view",
    nodeType: "sofincotplset:navLink",
    displayName: "Lien de navigation",
  },
  ({ label, href }: NavLinkProps) => (
    <a href={href ?? "#"} className={classes.navLink}>
      {label}
    </a>
  ),
);
