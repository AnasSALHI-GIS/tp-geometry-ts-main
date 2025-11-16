import GeometryVisitor from '../src/GeometryVisitor'
import Point from "./Point";
import LineString from '../src/LineString'
import Geometry from './Geometry';
import GeometryCollection from './GeometryCollection';



export default class LogGeometryVisitor implements GeometryVisitor {
    visitGeometryCollection(geometryCollection: GeometryCollection) {
        if (geometryCollection.isEmpty()){
            console.log("Je suis une geometry collection vide.");
        } else {
            let n = geometryCollection.getNumGeometries();
            console.log("Je suis une geometry collection composée de "+n+" géométrie(s).");
        }
    };
    
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
