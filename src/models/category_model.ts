import {useState} from 'react';
import {Datum} from "@/pages/Blog/components/write/models/API.CATEGORY_LIST.DATA";

export default () => {

  const [categorys, setCategorys] = useState<Datum[]>([]);
  const [currentSelect,setCurrentSelect] = useState<Datum>();

  const setList = (data?: Datum[]) => {
    if (data) {
      setCategorys(data);
    }
  }

  /**
   * 设置当前选中分类
   */
  const setCurrentSelectCategory = (category: Datum) => {
    setCurrentSelect(category);
  }

  return {setList, categorys, setCurrentSelectCategory,currentSelect};

}
