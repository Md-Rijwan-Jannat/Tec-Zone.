"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Title from "@/app/components/ui/title/Title";
import UserDashboard from "@/app/components/users/UserDashboard";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

interface UserAnalyticsProps {}

const chartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  title: {
    text: "",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#FF69B4"], // Pink color code
  stroke: {
    lineCap: "round",
    curve: "smooth", // Adjusted to a valid value
  },
  markers: {
    size: 0,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  yaxis: {
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#dddddd",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 5,
      right: 20,
    },
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "dark",
  },
};

const DynamicChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const UserAnalytics: React.FC<UserAnalyticsProps> = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [chartSeries, setChartSeries] = useState<any>([]);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import Chart component when running in the client-side context
    import("react-apexcharts").then((module) => {
      setChartSeries([
        {
          name: "Sales",
          data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
      ]);
    });
  }, []);

  return (
    <>
      <section>
        <UserDashboard quantity={0} text="" />
      </section>
      <section>
        <Title title={"Analytics charts"} />
        <Card placeholder="" className="mb-5 md:mb-10">
          <CardHeader
            placeholder=""
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-[#f5a] p-5 text-white">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography placeholder="" variant="h6" color="blue-gray">
                Monthly analytics
              </Typography>
              <Typography
                placeholder=""
                variant="small"
                color="gray"
                className="max-w-sm font-normal"
              >
                Transform web data into actionable insights for boosting sales
                performance.
              </Typography>
            </div>
          </CardHeader>
          <CardBody placeholder="" className="px-2 pb-0">
            {isClient && chartSeries.length > 0 && (
              <DynamicChart
                type="line"
                height={240}
                series={chartSeries}
                options={chartOptions}
              />
            )}
          </CardBody>
        </Card>
      </section>
    </>
  );
};

export default UserAnalytics;
