import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { atom, selector } from 'recoil';
import {
  Card,
  CardContent,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from '@material-ui/core';
import styles from '../../style.less';
import { Spacer } from '@geist-ui/react';
import Button from '@material-ui/core/Button';
import Title from 'antd/es/typography/Title';
import { DatePicker } from 'antd';

export default (): React.ReactNode => {
  const [contentType, setContentType] = useState<String>('html');
  const [openTimeSend, setOpenTimeSend] = useState<boolean>(false);

  return (
    <>
      <PageContainer title={'发布博客'}>
        <Card>
          <CardContent>
            <form className={styles.container}>
              <Title>发布博客</Title>

              <Spacer />

              <TextField id="blog-title" label="文章标题" variant={'outlined'} fullWidth={true} />

              <Spacer />
              <TextField
                id="content"
                label="博客内容"
                multiline
                rows={6}
                variant="outlined"
                fullWidth={true}
              />

              <Spacer />

              {/*渲染正文内容*/}
              <FormControl component="legend">
                <FormLabel component="legend">渲染类型</FormLabel>
                <RadioGroup
                  row={true}
                  aria-label="gender"
                  name="gender1"
                  value={contentType}
                  onChange={(event) => {
                    setContentType(event.target.value);
                  }}
                >
                  <FormControlLabel value="markdown" control={<Radio />} label="markdown" />
                  <FormControlLabel value="html" control={<Radio />} label="html" />
                </RadioGroup>
              </FormControl>

              {/* 定时发布 */}
              <Spacer />
              <Switch
                checked={openTimeSend}
                onChange={(event, checked) => setOpenTimeSend(checked)}
                name={'开启定时发送'}
              />
              <Spacer />

              <Fade in={openTimeSend}>
                <DatePicker showTime onOk={(date) => {}} />
              </Fade>
            </form>
            <Button variant="contained" color="primary">
              立即发布
            </Button>
          </CardContent>
        </Card>
      </PageContainer>
    </>
  );
};

// export default (): React.ReactNode => {
//
//   return (
//     <RecoilRoot>
//       <PageContainer>
//         <Row gutter={16}>
//           <Col span={4}>
//             <WriteLeftLayout/>
//           </Col>
//           <Col span={20}>
//             <WriteRightLayout/>
//           </Col>
//         </Row>
//       </PageContainer>
//     </RecoilRoot>
//   );
// }

// 标签
export const BlogTags = atom<string[]>({
  key: 'blog-tags',
  default: [],
});

// 标签获取
export const TagsGet = selector<string[]>({
  key: 'blog-tags-get',
  get: ({ get }) => {
    return get<string[]>(BlogTags);
  },
});
