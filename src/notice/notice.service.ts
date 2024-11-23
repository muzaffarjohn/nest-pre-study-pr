// notice.service.ts

import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NoticeService {
  // This is simply to write code in the service file.
  // In fact, when using NestJS based on a database, values should not be handled in this way.
  noticeId = 1;
  noticeList: {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
  }[] = [];

  getNotice(id: string) {
    const [matchedNotice] = this.noticeList.filter(
      (notice) => notice.id === parseInt(id),
    );

    return matchedNotice;
  }

  createNotice({ title, content }: { title: string; content: string }) {
    if (title === undefined || content === undefined) {
      throw new BadRequestException();
    }

    const newNotice = {
      id: this.noticeId,
      title,
      content,
      createdAt: new Date(),
    };

    this.noticeList.push(newNotice);
    this.noticeId += 1;

    return {
      message: 'created',
      data: newNotice,
    };
  }
}
