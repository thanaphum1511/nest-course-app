import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';


@Controller('chat')
export class ChatController {
    constructor(private readonly utilityservice: UtilityService,
                 private readonly utilityService: UtilityService,
                 private readonly globalHelperService: GlobalHelperService
    ){}

    @Get('/shared')
    chatFunc(): string{
        return this.utilityservice.chatFunc();
    }

    @Get('/global')
    globalFunc(): string{
        return this.globalHelperService.globalFunc();
    }
}
