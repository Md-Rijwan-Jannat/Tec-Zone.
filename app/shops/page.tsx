import React from "react";
import { margin_top } from "../components/common/container/container";
import { ShopsTable } from "../components/table/ShopsTable";

export default function Shops() {
  return (
    <div className={margin_top}>
      <section>
        <ShopsTable />
      </section>
    </div>
  );
}
