// To parse this data:
//
//   import { Convert, BlogAllData } from "./file";
//
//   const blogAllData = Convert.toBlogAllData(json);

export interface BlogAllData {
  state:   number;
  message: string;
  data:    JpaPager;
}

export interface JpaPager {
  content:          BlogObject[];
  pageable:         Pageable;
  totalElements:    number;
  last:             boolean;
  totalPages:       number;
  number:           number;
  size:             number;
  sort:             Sort;
  numberOfElements: number;
  first:            boolean;
  empty:            boolean;
}

export interface BlogObject {
  id:         number;
  title:      string;
  content:    string;
  createTime: number;
  category:   Category;
  author:     string;
  thumbnail?:  string;
}

export interface Category {
  id:         number;
  name:       string;
  logo:       string;
  intro:      string;
  createTime: number;
}

export interface Pageable {
  sort:       Sort;
  offset:     number;
  pageNumber: number;
  pageSize:   number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  sorted:   boolean;
  unsorted: boolean;
  empty:    boolean;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBlogAllData(json: string): BlogAllData {
    return JSON.parse(json);
  }

  public static blogAllDataToJson(value: BlogAllData): string {
    return JSON.stringify(value);
  }
}
