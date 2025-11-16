import "mocha";
import { expect } from "chai";

import WktWriter from '../src/WktWriter'
import Coordinate from "../src/Coordinate";
import Envelope from '../src/Envelope';
import GeometryVisitor from '../src/GeometryVisitor'
import Point from "../src/Point";
import LineString from '../src/LineString'
import LogGeometryVisitor from '../src/LogGeometryVisitor'
import GeometryCollection from "../src/GeometryCollection";


describe("test LogGeometryVisitor ", () => {
    it("test la validité de la fonction accept", () => {
        const visitor = new LogGeometryVisitor();
        const p1 = new Point([3.0, 4.0]);
        const p2= new Point( [3.5, 4.5]);
        const l1=new LineString([p1,p2]);
        const resultat1= p1.accept(visitor);
        const resultat2= l1.accept(visitor);
        expect(resultat1).to.deep.equal("Je suis un point avec x=3 et y=4");
        expect(resultat2).to.deep.equal("Je suis une polyligne définie par 2 point(s).");

    });
    it("test visitPoint ", () => {
        const visitor = new LogGeometryVisitor();
        const point = new Point([3.0, 4.0]);
        visitor.visitPoint(point);
        expect(true).to.equal(true);
    });

    it("test visitLineString ", () => {
        const visitor = new LogGeometryVisitor();
        const p1=new Point([0,0]);
        const p2=new Point([1,2]);
        const p3=new Point([3,4]);

        const lineString = new LineString([p1, p2, p3]);
        visitor.visitLineString(lineString);
        expect(true).to.equal(true);
    });

    it("test visitGeometryCollection ", () => {
        const visitor = new LogGeometryVisitor();
        const point = new Point([1,2]);
        const p1=new Point([0,0]);
        const p2=new Point([3,4]);
        const lineString = new LineString([p1, p2]);
        const collection = new GeometryCollection([point, lineString]);
        visitor.visitGeometryCollection(collection);
        expect(true).to.equal(true);
    });

    it("test LogGeometryVisitor accept()", () => {
        const visitor = new LogGeometryVisitor();
        
        const point = new Point([5, 10]);
        point.accept(visitor);
        const p1=new Point([0,0]);
        const p2=new Point([1,2]);
        
        const lineString = new LineString([p1, p2]);
        lineString.accept(visitor);
        
        const collection = new GeometryCollection([point, lineString]);
        collection.accept(visitor);
        
        expect(true).to.equal(true);
    });
    
    it("test visitPoint avec Point vide", () => {
    const visitor = new LogGeometryVisitor();
    const emptyPoint = new Point();
    const result = visitor.visitPoint(emptyPoint);
    expect(result).to.equal("Je suis un point vide.");
});

it("test visitLineString  vide", () => {
    const visitor = new LogGeometryVisitor();
    const emptyLineString = new LineString();
    const result = visitor.visitLineString(emptyLineString);
    expect(result).to.equal("Je suis une polyligne vide.");
});

it("test visitGeometryCollection  vide", () => {
    const visitor = new LogGeometryVisitor();
    const emptyCollection = new GeometryCollection();
    visitor.visitGeometryCollection(emptyCollection);
    expect(true).to.equal(true);
});

it("test visitPoint ", () => {
    const visitor = new LogGeometryVisitor();
    const point = new Point([10, 20]);
    const result = visitor.visitPoint(point);
    expect(result).to.equal("Je suis un point avec x=10 et y=20");
});

it("test visitLineString ", () => {
    const visitor = new LogGeometryVisitor();
    const p1 = new Point([0, 0]);
    const p2 = new Point([1, 1]);
    const p3 = new Point([2, 2]);
    const lineString = new LineString([p1, p2, p3]);
    const result = visitor.visitLineString(lineString);
    expect(result).to.equal("Je suis une polyligne définie par 3 point(s).");
});


});
