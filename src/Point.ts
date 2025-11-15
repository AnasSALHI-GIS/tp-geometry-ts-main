import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";


export default class Point implements Geometry {
  private coordinate?: Coordinate;
  points: any;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate || [] ;
  }
  isEmpty(): boolean {
    return this.coordinate.length == 0;
  }

  getType(): string {
    return "Point";
  }
  translate(dx: number, dy: number) {
    if ( this.isEmpty() ){
      return ;
    }
    this.coordinate[0] += dx;
    this.coordinate[1] += dy;
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN;
  }


  y(): number {
    return this.coordinate.length > 1 ? this.coordinate[1] : Number.NaN;
  }

  clone():Point{
    return new Point ([... this.coordinate]);

  }

  getEnvelope(): Envelope {
    var liste = new EnvelopeBuilder();
    liste.insert(this.getCoordinate());
    let resultat=liste.build();


    return resultat;

  }
}
