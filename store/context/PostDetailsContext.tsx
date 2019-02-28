import {BlogIndexRes} from '@/types/Requests/Blog/BlogRespones';
import {Dispatch, createContext} from 'react';
import {updateObject} from '@/store/utils/utility';
import qs from 'querystring';
import {AxiosRes} from '@/types/Requests/ResponseTemplate';
import {axios} from '@/store/utils/axiosBase';
import {BlogIndexGetParams} from '@/types/Requests/Blog/BlogRequests';

export const PostDetailsContext = createContext<IPostDetailsContext | any>(null);

export interface IPostDetailsContext {
  state: PostDetailsState
  dispatch: Dispatch<PostDetailsAction>
}

export type PostDetailsState = {
  readonly postDetails :BlogIndexRes,
  readonly sliderHot :BlogIndexRes[],
  readonly sliderNew :BlogIndexRes[],
}

export type PostDetailsAction = { type: 'setPostDetails', details: BlogIndexRes } |
  { type: 'setSliderHot', sHot: BlogIndexRes[] }|
  { type: 'setSliderNew', sNew: BlogIndexRes[] }

export const PostDetailsInit: PostDetailsState = {
  postDetails: null,
  sliderHot:[],
  sliderNew:[],
};

export const PostDetailsReducer = (state: PostDetailsState, action: PostDetailsAction) => {
  switch (action.type) {
    case 'setPostDetails':
      return updateObject(state, {
        postDetails: action.details,
      });
    case 'setSliderHot':
      return updateObject(state, {
        sliderHot: action.sHot,
      });
    case 'setSliderNew':
      return updateObject(state, {
        sliderNew: action.sNew,
      });
    default:
      return state;
  }
};

export const getDetails = async (id:number)=>{
  const url = `blogs/${id}?include=categories.details`;
  const res: AxiosRes<BlogIndexRes> = await axios.get(url);

  return res.data;
};
export const getSlider = async (params:BlogIndexGetParams)=>{
  const url = `blogs?include=categories.details,user&${qs.stringify(params)}`;

  const res: AxiosRes<BlogIndexRes[]> = await axios.get(url);

  return res.data;

};



