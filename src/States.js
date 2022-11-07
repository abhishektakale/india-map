import andamannicobar from "./topojsons/states/andamannicobar.json";
import andhrapradesh from "./topojsons/states/andhrapradesh.json";
import arunachalpradesh from "./topojsons/states/arunachalpradesh.json";
import assam from "./topojsons/states/assam.json";
import bihar from "./topojsons/states/bihar.json";
import chhattisgarh from "./topojsons/states/chhattisgarh.json";
import delhi from "./topojsons/states/delhi.json";
import goa from "./topojsons/states/goa.json";
import gujarat from "./topojsons/states/gujarat.json";
import haryana from "./topojsons/states/haryana.json";
import himachalpradesh from "./topojsons/states/himachalpradesh.json";
import jammukashmir from "./topojsons/states/jammukashmir.json";
import jharkhand from "./topojsons/states/jharkhand.json";
import karnataka from "./topojsons/states/karnataka.json";
import kerala from "./topojsons/states/kerala.json";
import lakshadweep from "./topojsons/states/lakshadweep.json";
import madhyapradesh from "./topojsons/states/madhyapradesh.json";
import maharashtra from "./topojsons/states/maharashtra.json";
import manipur from "./topojsons/states/manipur.json";
import meghalaya from "./topojsons/states/meghalaya.json";
import mizoram from "./topojsons/states/mizoram.json";
import nagaland from "./topojsons/states/nagaland.json";
import odisha from "./topojsons/states/odisha.json";
import punjab from "./topojsons/states/punjab.json";
import rajasthan from "./topojsons/states/rajasthan.json";
import sikkim from "./topojsons/states/sikkim.json";
import tamilnadu from "./topojsons/states/tamilnadu.json";
import telangana from "./topojsons/states/telangana.json";
import tripura from "./topojsons/states/tripura.json";
import uttarakhand from "./topojsons/states/uttarakhand.json";
import uttarpradesh from "./topojsons/states/uttarpradesh.json";
import westbengal from "./topojsons/states/westbengal.json";

const jsonToState = (state) => {
  switch (state) {
    case "Andaman & Nicobar Island":
      return {
        geoURL: andamannicobar,
        scaleMap: 1000,
        centerMap: [93, 10],
      };
    case "Andhra Pradesh":
      return {
        geoURL: andhrapradesh,
        scaleMap: 800,
        centerMap: [80, 17],
      };
    case "Arunachal Pradesh":
      return {
        geoURL: arunachalpradesh,
        scaleMap: 1200,
        centerMap: [94.5, 28],
      };
    case "Assam":
      return {
        geoURL: assam,
        scaleMap: 1350,
        centerMap: [92.9, 26],
      };
    case "Bihar":
      return {
        geoURL: bihar,
        scaleMap: 1300,
        centerMap: [85.5, 26],
      };
    case "Chhattisgarh":
      return {
        geoURL: chhattisgarh,
        scaleMap: 1100,
        centerMap: [82, 21],
      };
    case "NCT of Delhi":
      return {
        geoURL: delhi,
        scaleMap: 11000,
        centerMap: [77.05, 28.6],
      };
    case "Goa":
      return {
        geoURL: goa,
        scaleMap: 6000,
        centerMap: [74, 15.25],
      };
    case "Gujarat":
      return {
        geoURL: gujarat,
        scaleMap: 1000,
        centerMap: [71.5, 22],
      };
    case "Haryana":
      return {
        geoURL: haryana,
        scaleMap: 1700,
        centerMap: [76, 29],
      };
    case "Himachal Pradesh":
      return {
        geoURL: himachalpradesh,
        scaleMap: 2000,
        centerMap: [77.4, 31.8],
      };
    case "Jammu & Kashmir":
      return {
        geoURL: jammukashmir,
        scaleMap: 1000,
        centerMap: [76.3, 35],
      };
    case "Jharkhand":
      return {
        geoURL: jharkhand,
        scaleMap: 1700,
        centerMap: [85.7, 23.6],
      };
    case "Karnataka":
      return {
        geoURL: karnataka,
        scaleMap: 1100,
        centerMap: [76.5, 15],
      };
    case "Kerala":
      return {
        geoURL: kerala,
        scaleMap: 1800,
        centerMap: [76, 10.5],
      };
    case "Lakshadweep":
      return {
        geoURL: lakshadweep,
        scaleMap: 2300,
        centerMap: [73, 11],
      };
    case "Madhya Pradesh":
      return {
        geoURL: madhyapradesh,
        scaleMap: 900,
        centerMap: [78.5, 24],
      };
    case "Maharashtra":
      return {
        geoURL: maharashtra,
        scaleMap: 1000,
        centerMap: [76.8, 19.3],
      };
    case "Manipur":
      return {
        geoURL: manipur,
        scaleMap: 3400,
        centerMap: [93.8, 24.7],
      };
    case "Meghalaya":
      return {
        geoURL: meghalaya,
        scaleMap: 2500,
        centerMap: [91.3, 25.4],
      };
    case "Mizoram":
      return {
        geoURL: mizoram,
        scaleMap: 2900,
        centerMap: [92.8, 23.25],
      };
    case "Nagaland":
      return {
        geoURL: nagaland,
        scaleMap: 4000,
        centerMap: [94.3, 26.1],
      };
    case "Odisha":
      return {
        geoURL: odisha,
        scaleMap: 1300,
        centerMap: [84.4, 20.25],
      };
    case "Punjab":
      return {
        geoURL: punjab,
        scaleMap: 2300,
        centerMap: [75.35, 31.1],
      };
    case "Rajasthan":
      return {
        geoURL: rajasthan,
        scaleMap: 900,
        centerMap: [74, 26.3],
      };
    case "Sikkim":
      return {
        geoURL: sikkim,
        scaleMap: 6000,
        centerMap: [88.45, 27.6],
      };
    case "Tamil Nadu":
      return {
        geoURL: tamilnadu,
        scaleMap: 1300,
        centerMap: [78.25, 10.8],
      };
    case "Telangana":
      return {
        geoURL: telangana,
        scaleMap: 1800,
        centerMap: [79.5, 17.9],
      };
    case "Tripura":
      return {
        geoURL: tripura,
        scaleMap: 4500,
        centerMap: [91.75, 23.75],
      };
    case "Uttarakhand":
      return {
        geoURL: uttarakhand,
        scaleMap: 2000,
        centerMap: [79.3, 30],
      };
    case "Uttar Pradesh":
      return {
        geoURL: uttarpradesh,
        scaleMap: 1000,
        centerMap: [80.8, 27],
      };
    case "West Bengal":
      return {
        geoURL: westbengal,
        scaleMap: 1200,
        centerMap: [87.7, 24.2],
      };
    default:
      return {};
  }
};

export default jsonToState;
