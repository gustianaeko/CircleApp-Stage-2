export interface UserEntity {
  id: number;
  fullname: string;
  email: string;
  image: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
