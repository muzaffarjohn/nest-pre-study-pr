import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticeController } from './notice/notice.controller';
import { NoticeModule } from './notice/notice.module';

@Module({
  imports: [NoticeModule],
  controllers: [AppController, NoticeController],
  providers: [AppService],
})
export class AppModule {}
