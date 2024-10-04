import { PrismaClient, Thread } from "@prisma/client";
import { CreateThreadDTO, UpdateThreadDTO } from "../dto/thread-dto";
import { CustomError, CustomErrorCode } from "../types/error";

const prisma = new PrismaClient();

class ThreadService {
  async createThread(data: CreateThreadDTO): Promise<Thread | null> {
    const createdThread = await prisma.thread.create({
      data: { ...data, userId: 1 },
    });
    return createdThread;
  }

  async getAllThreads(): Promise<Thread[]> {
    const findAllThreads = await prisma.thread.findMany({
      include: {
        User: true,
      },
    });

    return findAllThreads;
  }

  async getThreadById(id: number): Promise<Thread | null> {
    const thread = await prisma.thread.findUnique({
      where: {
        id: id,
      },
    });

    if (!thread) {
      throw {
        status: 404,
        message: "Thread not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }

    return thread;
  }

  async updateThread(
    id: number,
    data: UpdateThreadDTO
  ): Promise<Thread | null> {
    const thread = await prisma.thread.findUnique({
      where: {
        id: id,
      },
    });

    if (!thread) {
      throw {
        status: 404,
        message: "Thread not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }

    if (data.content) {
      thread.content = data.content;
    }

    if (data.image) {
      thread.image = data.image;
    }

    const updatedThread = prisma.thread.update({
      data: thread,
      where: { id: id },
    });

    return updatedThread;
  }

  async deleteThread(id: number): Promise<Thread | null> {
    const thread = await prisma.thread.findUnique({
      where: { id },
    });

    if (!thread) {
      throw {
        status: 404,
        message: "Thread not found!",
        code: CustomErrorCode.USER_NOT_EXISTS,
      } as CustomError;
    }

    const deletedThread = await prisma.thread.delete({
      where: { id },
    });

    return deletedThread;
  }
}

export default new ThreadService();
