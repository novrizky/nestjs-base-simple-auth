import { HttpException } from '@nestjs/common';

export class Response {
  message: string;
  data: any;

  constructor(message: string, data: any) {
    this.message = message;
    this.data = data;
  }
}

export class ResponsePaging {
  message: string;
  total: number;
  data: any;

  constructor(message: string, total: number, data: any) {
    this.message = message;
    this.total = total;
    this.data = data;
  }
}

export const responseData = (message: string, data: any = null) =>{
  return {
    message: message,
    data: data
  }
}

export const response = (message: string, data: any = null) => new Response(message, data);

export const responseError = (message: string, code: number = 400) => {
  const messageSplit = message.split('|#');
  if(messageSplit.length > 1){
    return Promise.reject(new HttpException({ message: messageSplit[0] }, parseInt(messageSplit[1].trim())));
  }else{
    return Promise.reject(new HttpException({ message: message }, code));
  }
};

export const responsePaging = (message: string, total: number, data: any) => new ResponsePaging(message, total, data);
