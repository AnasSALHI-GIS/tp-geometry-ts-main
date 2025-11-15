import Point from "./Point";
import LineString from '../src/LineString'
import GeometryCollection from "./GeometryCollection";


export default interface GeometryVisitor{
    visitPoint(point: Point);
    visitLineString(lineString:LineString);
    visitGeometryCollection(geometrie: GeometryCollection);
}