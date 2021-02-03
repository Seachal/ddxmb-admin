// 发布博客所需的参数

export default class PushNewBlogParams {

  title: string;

  content: string;

  tags: string[];

  categoryId: number;


  constructor(title: string, content: string, tags: string[], categoryId: number) {
    this.title = title;
    this.content = content;
    this.tags = tags;
    this.categoryId = categoryId;
  }
}
