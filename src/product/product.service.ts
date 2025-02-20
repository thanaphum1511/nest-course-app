import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    productFunc(): string{
    return 'Hello from product service';
    }

    productFunc2(){
        return{
            name: 'thanaphum',
            lastname: 'laohabunjong',
            age: '19',
        };
    }
}
