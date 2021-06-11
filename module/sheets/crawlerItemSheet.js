export default class crawlerItemSheet extends ItemSheet {
    get template() {
        return `systems/crawler/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.crawler;
        return data;
    }
}