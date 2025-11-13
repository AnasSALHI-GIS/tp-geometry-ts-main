import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default interface EnvelopeBuilder{
    insert(Coordinate:Coordinate);
    build():Envelope;
}