import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '5304db64-54f7-4077-8528-d3e596bac148',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e03f0020-f251-475c-9c8b-b68e6934fa60',
};

export const sampleWithFullData: IAuthority = {
  name: '3f55b448-9150-450b-a274-63a6f89bbed4',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
