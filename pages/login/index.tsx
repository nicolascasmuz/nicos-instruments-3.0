import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./login.module.css";
import LoginForm from "components/login-form";
import Layout from "components/layout";

const Login: NextPage = () => {
  useEffect(() => {
    localStorage.removeItem("saved-state");
  }, []);

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <LoginForm />
      </section>
    </Layout>
  );
};

export default Login;
