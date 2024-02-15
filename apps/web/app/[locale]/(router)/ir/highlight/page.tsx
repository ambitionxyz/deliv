"use client";

import Link from "next/link";
import Headerbackground from "../../../../../components/headerBackground/HeaderBackground";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import c from "./Page.module.css";

const Page = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "売上高",
      align: "left",
    },

    xAxis: {
      categories: ["20/7", "21/7", "22/7", "23/7", "24/7"],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
    },
    tooltip: {
      valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.05,
        groupPadding: 0.2,
        pointWidth: 15,
        shadow: false,
      },
    },
    series: [
      { color: "rgb(184,201,217)", name: "1Q", data: [0, 0, 495, 508, 674] },
      { color: "rgb(112,148,186)", name: "2Q", data: [0, 0, 1003, 1043, 0] },
      { color: "rgb(73,120,165)", name: "3Q", data: [0, 1326, 1590, 1601, 0] },
      {
        color: "rgb(9,59,102)",
        name: "通期",
        data: [1509, 1790, 2131, 2190, 0],
      },
    ],
  };

  return (
    <>
      <Headerbackground namePage="Hightlight" description="財務ハイライト" />
      <div className={c.topicPath}>
        <Link href="/jp">HOME</Link>
        <span> + </span>
        <span>株主・投資家向け情報</span>
        <span>+</span>
        <span>財務ハイライト </span>
      </div>
      <div className={c.contents}>
        <div className={c.section}>
          <div className={c.irNews}>
            <div className={c.qir}>
              <div className={c.qirArea}>
                <div className={c.qirArea_wrapper}>
                  <div className={c.qirSection_wrapper}>
                    <div className={c.qirContent}>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                      />
                      <div className={c.qirContent_table}>
                        <table>
                          <thead>
                            <tr className={c.qirContent_table_thead_row}>
                              <th></th>
                              <th>
                                <span className={c.qirContent_table_xaxis}>
                                  20/7
                                </span>
                              </th>
                              <th>
                                <span className={c.qirContent_table_xaxis}>
                                  20/7
                                </span>
                              </th>
                              <th>
                                <span className={c.qirContent_table_xaxis}>
                                  20/7
                                </span>
                              </th>
                              <th>
                                <span className={c.qirContent_table_xaxis}>
                                  20/7
                                </span>
                              </th>
                              <th>
                                <span className={c.qirContent_table_xaxis}>
                                  20/7
                                </span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className={c.qirContent_table_tbody_row}>
                              <th>
                                <span>通期</span>
                              </th>
                              <td>
                                <span>1,509</span>
                              </td>
                              <td>
                                <span>1,790</span>
                              </td>
                              <td>
                                <span>2,131</span>
                              </td>
                              <td>
                                <span>2,190</span>
                              </td>
                              <td>
                                <span></span>
                              </td>
                            </tr>
                            <tr className={c.qirContent_table_tbody_row}>
                              <th>
                                <span>3Q</span>
                              </th>
                              <td>
                                <span>-</span>
                              </td>
                              <td>
                                <span>1,326</span>
                              </td>
                              <td>
                                <span>1,590</span>
                              </td>
                              <td>
                                <span>1,601</span>
                              </td>
                              <td>
                                <span></span>
                              </td>
                            </tr>
                            <tr className={c.qirContent_table_tbody_row}>
                              <th>
                                <span>2Q</span>
                              </th>
                              <td>
                                <span>-</span>
                              </td>
                              <td>
                                <span>-</span>
                              </td>
                              <td>
                                <span>1,003</span>
                              </td>
                              <td>
                                <span>1,043</span>
                              </td>
                              <td>
                                <span></span>
                              </td>
                            </tr>
                            <tr className={c.qirContent_table_tbody_row}>
                              <th>
                                <span>1Q</span>
                              </th>
                              <td>
                                <span>-</span>
                              </td>
                              <td>
                                <span>-</span>
                              </td>
                              <td>
                                <span>495</span>
                              </td>
                              <td>
                                <span>508</span>
                              </td>
                              <td>
                                <span>674</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
