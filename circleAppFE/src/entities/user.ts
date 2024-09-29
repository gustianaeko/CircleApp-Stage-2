export interface UserEntity {
  id: number;
  fullName: string;
  email: string;
  image: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
