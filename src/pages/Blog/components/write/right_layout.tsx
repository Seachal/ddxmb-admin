import * as React from "react";
import {Card} from "antd";
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import 'vditor/dist/css/content-theme/ant-design.css'
import Title from "antd/lib/typography/Title";
import ProForm, {ProFormText} from "@ant-design/pro-form";

type FormProps = {
  title: string;
}

const WriteRightLayout: React.FC = () => {

  let vditor: Vditor;

  const onFinish = (values: FormProps) => {

    const {title} = values;
    const content = vditor?.getHTML();
    console.log('文章标题:' + title);
    console.log('正文内容:' + content);
    if(title && content){

    }
  }


  return (
    <>
      <Card>
        <Title level={2}>发布文章</Title>
        <div style={{marginTop: '20px'}}/>
        <ProForm onFinish={async (values) => await onFinish(values as FormProps)}>
          <ProFormText
            name="title"
            label={'标题'}
            rules={[
              {
                required: true,
              },
            ]}
          />
          <div id="vditor" ref={(ref) => {
            const _vditor = new Vditor('vditor', {
              toolbarConfig: {
                pin: false,
              },
              cache: {
                enable: false,
              },
              minHeight: 500,
              after() {
                _vditor.setValue('hello  world !!')
                vditor = _vditor;
              },
            })
          }}/>
        </ProForm>

      </Card>
    </>
  );
}

export default WriteRightLayout;
