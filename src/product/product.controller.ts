import { Controller, Get } from '@nestjs/common';
import { ProductService} from './product.service';
import {UtilityService} from 'src/shared/utility/utility.service';
import {GlobalHelperService} from 'src/shared/global-helper/global-helper.service'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService,
                private readonly utilityService: UtilityService,
                private readonly globalHelperService: GlobalHelperService
    ){}

    @Get('/global') //localhost:3000/product/global
    globalFunc(): string{
        return this.globalHelperService.globalFunc();
    }

    @Get('/shared') //localhost:3000/product
    sharedFunc(): string{
        return this.utilityService.shareFunc();
    }

    @Get() //localhost:3000/product
    ProductFunc(): string{
        return this.productService.productFunc();
    }

    @Get('/productjson')  //localhost:3000/product/productjson
    ProductFunc2(){
        return this.productService.productFunc2();
    }

    
}
