import * as React from "react";
import {Button, Card, Divider, Form, Input, message, Tag} from "antd";
import Title from "antd/lib/typography/Title";
import {FormInstance} from "antd/lib/form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {BlogTags} from "@/pages/Blog/subpage/write/BlogWrite";

interface Tag {
  tag: string;
}

type Props = {
  initTags: string[];
}

export default function TagComponment({initTags}: Props) {

  const blogTagList = useRecoilValue(BlogTags);
  const setBlogTagList = useSetRecoilState(BlogTags);

  console.log(`标签列表:${blogTagList}`);

  let formRef = React.createRef<FormInstance>();

  const submitTag = async (values: Tag) => {
    if (!blogTagList.includes(values.tag)) {
      setBlogTagList((oldList)
        => [
        ...oldList,
        values.tag
      ]);
    } else {
      message.error('已存在');
    }
  }
  return (
    <>
      <Card>
        <Title level={1}>标签</Title>
        <Divider/>
        <Form onFinish={submitTag} ref={formRef}>
          <Form.Item name={'tag'} rules={[{required: true, message: '请输入标签名'}]}>
            <Input/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              添加标签
            </Button>
          </Form.Item>
        </Form>
        {blogTagList?.map((value) => <Tag key={value}>{value}</Tag>)}
      </Card>

    </>
  );
}
