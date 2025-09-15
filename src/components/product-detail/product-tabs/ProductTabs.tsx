"use client";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import DescriptionTab from "./DescriptionTab";
import SpecificationTab from "./SpecificationTab";
import VendorTab from "./VendorTab";
import ReviewsTab from "./ReviewsTab";
import QuestionsTab from "./QuestionsTab";
import OffersTab from "./OffersTab";

const ProductTabs = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Description",
      children: <DescriptionTab />,
    },
    {
      key: "2",
      label: "Specification",
      children: <SpecificationTab />,
    },
    {
      key: "3",
      label: "Vendor",
      children: <VendorTab />,
    },
    {
      key: "4",
      label: "Reviews (1)",
      children: <ReviewsTab />,
    },
    {
      key: "5",
      label: "Questions and Answers",
      children: <QuestionsTab />,
    },
    {
      key: "6",
      label: "More Offers",
      children: <OffersTab />,
    },
  ];

  return (
    <div className="ps-product__content ps-tab-root">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default ProductTabs;
