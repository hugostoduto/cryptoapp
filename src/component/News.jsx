import React from "react";
import { Row, Typography, Col, Avatar, Card, Select } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const count = simplified === true ? 5 : 20;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery();
  console.log(cryptoNews);
  if (isFetching) return "loading...";
  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.link} target="_blank" rel=" noreferrer">
                <div className="news-image-container">
                  <Title className="news-image-title" level={4}>
                    {news.title}
                  </Title>
                </div>
                <p>{news.source}</p>
                <Text>{moment(news.pubDate).startOf("ss").fromNow()}</Text>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
