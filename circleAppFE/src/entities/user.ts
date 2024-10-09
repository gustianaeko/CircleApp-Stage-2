export interface UserEntity {
  id: number;
  fullname: string;
  email: string;
  image: string;
  password: string;
  role: string;
  profileImage: string;
  bio: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  followers: any[]; 
  following: any[]; 
  threads: any[];   
}
