export class Topic {
    _id: string;
    name:string;
    topic:string;
    unit:string;
    type:string;
    minValue?: number;
    maxValue?: number;
    onSwitchValue?: string;
    offSwitchValue?: string;
    active:boolean;
}