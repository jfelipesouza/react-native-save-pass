import {database} from '..';
import {groupPasswordsByInitial} from '../../../../utils/group-passwords';
import {Password} from '../model/passwords';
import {Q} from '@nozbe/watermelondb';

export const getPasswordByName = async (name: string) => {
  const data = database.get<Password>('password');
  const passords = await data
    .query(Q.where('name', Q.like(`%${name}%`)))
    .fetch();
  const result = groupPasswordsByInitial(passords);

  return result;
};
