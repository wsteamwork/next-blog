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
  readonly blogEat: BlogIndexRes[]
  readonly blogPlay: BlogIndexRes[]
  readonly blogStay: BlogIndexRes[]
  readonly blogAll: BlogIndexRes[]
  readonly listBlogs: BlogIndexRes[]
}

export type BlogIndexAction = { type: 'setHotBlogs', blogs: BlogIndexRes[] } |
                              { type: 'setBlogEat', blogEat: BlogIndexRes[] } |
                              { type: 'setBlogPlay', blogPlay: BlogIndexRes[] } |
                              { type: 'setBlogStay', blogStay: BlogIndexRes[] } |
                              { type: 'setBlogAll', blogAll: BlogIndexRes[] }

export const BlogIndexInit: BlogIndexState = {
  hotBlogs: [],
  blogEat: [],
  blogPlay: [],
  blogStay: [],
  blogAll: [],
  listBlogs: [],
};

export const BlogIndexReducer = (state: BlogIndexState, action: BlogIndexAction) => {
  switch (action.type) {
    case 'setHotBlogs':
      return updateObject(state, {
        hotBlogs: action.blogs,
      });
    case 'setBlogEat':
      return updateObject(state, {
        blogEat: action.blogEat,
      });
    case 'setBlogPlay':
      return updateObject(state, {
        blogPlay: action.blogPlay,
      });
    case 'setBlogStay':
      return updateObject(state, {
        blogStay: action.blogStay,
      });
    case 'setBlogAll':
      return updateObject(state, {
        blogAll: action.blogAll,
      });
    default:
      return state;
  }
};

export const getBlog = async (params?: BlogIndexGetParams) => {
  const url = `blogs/?include=categories.details,tags,users&${qs.stringify(params)}`;

  const res: AxiosRes<BlogIndexRes[]> = await axios.get(url);
  return res.data;
};

