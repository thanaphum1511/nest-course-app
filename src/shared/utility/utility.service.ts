import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
    shareFunc(): string{
        return 'use shared module';
    }

    userFunc(): string{
        return 'user'
    }

    orderFunc(): string{
        return 'order'
    }

    chatFunc(): string{
        return 'chat'
    }
}
