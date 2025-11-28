import packge from '../package.json' with { type: "json" };
import log from "./log.js";
import colors from "ansi-colors";

const gray=colors.gray;
const white=colors.white;
const red=colors.red;

log.log("                                       "+gray("A")+white("API")+gray("KA")+"     ");
log.log("     "+white("PIKANAAPIKANA")+"    "+gray("A")+white("NA")+"            "+gray("N")+white("A")+gray("A")+"    "+white("NA")+"    ");
log.log("               "+gray("N")+white("AA")+"    "+gray("N")+white("AA")+"            "+gray("A")+white("A")+gray("P")+"    "+white("AA")+"    ");
log.log("         "+white("AP")+"    "+white("AA")+gray("P")+"    "+gray("A")+white("AP")+"    "+gray("A")+white("API")+"      "+gray("I")+white("KAN")+gray("AA")+"     ");
log.log("         "+white("PI")+"   "+gray("A")+white("AP")+"     "+gray("A")+white("PI")+gray("K")+white("ANAA")+gray("P")+"                   ");
log.log("         "+white("IK")+"  "+white("AAP")+"      "+gray("P")+white("IK")+gray("AN")+"                       ");
log.log("         "+white("KA")+gray("N")+white("AA")+gray("P")+"       "+gray("I")+white("KA")+"                         ");
log.log("        "+gray("K")+white("AN")+"           "+gray("K")+white("AN")+"                         ");
log.log("        "+white("ANA")+"           "+gray("A")+white("NA")+"                         ");
log.log("       "+gray("A")+white("NA")+"            "+gray("N")+white("AA")+"                         ");
log.log("     "+gray("K")+white("AN")+gray("A")+"              "+white("API")+gray("KANAAPI")+"                 ");
log.log("    "+gray("K")+white("A")+gray("N")+"                 "+gray("IKANAAPIKA")+"        "+colors.bold(red('apikana '+packge.version)));
log.log();
