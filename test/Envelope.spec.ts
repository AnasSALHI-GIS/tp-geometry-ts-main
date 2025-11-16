import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from '../src/LineString'
import WktWriter from '../src/WktWriter'
import Coordinate from "../src/Coordinate";
import Envelope from '../src/Envelope';
import GeometryCollection from "../src/GeometryCollection";


describe("test Envelope", () => {
    it("test Envolope constructuer", () => {
        const env = new Envelope([],[]);
        expect(env.isEmpty()).to.equal(true);
        expect(Number.isNaN(env.getXmax())).to.be.true;
        expect(Number.isNaN(env.getXmin())).to.be.true;
        expect(Number.isNaN(env.getYmin())).to.be.true;
        expect(Number.isNaN(env.getYmax())).to.be.true;
    });
    it("test getXmax", () => {
        const env = new Envelope([1,2],[4,5]);
        expect(env.getXmin()).to.be.equal(1);
        expect(env.getYmin()).to.be.equal(2);
        expect(env.getXmax()).to.be.equal(4);
        expect(env.getYmax()).to.be.equal(5);
        expect(env.toString()).to.be.deep.equal("[1,2],[4,5]");

    });



});
