import {BlogIndexRes} from '@/types/Requests/Blog/BlogRespones';
import {Dispatch, createContext} from 'react';
import {updateObject} from '@/store/utils/utility';
import qs from 'querystring';
import {AxiosRes} from '@/types/Requests/ResponseTemplate';
import {axios} from '@/store/utils/axiosBase';

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

export const getBlog = async () => {
  const res: AxiosRes<BlogIndexRes[]> = await axios.get('blogs');
  return res.data;
};

