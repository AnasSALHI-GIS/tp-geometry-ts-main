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
    it("test Envolope constructuer", () => {
        const visitor = new LogGeometryVisitor();
        const p1 = new Point([3.0, 4.0]);
        const p2= new Point( [3.5, 4.5]);
        const l1=new LineString([p1,p2]);
        p1.accept(visitor);
        l1.accept(visitor);
    });


});
