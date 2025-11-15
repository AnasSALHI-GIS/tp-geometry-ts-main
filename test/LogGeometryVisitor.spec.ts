import "mocha";
import { expect } from "chai";

import WktWriter from '../src/WktWriter'
import Coordinate from "../src/Coordinate";
import Envelope from '../src/Envelope';
import GeometryVisitor from '../src/GeometryVisitor'
import Point from "../src/Point";
import LineString from '../src/LineString'
import LogGeometryVisitor from '../src/LogGeometryVisitor'


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


});
