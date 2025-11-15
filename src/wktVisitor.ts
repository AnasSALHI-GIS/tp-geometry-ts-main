import GeometryVisitor from '../src/GeometryVisitor'
import Point from "./Point";
import LineString from '../src/LineString'
import Geometry from './Geometry';

export default class wktVisitor implements GeometryVisitor {
    private buffer?: string="";


    visitPoint(point: Point) {
        if (point.isEmpty()) {
            this.buffer = "Couple vide";
        } else {
            this.buffer = "POINT(" + point.x() + " " + point.y() + ")";
        }

    }

    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) {
            this.buffer = "LINESTRING EMPTY";
            return;
        }
        let liste = [];

        for (let i = 0; i < lineString.getNumPoints(); i++) {
            const c = lineString.getPointN(i).getCoordinate();
            const x = c[0];
            const y = c[1];
            liste.push(x + ' ' + y);
        }
        this.buffer="LINESTRING(" + liste.join(',') + ")";

    }


    getResult(): string {
        
        return this.buffer;
    }

}
