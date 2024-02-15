"use client";
import UserAnalyticsChart from "@/app/components/charts/UserAnalyticsChart";
import UserDashboard from "@/app/components/users/UserDashboard";
import React from "react";

interface AnalyticsProps {}

const Analytics: React.FC<AnalyticsProps> = () => {
  return (
    <div>
      <UserDashboard text="" quantity={0} />
      <UserAnalyticsChart />
    </div>
  );
};
export default Analytics;
