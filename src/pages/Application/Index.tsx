import * as React from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Note, Spacer, Description } from "@geist-ui/react";
import { useRequest } from "@@/plugin-request/request";
import { getApplicationList } from "@/pages/Application/service";
import { useEffect } from "react";
import { DtkDetail, AllAppResult } from "@/pages/Application/model/list_result_model";
import ProList from '@ant-design/pro-list';
import { Badge } from 'antd';

export default (): React.ReactNode => {


  const [list, setList] = React.useState<DtkDetail[]>([]);

  const { loading, run } = useRequest<AllAppResult>(() => {
    return getApplicationList();
  }, {
    manual: true,
    onSuccess: (result, params) => {
      setList(result);
      console.log(result);
    }
  })

  useEffect(() => {
    run();
  }, []);



  return <>
    <PageContainer>

      <Note label={'提示'} type="success" small={true}>添加大淘客应用信息,后端将使用你配置的信息请求API接口,用户在app下单后佣金将进入你的配置的所在账户!如果未到账,请检查配置是否正确</Note>

      <Spacer />

      <ProList<any> loading={loading} grid={{ gutter: 16, column: 2 }} headerTitle={'我的应用'} dataSource={list.map((item) => ({
        title: item.title,
        subTitle: item.intro,
        avatar: item.logo,
        content: (
          <>
            <Description title="appKey" content={item.appKey} />
            <Spacer />
            <Description title="appSecret" content={item.appSecret} />
          </>
        ),
        actions:item.selectDefault ? [
          <Badge status="success" text="默认使用" />
        ] : [
          <a>设置默认</a>
        ]
      }))} metas={{ title: {}, subTitle: {}, avatar: {}, content: {}, actions: {} }}>

      </ProList>


    </PageContainer>
  </>
}
