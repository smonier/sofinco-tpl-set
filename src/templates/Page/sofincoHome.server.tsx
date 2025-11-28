import { Area, jahiaComponent } from "@jahia/javascript-modules-library";
import { Layout } from "../Layout.jsx";
import classes from "../../components/SofincoHome/styles.module.css";

type PageProps = {
  "jcr:title"?: string;
};

jahiaComponent(
  {
    componentType: "template",
    nodeType: "jnt:page",
    name: "sofincoHome",
    displayName: "Sofinco inspired home",
  },
  ({ "jcr:title": title }: PageProps) => (
    <Layout title={title ?? "Sofinco"}>
      <div className={classes.page}>
        <Area name="header" />
        <main>
          <Area name="hero" />
          <Area name="offers" />
          <Area name="highlights" />
          <Area name="testimonials" />
          <Area name="insights" />
          <Area name="contact" />
          <Area name="main" />
        </main>
      </div>
    </Layout>
  ),
);
