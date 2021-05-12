import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, CardContent, Fade, Typography } from '@material-ui/core';
import { Input, Upload } from 'antd';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';
import { Spacer } from '@geist-ui/react';
import { RcFile } from 'antd/lib/upload/interface';
import Button from '@material-ui/core/Button';

const ApkVersionManage: React.FC = () => {
  const [apkFile, setApkFile] = useState<RcFile>();

  const beforeUpload = (file: RcFile) => {
    console.log(file.size);
    setApkFile(file);
  };

  return (
    <>
      <PageContainer title={'上传新版本'}>
        <Fade in={true}>
          <Card>
            <CardContent>
              <Typography component={'h2'}>选择APK文件</Typography>

              {/*  选择文件按钮 */}
              <Spacer />
              <Upload beforeUpload={beforeUpload}>
                <Button startIcon={<UploadOutlined />}>选择APK文件</Button>
              </Upload>

              {/*版本号输入框*/}
              <Spacer />
              <Typography component={'h2'}>请输入版本号</Typography>
              <Input placeholder="例子: 1.0.0" />

              {/*  提交 */}
              <Spacer />
              <Button
                color="primary"
                size="large"
                variant="contained"
                startIcon={<SaveOutlined />}
                disabled={!apkFile}
              >
                提交
              </Button>
            </CardContent>
          </Card>
        </Fade>
      </PageContainer>
    </>
  );
};

export default ApkVersionManage;
