import {BlogIndexRes} from '@/types/Requests/Blog/BlogRespones';
import {Dispatch, createContext} from 'react';
import {updateObject} from '@/store/utils/utility';
import qs from 'querystring';
import {AxiosRes} from '@/types/Requests/ResponseTemplate';
import {axios} from '@/store/utils/axiosBase';
import {BlogIndexGetParams} from '@/types/Requests/Blog/BlogRequests';

export const BlogIndexContext = createContext<IBlogIndexContext | any>(null);

export interface IBlogIndexContext {
  state: BlogIndexState
  dispatch: Dispatch<BlogIndexAction>
}

export type BlogIndexState = {
  readonly hotBlogs: BlogIndexRes[]
  readonly listBlogs: BlogIndexRes[]
}

export type BlogIndexAction = { type: 'setHotBlogs', blogs: BlogIndexRes[] }

export const BlogIndexInit: BlogIndexState = {
  hotBlogs: [],
  listBlogs: [],
};

export const BlogIndexReducer = (state: BlogIndexState, action: BlogIndexAction) => {
  switch (action.type) {
    case 'setHotBlogs':
      return updateObject(state, {
        hotBlogs: action.blogs,
      });
    default:
      return state;
  }
};

export const getBlog = async (params?: BlogIndexGetParams) => {
  const url = `blogs/?${qs.stringify(params)}`;

  const res: AxiosRes<BlogIndexRes[]> = await axios.get(url);
  return res.data;
};

