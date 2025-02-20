import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalHelperService {
    globalFunc(): string{
        return 'user global module'
    }

}
