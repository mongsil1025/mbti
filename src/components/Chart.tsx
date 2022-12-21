import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import { Decision, Energy, LifePattern, Recognition } from "../models";

interface Mbti {
  uid: string;
  username: string;
  energy: Energy;
  recognition: Recognition;
  decision: Decision;
  life_style: LifePattern;
  descriptions?: string[];
  edit_mode?: boolean;
  group_id?: string;
  full_text: string;
}

interface ChartData {
  type: string;
  value: number;
}

interface Props {
  data: Mbti[];
}

const aggregateData = (mbtis: Mbti[]) => {
  let data: ChartData[] = [];
  mbtis.forEach((value) => {
    if (data.length === 0) {
      data.push({
        type: value.full_text,
        value: 1,
      });
    } else {
      let is_exists = false;
      let index = 0;
      for (var i = 0; i < data.length; i++) {
        if (value.full_text === data[i].type) {
          is_exists = true;
          index = i;
          break;
        }
      }
      if (is_exists == true) {
        data[index].value++;
      } else {
        data.push({
          type: value.full_text,
          value: 1,
        });
      }
    }
  });
  return {
    data,
    appendPadding: 10,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
};

export default function DemoPie(props: Props) {
  const [config, setConfig] = useState(aggregateData(props.data));

  useEffect(
    function () {
      setConfig(aggregateData(props.data));
    },
    [props.data]
  );

  return <Pie {...config} />;
}
