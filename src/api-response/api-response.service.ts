import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiResponseService {
    
    succes(data = null, messages = null) {
        
    }

    error(code = 400, messages = null) {
        return 'error'
    }
}
