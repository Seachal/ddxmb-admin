import {BlogObject} from "@/pages/Blog/components/list/DATA.D.ts";
import type { ProColumns } from '@ant-design/pro-table';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const BlogTableColumn: ProColumns<BlogObject>[] = [
  {
    title: 'ID',
    dataIndex:'id'
  },
  {
    title: "标题",
    dataIndex: "title"
  },
  {
    title: "分类",
    dataIndex: "category",
    render:(_,obj) => {
      return <Chip
        avatar={<Avatar alt="Natacha" src={obj.category.logo} />}
        label={obj.category.name}
        variant="outlined"
      />
    }
  },
  {
    title: "操作",
    valueType: "option",
    render: (text,obj,_,action) => [
      <a
        key="show"
        onClick={() => {
        }}
      >
        查看
      </a>,
      <a
        key="edit"
        onClick={() => {
        }}
      >
        编辑
      </a>
    ]
  }
]

export default BlogTableColumn;

