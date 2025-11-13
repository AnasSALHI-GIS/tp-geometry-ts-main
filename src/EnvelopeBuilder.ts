import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder{ 
     Xvals:number[];
     Yvals:number[];
    insert(coordinate:Coordinate){
        this.Xvals.push(coordinate[0]);
    }
    build():Envelope{
        const Xmin=Math.min(...this.Xvals);

        return;
    }
}