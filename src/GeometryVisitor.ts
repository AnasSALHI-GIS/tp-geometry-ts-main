import Point from "./Point";
import LineString from '../src/LineString'


export default interface GeometryVisitor{
    visitPoint(point: Point);
    visitLineString(lineString:LineString);
}