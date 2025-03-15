import React, { useState } from 'react';
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import type { AgChartOptions } from "ag-charts-community";
interface DataItem {
    group: string;
    value: number;
}
  
  const getData = (): DataItem[] => [
    { group: "Page Visit", value: 490 },
    { group: "Enquiry", value: 340 },
    { group: "Quote", value: 300 },
    { group: "Sale", value: 290 },
  ];
const FunnelChart=() => {
    
    const [options, setOptions] = useState<AgChartOptions>({
        data: getData(),
        title: {
          text: "Conversion Drop Off",
        },
        series: [
          {
            type: "funnel",
            stageKey: "group",
            valueKey: "value",
            direction: "horizontal",
          },
        ],
      });
    
      return <AgCharts options={options} />;
}

export default FunnelChart;