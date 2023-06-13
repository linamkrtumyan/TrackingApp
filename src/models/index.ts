export interface ITransport {
  id: number;
  driver: string;
  categoryId: number;
  longitude: string;
  latitude: string;
  phoneNumber: string;
}

export type Transports = {
  transport: ITransport;
};

export interface ICategories {
  id: number;
  name: string;
}
