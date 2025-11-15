import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Geometry from "../src/Geometry";
import GeometryVisitor from "../src/GeometryVisitor";

export default class GeometryWithCachedEnvelope {
    private cachedEnvelope: Envelope;
    private original: Geometry

    constructor(original: Geometry) {
        this.original = original
    }
    getEnvelope() {
        const envelopeBuilder = new EnvelopeBuilder();
        this.cachedEnvelope = this.original.getEnvelope();
        return this.cachedEnvelope;
    }

    getType(): string {
        return this.original.getType();
    }

    isEmpty(): boolean {
        return this.original.isEmpty();
    }

    translate(dx: number, dy: number) {
        this.original.translate(dx, dy);
    }

    clone() {
        return this.original.clone();
    }
}