import {Password} from '../services/databases/watermelon/model/passwords';

const groupPasswordsByInitial = (passwords: Password[]) => {
  const formated = passwords.map((record: Password) => ({
    id: record.id,
    name: record._raw.name,
    password: record._raw.password,
  }));

  return formated.reduce((acc, item) => {
    const initial = item.name.charAt(0).toUpperCase(); // Pega a primeira letra
    if (!acc[initial]) {
      acc[initial] = []; // Cria o grupo se não existir
    }
    acc[initial].push(item);
    return acc;
  }, {} as any);
};

export {groupPasswordsByInitial};
