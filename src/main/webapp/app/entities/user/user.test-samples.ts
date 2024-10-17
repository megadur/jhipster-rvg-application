import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10913,
  login: 'D',
};

export const sampleWithPartialData: IUser = {
  id: 27359,
  login: 'C+7I3h@Zz3\\LP\\A4iL5c\\&xB7Y1\\We6SHqP',
};

export const sampleWithFullData: IUser = {
  id: 17955,
  login: 'Xg',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
