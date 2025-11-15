import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import Point from "../src/Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";

export default class EnvelopeBuilder implements GeometryVisitor {
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
    visitPoint(point: Point){
        this.insert(point.getCoordinate());
    }
    visitLineString(linestring: LineString): void {
        for(let i = 0; i<linestring.getNumPoints(); i++){
            this.visitPoint(linestring.getPointN(i))
        }
    }
    visitGeometryCollection(g: GeometryCollection) {
        for (let i = 0; i < g.getNumGeometries(); i++) {
            const geometry = g.getGeometryN(i);
            geometry.accept(this);  
        }
    }
}