import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import SectionTop from "../SectionTop/SectionTop";
import "./AllNewsArea.css";
import { useEffect, useState } from "react";
import NewsWrapper from "./NewsWrapper";

const AllNewsArea = ({news}) => {

  return (
    <div className=" py-4 lg:py-[40px]">
      <SectionTop title={"All News"} />

      {/* tabs area wrapper */}
      <div className="home--news--tab">
        <Tabs focusTabOnClick={false}>
          <TabList>
            <Tab>Top news</Tab>
            <Tab>Hightlight</Tab>
            <Tab>Interviews</Tab>
          </TabList>

          <div className=" py-5 lg:py-10">
            <TabPanel>{news && <NewsWrapper newsData={news} />}</TabPanel>
            <TabPanel>
              {news && <NewsWrapper newsData={news.slice(-3, -1)} />}
            </TabPanel>
            <TabPanel>{news && <NewsWrapper newsData={news} />}</TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AllNewsArea;
