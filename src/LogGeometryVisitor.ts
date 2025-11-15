import GeometryVisitor from '../src/GeometryVisitor'
import Point from "./Point";
import LineString from '../src/LineString'
import Geometry from './Geometry';



export default class LogGeometryVisitor implements GeometryVisitor {
    
    visitPoint(point:Point){
        if (point.getCoordinate().length==0){
            return "Je suis un point vide.";
        }else{
            return "Je suis un point avec x="+point.x()+" et y="+point.y();
        }
    }
    visitLineString(lineString:LineString){
        if(lineString.isEmpty()){
            return "Je suis une polyligne vide.";
        }else{
            const n=lineString.getNumPoints();
            return "Je suis une polyligne définie par "+n+" point(s)."
        }

    }
    
}
