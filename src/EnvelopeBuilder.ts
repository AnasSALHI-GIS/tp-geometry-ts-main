import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    xVals: number[] = [];
    yVals: number[] = [];

    insert(coordinate: Coordinate) {
        this.xVals.push(coordinate[0]);
        this.yVals.push(coordinate[1]);
    }
    build(): Envelope {
        const xMin = Math.min(...this.xVals);
        const yMin = Math.min(...this.yVals);
        const xMax = Math.max(...this.xVals);
        const yMax = Math.max(...this.yVals);


        return new Envelope([xMin, yMin], [xMax, yMax]);

    }
}