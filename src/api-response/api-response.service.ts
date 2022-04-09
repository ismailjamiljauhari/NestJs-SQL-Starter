import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ApiResponseService {
    
    succes(data = null, messages = 'success') {
        const httpStatus = this.setHttpStatus(200)
        throw new HttpException({
            statusCode: httpStatus,
            message: messages,
            data: data
        }, httpStatus);
    }

    error(code = 400, messages = 'error') {
        const httpStatus = this.setHttpStatus(code)
        throw new HttpException({
            statusCode: httpStatus,
            message: messages,
        }, httpStatus);
    }


    private setHttpStatus(code:number) {
        let httpStatus
        switch (code) {
            case 400:
                httpStatus = HttpStatus.BAD_REQUEST
                break;
        
            default:
                httpStatus = HttpStatus.OK
                break;
        }

        return httpStatus
    }
}
