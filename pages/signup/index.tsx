import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./signup.module.css";
import SignupForm from "components/signup-form";
import Layout from "components/layout";

const Login: NextPage = () => {
  useEffect(() => {
    localStorage.removeItem("saved-state");
  }, []);

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <SignupForm />
      </section>
    </Layout>
  );
};

export default Login;
