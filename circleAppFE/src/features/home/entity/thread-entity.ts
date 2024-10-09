import { UserEntity } from "../../../entities/user";
import { ReplyEntity } from "./reply-entity";

export interface GetThreadEntity {
    id: number;
    content?: string;
    image?: string | null;
    likesCount?: number;
    repliesCount?: number;
    timeAgo?:string;
    createdAt: Date;
    updatedAt: Date;
    author: Omit<UserEntity, "password">;
    Reply: ReplyEntity[];
}