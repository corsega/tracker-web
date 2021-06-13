import IEvent from "../events/IEvent";
import IUser from "./IUser";

interface IUserEvent extends IEvent {
  payload: IUser
}

export default IUserEvent
