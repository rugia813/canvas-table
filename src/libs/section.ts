/** 一區塊的一行資料 */
export default class Section<T> {
    drawFunc: String
    content: Array<String|String[]>
    /** 一區塊的一行資料 */
    constructor(arr?: Array<String|String[]>) {
        /** (string) 調用特殊繪製function */
        this.drawFunc = null
        /** (array) 資料內容 */
        this.content = arr || []
    }
    get length(): Number {
        return this.content.length
    }
    /**
     * 加入資料
     * @param  {string} text
     * @param  {string} color
     * @return this
     */
    add(text: String, color?: String): this {
        const res: String|String[] = (color) ? [text, color] : text
        this.content.push(res)
        return this
    }
    setDrawFunc(func: String) {
      this.drawFunc = func
      return this
    }
    /**
     * 設定資料
     * @param  {array} array - array of 'text' or ['text', 'color']
     * @return this
     */
    setContent(array: Array<String|String[]>) {
        this.content = array
        return this
    }
    concat(array: Array<String|String[]>) {
        this.content = this.content.concat(array)
    }
    forEach(fn: (value: String|String[], index: number, array: (String|String[])[]) => void) {
      this.content.forEach(fn)
    }
}