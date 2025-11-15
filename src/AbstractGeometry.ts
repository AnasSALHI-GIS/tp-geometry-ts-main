import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Geometry from "../src/Geometry";
import GeometryVisitor from "./GeometryVisitor";
import wktVisitor from '../src/wktVisitor'
//import AbstractGeometry from "../src/AbstractGeometry";

export default abstract class AbstractGeometry implements Geometry{  
    abstract getType(): string;
    abstract isEmpty(): boolean;
    abstract translate(dx: number, dy: number): void;
    abstract clone(): Geometry;
    abstract getEnvelope(): Envelope;
    abstract accept(visitor:GeometryVisitor);
    asText(): string{
        const visitor = new wktVisitor();
        this.accept(visitor);
        return visitor.getResult();
    };

}