import "mocha";
import { expect } from "chai";

import WktWriter from '../src/WktWriter'
import Coordinate from "../src/Coordinate";
import Envelope from '../src/Envelope';
import GeometryVisitor from '../src/GeometryVisitor'
import Point from "../src/Point";
import LineString from '../src/LineString'
import LogGeometryVisitor from '../src/LogGeometryVisitor'
import wktVisitor from '../src/wktVisitor'
import GeometryCollection from "../src/GeometryCollection";


describe("test wktVisitor ", () => {
    it("test le resultat de getResult", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([3.5, 4.5]);
        const l1 = new LineString([p1, p2]);
        const v1 =new Point();
        const v2= new LineString();
        const visitor = new wktVisitor();
        const visitor2 = new wktVisitor();
        const visitor3= new wktVisitor();
        const visitor4= new wktVisitor();
        p1.accept(visitor);
        l1.accept(visitor2);
        v1.accept(visitor3);
        v1.accept(visitor4);


        const resultat1 =visitor.getResult();
        const resultat2 =visitor2.getResult();
        const resultat3=visitor3.getResult();
        const resultat4=visitor4.getResult();


        expect(resultat1).to.deep.equal("POINT(3 4)");
        expect(resultat2).to.deep.equal("LINESTRING(3 4,3.5 4.5)");
        expect(resultat3).to.deep.equal("Couple vide");
        expect(resultat4).to.deep.equal("Couple vide");

    });

    it("test visitLineString avec LineString vide", () => {
        const visitor = new wktVisitor();
        const emptyLineString = new LineString();
        visitor.visitLineString(emptyLineString);
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });

    it("test visitGeometryCollection collection vide", () => {
        const visitor = new wktVisitor();
        const emptyCollection = new GeometryCollection();
        visitor.visitGeometryCollection(emptyCollection);
        expect(visitor.getResult()).to.equal("GEOMETRYCOLLECTION EMPTY");
    });

    it("test visitGeometryCollection autre collection", () => {
        const visitor = new wktVisitor();
        const point = new Point([1, 2]);
        const lineString = new LineString([new Point([0, 0]),new Point([1, 1])]);
        const collection = new GeometryCollection([point, lineString]);
        visitor.visitGeometryCollection(collection);
        expect(visitor.getResult()).to.equal("GEOMETRYCOLLECTION(POINT(1 2),LINESTRING(0 0,1 1))");
    });

    it("test wktVisitor ", () => {
        let visitor = new wktVisitor();
        new Point().accept(visitor);
        expect(visitor.getResult()).to.equal("POINT EMPTY");

        visitor = new wktVisitor();
        new Point([3, 4]).accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3 4)");

        visitor = new wktVisitor();
        new LineString().accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");

        visitor = new wktVisitor();
        
        new LineString([new Point([0, 0]), new Point([1, 1]), new Point([2, 2])]).accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING(0 0,1 1,2 2)");

        visitor = new wktVisitor();
        new GeometryCollection().accept(visitor);
        expect(visitor.getResult()).to.equal("GEOMETRYCOLLECTION EMPTY");

        visitor = new wktVisitor();
        const col = new GeometryCollection([
            new Point([1, 1]), 
            new LineString([new Point([0, 0]), new Point([1, 1])])
        ]);
        col.accept(visitor);
        expect(visitor.getResult()).to.equal("GEOMETRYCOLLECTION(POINT(1 1),LINESTRING(0 0,2 2))");
    });


});
