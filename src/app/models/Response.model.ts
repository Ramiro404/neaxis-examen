import { Employee } from "./Employee.model"

export interface ResponseApi<T>{
  success: boolean,
  data: {
    employees?: Employee[],
    groups?: any[]
  }
}
