/** 一區塊的一行資料 */
export default class Section {
    /** 一區塊的一行資料 */
    constructor(arr) {
        /** (string) 調用特殊繪製function */
        this.drawFunc = null
        /** (array) 資料內容 */
        this.content = arr || []
    }
    get length() {
        return this.content.length
    }
    /**
     * 加入資料
     * @param  {string} text
     * @param  {string} color
     * @return this
     */
    add(text, color) {
        const res = (color) ? [text, color] : text
        this.content.push(res)
        return this
    }
    setDrawFunc(func) {
      this.drawFunc = func
      return this
    }
    /**
     * 設定資料
     * @param  {array} array - array of 'text' or ['text', 'color']
     * @return this
     */
    setContent(array) {
        this.content = array
        return this
    }
    concat(array) {
        this.content = this.content.concat(array)
    }
    forEach(fn) {
      this.content.forEach(fn)
    }
}