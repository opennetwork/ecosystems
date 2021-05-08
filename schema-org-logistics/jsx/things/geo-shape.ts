import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"

export interface GeoShapeThing extends Thing<"GeoShape"> {

}

export interface GeoShapeProperties {

}

export interface GeoShape extends GeoShapeThing, GeoShapeProperties {

}

export type GeoShapeReference = GeoShapeThing | GeoShape

export const GeoShapeThingSymbol = Symbol("GeoShapeThing");
export type GeoShapeThingToken = TokenVNodeBase<typeof GeoShapeThingSymbol, GeoShapeThing>;
export type GeoShapeThingTokenFn = TokenVNodeFn<typeof GeoShapeThingSymbol, GeoShapeThing>;
export const GeoShapeThing: GeoShapeThingTokenFn = createToken(GeoShapeThingSymbol);
export const GeoShapePropertiesSymbol = Symbol("GeoShapeProperties");
export type GeoShapePropertiesToken = TokenVNodeBase<typeof GeoShapePropertiesSymbol, GeoShapeProperties>;
export type GeoShapePropertiesTokenFn = TokenVNodeFn<typeof GeoShapePropertiesSymbol, GeoShapeProperties>;
export const GeoShapeProperties: GeoShapePropertiesTokenFn = createToken(GeoShapePropertiesSymbol);
export const GeoShapeSymbol = Symbol("GeoShape");
export type GeoShapeToken = TokenVNodeBase<typeof GeoShapeSymbol, GeoShape>;
export type GeoShapeTokenFn = TokenVNodeFn<typeof GeoShapeSymbol, GeoShape>;
export const GeoShape: GeoShapeTokenFn = createToken(GeoShapeSymbol);
