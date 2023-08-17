import { getProviders, signIn } from "next-auth/react";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Login() {
  const providers = await getProviders().then((res) => {
    return res;
  });
  return (
    <div className={styles.backgroundPaper}>
      <div className={styles.contentCenter}>
        <div className={styles.mainContent}>
          <Image
            src="/github-mark.svg"
            width={150}
            height={150}
            objectFit="contain"
            alt={"Github Logo"}
          />

          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <div key={provider.name}>
                  <button
                    className={styles.githubButton}
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: "/top/main",
                      })
                    }
                  >
                    <span className="">Sign in with {provider.name}</span>
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
