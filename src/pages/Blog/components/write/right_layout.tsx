import * as React from "react";
import {Form, Input, notification} from "antd";
import 'pivotal-ui/css/alignment';
import Title from "antd/lib/typography/Title";
import {useRecoilValue} from "recoil";
import {TagsGet} from "@/pages/Blog/subpage/write/BlogWrite";
import BraftEditor, {EditorState} from "braft-editor";
import 'braft-editor/dist/index.css';
import {Button, Card} from "@geist-ui/react";
import {useState} from "react";
import {useModel} from "@@/plugin-model/useModel";
import PushNewBlogParamsModel from "@/services/models/PushNewBlogParamsModel";
import {pushNewBlog} from "@/services/blog";

type FormProps = {
  title: string;
}


const WriteRightLayout: React.FC = () => {

  const tags = useRecoilValue<string[]>(TagsGet);
  const [content, setContent] = useState<string>('');
  const categoryModel = useModel('category_model');


  //发布
  const onFinish = async (values: FormProps) => {
    const {title} = values;
    const categoryId = categoryModel.currentSelect?.id
    if (!categoryId) {
      notification.warning({message: `警告`, description: '请选择分类'});
      return;
    }
    if (content.length < 100) {
      notification.warning({message: `警告`, description: '正文内容太少'});
      return;
    }

    const params: PushNewBlogParamsModel = new PushNewBlogParamsModel(title, content, tags, categoryId);
    const result =  await pushNewBlog(params);
    console.log(result);


  }

  // 富文本编辑器值被改变
  const editChange = (editorState: EditorState) => {
    setContent(editorState.toHTML());
  }

  // 验证标题
  const titleValidator = (_: any, value: string) => {
    if (!value || value == "") {
      notification.warning({message: `警告`, description: '请输入标题'});
      return Promise.reject("缺少标题");
    }
    return Promise.resolve();
  }


  return (
    <>
      <Card>
        <Title level={2}>发布文章</Title>
        <div style={{marginTop: '20px'}}/>
        <Form onFinish={async (values) => await onFinish(values as FormProps)} layout='horizontal'>

          <Form.Item label={'文章标题'} name={'title'} rules={[{validator: titleValidator}]}>
            <Input/>
          </Form.Item>

          <Form.Item label={'文章正文'} name={'content'}>
            <Card hoverable={true}>
              <BraftEditor
                onChange={editChange}
                placeholder="请输入正文内容"
              />
            </Card>
          </Form.Item>

          <Form.Item className='txt-c'>
            <Button htmlType='submit' type="success">提交</Button>
          </Form.Item>

        </Form>

      </Card>
    </>
  );
}

export default WriteRightLayout;
