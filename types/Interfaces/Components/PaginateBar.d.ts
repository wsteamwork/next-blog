import {CustomClasses} from '@/types/Interfaces/CustomInterface';

type PaginateBarClasses = 'root'

export interface IPaginateBar extends CustomClasses<PaginateBarClasses> {
  nextLabel?: string
  prevLabel?: string
}
