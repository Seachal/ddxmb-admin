import * as React from "react";
import {PageContainer} from "@ant-design/pro-layout";
import {Card, Note} from "@geist-ui/react";

export default (): React.ReactNode => {
  return <>
    <PageContainer>

      <Card>
        <Note label={'提示'} type="success" small={true}>添加大淘客应用信息,后端将使用你配置的信息请求API接口,用户在app下单后佣金将进入你的配置的所在账户!如果未到账,请检查配置是否正确</Note>
      </Card>
    </PageContainer>
  </>
}
