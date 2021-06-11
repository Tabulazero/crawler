import {crawler} from "./module/config.js";
import crawlerItemSheet from "./module/sheets/crawlerItemSheet.js";

Hooks.once("init", function(){
    console.log("cralwer | Crawler initializing...");

    CONFIG.crawler = crawler;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("crawler", crawlerItemSheet, {makeDefault: true});
});