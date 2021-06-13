import IEvent from "../events/IEvent";
import IProject from "./IProject";

interface IProjectEvent extends IEvent {
  payload: IProject
}

export default IProjectEvent
