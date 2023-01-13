import { Employee } from "./Employee.model"
import { Group } from "./Group.model"

export interface ResponseApi{
  success: boolean,
  data: {
    employees?: Employee[],
    groups?: Group[]
  }
}
