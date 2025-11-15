import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft: Coordinate;
    private topRight: Coordinate;

    constructor(bottomLeft: Coordinate, topRight: Coordinate) {
        this.bottomLeft = bottomLeft, this.topRight = topRight;
    }

    isEmpty(): boolean {
        return this.bottomLeft.length == 0 && this.topRight.length == 0;

    }
    getXmin(): number {
        if (this.isEmpty()) {
            return Number.NaN;
        }
        else {
            return this.bottomLeft[0];
        }
    }
    getYmin(): number {
        if (this.isEmpty()) {
            return Number.NaN;
        }
        else {
            return this.bottomLeft[1];
        }
    }
    getXmax(): number {
        if (this.isEmpty()) {
            return Number.NaN;
        }
        else {
            return this.topRight[0];
        }
    }
    getYmax(): number {
        if (this.isEmpty()) {
            return Number.NaN;
        }
        else {
            return this.topRight[1];
        }
    }
    toString(): string {
        return this.isEmpty() ? "" : "[" + this.bottomLeft.toString() + "],[" + this.topRight.toString() + "]";
    }
}