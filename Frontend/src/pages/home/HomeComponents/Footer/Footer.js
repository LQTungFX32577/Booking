/* eslint-disable no-unused-vars */
import React from "react";

import footerData from "./footer.json"
import Styles from "./Footer.module.css"

function Footer(props) {
    const data1 = footerData[0]
    const data2 = footerData[1];
    const data3 = footerData[2];
    const data4 = footerData[3];
    const data5 = footerData[4];

    return (
      <div className={Styles.content}>
                <div key={data1.col_number} className={Styles.list}>
                    <p>{data1.col_values[0]}</p>
                    <p>{data1.col_values[1]}</p>
                    <p>{data1.col_values[2]}</p>
                    <p>{data1.col_values[3]}</p>
                    <p>{data1.col_values[4]}</p>
                    <p>{data1.col_values[5]}</p>
                </div>
                <div key={data2.col_number} className={Styles.list}>
                    <p>{data2.col_values[0]}</p>
                    <p>{data2.col_values[1]}</p>
                    <p>{data2.col_values[2]}</p>
                    <p>{data2.col_values[3]}</p>
                    <p>{data2.col_values[4]}</p>
                    <p>{data2.col_values[5]}</p>
                </div>
                <div key={data3.col_number} className={Styles.list}>
                    <p>{data3.col_values[0]}</p>
                    <p>{data3.col_values[1]}</p>
                    <p>{data3.col_values[2]}</p>
                    <p>{data3.col_values[3]}</p>
                    <p>{data3.col_values[4]}</p>
                </div>
                <div key={data4.col_number} className={Styles.list}>
                    <p>{data4.col_values[0]}</p>
                    <p>{data4.col_values[1]}</p>
                    <p>{data4.col_values[2]}</p>
                    <p>{data4.col_values[3]}</p>
                </div>
                <div key={data5.col_number} className={Styles.list}>
                    <p>{data5.col_values[0]}</p>
                    <p>{data5.col_values[1]}</p>
                    <p>{data5.col_values[2]}</p>
                    <p>{data5.col_values[3]}</p>
                    <p>{data5.col_values[4]}</p>
                    <p>{data5.col_values[5]}</p>
                    <p>{data5.col_values[6]}</p>
                    <p>{data5.col_values[7]}</p>
                </div>
      </div>
    )
}

export default Footer;