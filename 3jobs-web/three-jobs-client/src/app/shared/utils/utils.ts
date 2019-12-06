export class Utils {

    public objectToMap(obj: any) {
        const mp = new Map();
        if (obj !== null && obj) {
            Object.keys(obj).forEach(k => mp.set(k, obj[k]));
        }
        return mp;
    }
    public mapToObject(map: Map<number, string>) {
        const obj = {};
        map.forEach((v, k) => obj[k] = v);
        return obj;
    }
}
