import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import AbstractGeometry from "../src/AbstractGeometry";
import LogGeometryVisitor from "./LogGeometryVisitor";
import Point from "./Point";
import GeometryVisitor from "./GeometryVisitor";




export default class LineString extends  AbstractGeometry {


  constructor(points?: Point[]) {
    super();
    this.points = points || [];
  }
  private points: Point[];
  liste = new EnvelopeBuilder();

  translate(dx: number, dy: number) {
    for (let point of this.points) {
      point.translate(dx, dy);
    }
  }

  isEmpty(): boolean {
    return this.points.length == 0;
  }
  getType(): string {
    return "LineString";
  }
  getNumPoints(): number {
    return this.points.length;
  }
  getPointN(n: number): Point {
    return this.points[n];

  }
  clone(): LineString {
    const points = new Array<Point>;
    for (let point of this.points) {
      points.push(point.clone())
    }
    return new LineString(points);
  }

  getEnvelope(): Envelope {
    var liste = new EnvelopeBuilder();
    for (let point of this.points) {
      liste.insert(point.getCoordinate());
    }
    return liste.build();
  }
  accept(visitor: GeometryVisitor) {
    return visitor.visitLineString(this);
  }

}