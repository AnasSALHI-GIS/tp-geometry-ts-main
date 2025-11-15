import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Geometry from "../src/Geometry";
import GeometryVisitor from "../src/GeometryVisitor";
import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import AbstractGeometry from "../src/AbstractGeometry";
import LogGeometryVisitor from "./LogGeometryVisitor";
import Point from "./Point";

export default class GeometryCollection extends AbstractGeometry {


    constructor(geometries?: Array<Geometry>) {
        super();
        this.geometries = geometries || [];
    }
    private geometries?: Array<Geometry>;

    getNumGeometries(): number {
        return this.geometries.length;
    }

    getGeometryN(n?: number) {
        return this.geometries[n];
    }

    getType(): string {
        return "GeometryCollection";
    }

    isEmpty(): boolean {
        return this.geometries.length == 0;
    }

    translate(dx: number, dy: number) {
        for (let geometry of this.geometries) {
            geometry.translate(dx, dy);
        }
    }

    clone() {
        const clone = new GeometryCollection();
        for (let geometry of this.geometries) {
            clone.geometries.push(geometry.clone());
        }
        return clone;
    }
    getEnvelope(): Envelope {
        const build = new EnvelopeBuilder();
        for (const geometry of this.geometries) {
            geometry.accept(build);
        }
        return build.build();
    }

    accept(geometrie: GeometryVisitor): void {
        geometrie.visitGeometryCollection(this);
    }
        


}