import {database} from '..';
import {groupPasswordsByInitial} from '../../../../utils/group-passwords';
import {Password} from '../model/passwords';
import {Q} from '@nozbe/watermelondb';

export const getAllPasswords = async () => {
  try {
    const data = database.get<Password>('passwords');
    const passwords = await data.query(Q.sortBy('name', Q.asc)).fetch();

    if (data) {
      const group = groupPasswordsByInitial(passwords);
      return group;
    }
  } catch (e) {
    return [];
  }
};
