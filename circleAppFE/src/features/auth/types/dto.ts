import { UserEntity } from "../../../entities/user";

export type loginRequestDTO = Pick<UserEntity, "email" | "password">;

export type LoginResponseDTO = {
  status: string;
  message: string;
  data: {
    accessToken: string;
    user: UserStoreDTO;
  };
};

export type RegisterRequestDTO = Pick<
  UserEntity,
  "fullname" | "email" | "password"
>;

export type RegisterResponseDTO = {
  user: Pick<UserEntity, "email" | "fullname">;
};

export type UserStoreDTO = Omit<UserEntity, "password">;

export type checkAuthenticationResponseDTO = Omit<UserEntity, "password">