import React from 'react';
import {PageContainer} from "@ant-design/pro-layout";
import { Col, Row} from "antd";
import WriteLeftLayout from "@/pages/Blog/components/write/left_layout";
import WriteRightLayout from "@/pages/Blog/components/write/right_layout";

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={4} >
          <WriteLeftLayout />
        </Col>
        <Col span={20}>
          <WriteRightLayout />
        </Col>
      </Row>
    </PageContainer>
  );
}
