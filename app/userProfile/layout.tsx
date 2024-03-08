import React from "react";
import { margin_top } from "../components/common/container/container";
import { ProfileDrawer } from "../components/common/modals/ProfileDrawer";
import BackButton from "../components/ui/button/BackButton";
import Head from "next/head";

interface UserProfileLayoutProps {
  children: React.ReactNode;
}

const UserProfileLayout: React.FC<UserProfileLayoutProps> = ({ children }) => {
  return (
    <div className={margin_top}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Your dashboard description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Your dashboard header */}
      <header className="m-2">
        <div className="flex justify-between gap-5">
          <ProfileDrawer />
          <BackButton />
        </div>
      </header>

      {/* Main content area */}
      <main>{children}</main>
    </div>
  );
};

export default UserProfileLayout;
