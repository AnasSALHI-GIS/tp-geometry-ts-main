import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from '../src/LineString'
import WktWriter from '../src/WktWriter'
import Coordinate from "../src/Coordinate";
import Envelope from '../src/Envelope';
import EnvelopeBuilder from "../src/EnvelopeBuilder";


describe("test EnvelopeBuilder", () => {
    it("test EnvolopeBuilder insert() et build()", () => {
        let env= new EnvelopeBuilder();
        env.insert([4.5,5.5]);
        env.insert([0.5,1.5]);
        let resultat= env.build();
        expect(resultat.toString()).to.be.equal("[0.5,1.5],[4.5,5.5]");


    });


});
