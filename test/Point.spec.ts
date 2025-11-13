import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from '../src/LineString'

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([])
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.isEmpty()).to.be.true;
        expect(p.getType()).to.equal("Point");

    });
    it("test default LineString", ()=>{
        const g=new LineString();
        expect(g.getType()).to.equal("LineString");
        expect(g.getNumPoints()).to.equal(0);
    });
    
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.isEmpty()).to.be.false;
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("should translate point",() =>{
        const p=new Point([3.0,4.0])
        p.translate(1.0,2.0);
        expect(p.getCoordinate()).to.deep.equal([4.0,6.0])
    });
});