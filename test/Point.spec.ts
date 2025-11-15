import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from '../src/LineString'
import WktWriter from '../src/WktWriter'
import GeometryWithCachedEnvelope from '../src/GeometryWithCachedEnvelope'

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([])
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.isEmpty()).to.be.true;
        expect(p.getType()).to.equal("Point");

    });
    it("test default LineString", () => {
        const g = new LineString();
        expect(g.getType()).to.equal("LineString");
        expect(g.getNumPoints()).to.equal(0);
    });

    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.isEmpty()).to.be.false;
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("test translate point", () => {
        const p = new Point([3.0, 4.0])
        p.translate(1.0, 2.0);
        expect(p.getCoordinate()).to.deep.equal([4.0, 6.0])
    });
    it("test getEnvolope()", () => {
        const p = new Point([3.0, 4.0])
        let env=p.getEnvelope();
        expect(env.toString()).to.equal("[3,4],[3,4]")
    })
    it("test wkt empty", () => {
        const g = new Point();
        const writer = new WktWriter();
        const wkt = writer.write(g);
        expect(wkt).to.deep.equal("POINT EMPTY");
    })

    it("test wkt point ", () => {
        const g = new Point([3.0, 4.0]);
        const writer = new WktWriter();
        const wkt = writer.write(g);
        expect(wkt).to.deep.equal("POINT(3 4)");
    })

    it("test asText ", () => {
        const p1 = new Point([2,3]);
        const resultat = p1.asText();
        expect(resultat).to.deep.equal("POINT(2 3)");
    })
    it("GeometryWithCachedEnvelope constructeur ", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([3.0, 4.0]);
        const l = new LineString([p1, p2]);
        var g = new GeometryWithCachedEnvelope(l);
        const a = g.getEnvelope();
        const b = g.getEnvelope();
        expect(a.toString()).to.deep.equal("[1,2],[3,4]");
        expect(a).to.deep.equal(b);
    })
});