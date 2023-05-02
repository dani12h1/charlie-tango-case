import logo from "@/assets/edc-logo.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useContext } from "react";
import { DashboardContext } from "@/pages/_app";
import { useEffect } from "react";

export function Header() {
  const dashboardBuyers = useContext(DashboardContext);

  // Only to show the length of the array
  // useEffect(() => {
  //   console.log(dashboardBuyers.length);
  // });

  return (
    <>
      <header className="wrapper">
        <Link href="/" aria-label="EDC">
          <Image
            className={styles.logo}
            src={logo.src}
            width={64}
            height={64}
            alt="EDC"
            priority
          />
        </Link>
        <Link href="/dashboard">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <div>{dashboardBuyers.length}</div>
          </button>
        </Link>
      </header>
    </>
  );
}
