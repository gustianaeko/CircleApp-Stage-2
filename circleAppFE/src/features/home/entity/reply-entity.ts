import { UserEntity } from "../../../entities/user";
import { GetThreadEntity } from "./thread-entity";

export interface ReplyEntity {
    id: number;
    content?: string;
    likesCount?: number;
    repliesCount?: number;
    createdAt: Date;
    updatedAt: Date;
    threadId: number;
    thread: GetThreadEntity;
    author: Omit<UserEntity, "password">;
}

