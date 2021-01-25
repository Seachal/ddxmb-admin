import {useState} from 'react';
import {Datum} from "@/pages/Blog/components/write/models/API.CATEGORY_LIST.DATA";
import {getCategoryList} from "@/pages/Blog/BlogService";

export default () => {

  const [categorys, setCategorys] = useState<Datum[]>([]);// 分类列表
  const [currentSelect, setCurrentSelect] = useState<Datum>(); // 分类
  const [title, setTitle] = useState<String>(); // 标题
  const [content, setContent] = useState<String>(); // 正文
  const [tags, setTags] = useState<string[]>(); // 标签列表


  /**
   * 设置当前选中分类
   */
  const setCurrentSelectCategory = (category: Datum) => {
    setCurrentSelect(category);
  }

  //
  /**
   * 在服务器获取分类列表
   */
  const getCategorys = async () => {
    const datas = await getCategoryList();
    setCategorys(datas.data);
  }

  return {
    categorys,
    setCurrentSelectCategory,
    currentSelect,
    getCategorys,
    setTitle,
    setTags,
    setContent,
    title,
    content,
    tags
  };

}
