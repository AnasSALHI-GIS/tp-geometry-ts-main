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


});
