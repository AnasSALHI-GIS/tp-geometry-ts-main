import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from '../src/LineString'
import WktWriter from '../src/WktWriter'
import Coordinate from "../src/Coordinate";
import Envelope from '../src/Envelope';
import GeometryCollection from "../src/GeometryCollection";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";
import wktVisitor from "../src/wktVisitor";


describe("test GeometryWithCachedEnvelope", () => {
    it("test getEnvelope is cached", () => {
        const point = new Point([3.0, 4.0]);
        const decorated = new GeometryWithCachedEnvelope(point);

        const envelope1 = decorated.getEnvelope();
        const envelope2 = decorated.getEnvelope();
        expect(envelope1).to.deep.equal(envelope2);
    });

    it("test translate invalidates cache", () => {
        const point = new Point([3.0, 4.0]);
        const decorated = new GeometryWithCachedEnvelope(point);

        const envelope1 = decorated.getEnvelope();

        decorated.translate(1.0, 1.0);

        const envelope2 = decorated.getEnvelope();

        expect(envelope1).to.not.equal(envelope2);

        expect(envelope2.getXmin()).to.equal(4.0);
        expect(envelope2.getYmin()).to.equal(5.0);
    });

    it("test getType delegation", () => {
        const point = new Point([3.0, 4.0]);
        const decorated = new GeometryWithCachedEnvelope(point);

        expect(decorated.getType()).to.equal("Point");
    });

    it("test isEmpty delegation on non-empty geometry", () => {
        const point = new Point([3.0, 4.0]);
        const decorated = new GeometryWithCachedEnvelope(point);

        expect(decorated.isEmpty()).to.equal(false);
    });

    it("test isEmpty delegation on empty geometry", () => {
        const point = new Point();
        const decorated = new GeometryWithCachedEnvelope(point);

        expect(decorated.isEmpty()).to.equal(true);
    });

    

   

    

    it("test with LineString", () => {
        const lineString = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([2.0, 2.0])
        ]);
        const decorated = new GeometryWithCachedEnvelope(lineString);
        const envelope1 = decorated.getEnvelope();
        const envelope2 = decorated.getEnvelope();

        expect(envelope1).to.deep.equal(envelope2);
        expect(envelope1.getXmin()).to.equal(0.0);
        expect(envelope1.getXmax()).to.equal(2.0);
    });
});

