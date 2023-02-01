import React from "react";
import millify from "millify";
import { Row, Typography, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  if (isFetching) return "loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencie" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Valume" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market" value={5} />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
