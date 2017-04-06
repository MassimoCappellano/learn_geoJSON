'use strict';

const polyline = require('polyline');
const fs = require('fs');

var result = polyline.decode('}qpwFvdsbMvC|@|@wC|@sCDWFYOEeGcBoA[eGeB[CkCq@gCo@KCFW`CqHfE_NaC{A_EkC{GqE_C{A~@sC'); 

console.log('RESULT:', result);

var direction2 = 'ibjuG{~tt@oAMAd@GtAm@fIYhFgAjLw@`IKh@Lj@^NXKj@Kb@@fOpD`LnClGbB|AXrDh@pK|Aj@VZVBHHLPFNARSDKx@EhGl@x@PhPpHrDnBv@n@v@dA|A|CnArEVdBRlClAtXp@nN^lCn@pCz@fCdAvB|@rAtAbBxAlAvAx@rAj@zA\\zAP`EPtEVlBXfCp@xDnA|HhCdCj@zD^bILjB?h@g@VcAEeAKc@w@qAu@iAMk@DmBD_@A[\\eBT_Ah@mBn@kB~B{EtByCvFmFbGmEjJwGzBeBrCiCtDmEfBqC~A_DfAsC`CwHv@_DvCcLhB{GbAuC~BgFbC{DhCuC~BmBhAs@`EkB`Ey@pIgAzA[nDiAbDiAjKaEhBi@jB_@vD[bDAvDFpB@nRZdDCxBK`BUbE}@~Ak@vCuAbBaAtDgC`L}HbI}FvEgErEmFhEwGdC}E`CwFlD_KxMm`@zCuHjDsHnEaH|CyDbDeDzD_DvFgDzFaCnLqD`FiBpCwAzDcCxD_DlEsExJ_MbEqFbF_FjDcCjBgAdK{EtC{AxDgCdEaDrBqBdTiUrCwCjE_EpL{J~F_FxC}BRA|@g@lBeAlCiB~H_F~EyCpAe@tDcAnCw@j@g@Xi@Pu@HgBUwAcDqKwAcFwAmDwEwMcBmEcAyB{B{DyBiDcAuAs@yAOuAFwA^kAhCcDd@u@Ts@Fs@GoAiEgTwBoLQYuBkSkCyZ}@iJmEw`@aAeIkEg`@}Co[eCeYcBaTwA_Us@{KgCmc@aBu\\}@cSe@kGe@sJoA{VoBa_@gFocA_Cuh@iAyZwA}`@_@kJWuJyAk_@cAqYiB_h@aBqe@_GebBsAu^m@wN{Boe@iHmuAiMocCkAwTmAyV_@mHe@aIqAaWeAcVs@_UoAkn@a@cTe@kUIgHk@o]aBofAiBsgAO_IWaG_@qCm@cC}@_D_AaCwHgNiCiFeD{IeIaTyVkp@eWaq@sKwXsTkl@oFiNu@qBg@iB[oAMwA?_BT}@P]Z[\\SJQl@MjB_@j@IfBDfBf@tH`FxAnA\\x@LhAGdA[dA}@bA}@^[B]OYo@@o@Tc@fCm@POdBWhAUHM\\QFMhB_@fAYhBw@v@o@x@aAtIcMxSyZlDcFdDyE|BqDzF_KfA}AdBcBfCcB|CgAhFkAdAUnCg@jH{AhPiD`NgCfCw@jAo@zB{B`GiFhBwBvBuBnAWjB}ALE~@ClAE`UcE~GcAlB_@PjGFjDn@TlA^';

var result2 = polyline.decode(direction2); 

console.log('RESULT2:', result2);

// invert lat, lng --> lng, lat
var result3 = result2.map(function(elem) {
	var newElem = [];
	newElem.push(elem[1]);
	newElem.push(elem[0]);
	return newElem;
});

var geoJSONObj = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: 1
      },
      geometry: {
        type: "LineString",
        coordinates: result3
      }
    }]
};

console.log('---------------------------------------');
console.log(JSON.stringify(geoJSONObj, null, 2));

fs.writeFile('test.geojson', JSON.stringify(geoJSONObj, null, 2));


