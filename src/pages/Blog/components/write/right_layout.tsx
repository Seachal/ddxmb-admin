import * as React from "react";
import {Card, Form} from "antd";
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import 'vditor/dist/css/content-theme/ant-design.css'
import ProForm, {ProFormText} from "@ant-design/pro-form";
import Title from "antd/lib/typography/Title";

const WriteRightLayout: React.FC = () => {
  return (
    <>
      <Card>
        <Title level={2}>发布文章</Title>
        <div style={{marginTop: '20px'}}/>
        <ProForm>
          <ProFormText
            name="title"
            placeholder='标题'
            label={'标题'}
            rules={[
              {
                required: true,
              },
            ]}
          />
          <Form.Item name='content' label={'正文'} rules={[{required: true}]}>
            <div id="vditor" ref={(ref) => {
              const vditor = new Vditor('vditor', {
                toolbarConfig: {
                  pin: true,
                },
                cache: {
                  enable: false,
                },
                minHeight: 500,
                after() {
                  vditor.setValue('欢迎使用')
                },
              })
            }}/>
          </Form.Item>
        </ProForm>

      </Card>
    </>
  );
}

export default WriteRightLayout;
