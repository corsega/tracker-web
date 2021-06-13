import IEvent from "../events/IEvent";
import IIssue from "./IIssue";

interface IIssueEvent extends IEvent {
  payload: IIssue
}

export default IIssueEvent
