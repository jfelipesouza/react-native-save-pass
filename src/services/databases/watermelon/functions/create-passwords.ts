import {database} from '..';
import {Password} from '../model/passwords';

type createPasswordParams = {
  name: string;
  password: string;
};

export const createPassword = async ({
  name,
  password,
}: createPasswordParams) => {
  let status: boolean = false;
  try {
    const data = await database.write(async () => {
      return await database.get<Password>('passwords').create(item => {
        item.name = name;
        item.password = password;
        item.createdAt = Date.now();
      });
    });

    if (data) {
      status = true;
    }
  } catch (e) {
  } finally {
    return status;
  }
};
