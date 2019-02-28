import {TransformerInclude} from '@/types/Requests/ResponseTemplate';
import {TagIndexResponse} from '@/types/Requests/Tag/TagResponses';

export interface BlogIndexRes {
  id: number
  image: string
  status: number
  hot: number
  new: number
  user_id: number
  title: string
  slug: string
  content: string
  description: string
  type: number
  category_id: number
  created_at:string
  categories:TransformerInclude<CategoryBlog>
  tags:TransformerInclude<TagIndexResponse[]>
}
export interface CategoryBlog {
  id: number
  hot: number,
  status: number,
  new: number,
  image: string,
  details:TransformerInclude<CategoryDetails>
}
export interface CategoryDetails{
  id: number,
  category_id: number,
  name: string,
  slug: string,
  lang:string
  image: string
}
