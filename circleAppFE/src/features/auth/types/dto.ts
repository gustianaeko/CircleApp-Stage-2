import { UserEntity } from "../../../entities/user";

export type loginRequestDTO = Pick<UserEntity, "email" | "password">;

export type LoginResponseDTO = {
  user: UserEntity;
  token: string;
};

export type RegisterRequestDTO = Pick<
  UserEntity,
  "fullName" | "email" | "password"
>;

export type RegisterResponseDTO = Omit<UserEntity, "password">;
