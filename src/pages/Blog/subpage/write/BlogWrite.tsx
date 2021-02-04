import React from 'react';
import {PageContainer} from "@ant-design/pro-layout";
import {Col, Row} from "antd";
import WriteLeftLayout from "@/pages/Blog/components/write/left_layout";
import WriteRightLayout from "@/pages/Blog/components/write/right_layout";
import {atom, RecoilRoot, selector} from "recoil";

export default (): React.ReactNode => {

  return (
    <RecoilRoot>
      <PageContainer>
        <Row gutter={16}>
          <Col span={4}>
            <WriteLeftLayout/>
          </Col>
          <Col span={20}>
            <WriteRightLayout/>
          </Col>
        </Row>
      </PageContainer>
    </RecoilRoot>
  );
}

// 标签
export const BlogTags = atom<string[]>({
  key: 'blog-tags',
  default: []
})

// 标签获取
export const TagsGet = selector<string[]>({
  key: 'blog-tags-get',
  get: ({get}) => {
    return get<string[]>(BlogTags);
  },
})
