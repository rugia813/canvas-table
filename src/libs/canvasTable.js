import { Drawer } from './drawer'
import Section from './section'
class CanvasTable {
  constructor(props) {
    this.cellWidth = props.cellWidth || 64
    this.cellHeight = +props.cellHeight || 32
    this.cellsPerCanvas = +props.cellsPerCanvas || 200
    this.width = +props.width || window.innerWidth
    this.defaultFontSize = props.defaultFontSize || 12
    this.gridColor = props.gridColor || 'gray'
    this.bgColor = props.bgColor || 'white'
    this.color = props.color || 'black'
    
    this.headerText = props.headerText
    this.list = props.list
    
    this.extraData = {
      lostCombos: [5, 15, 2, 8, 1],
      numHeat: [3, 0, 2, 3, 2],
      hitNums: [],
    }
    
    this.defaultCellWidth = this.calcCellWidths()
    this.canvasArray = this.getCanvasArray()
  }
  draw() {
    if (this.list.length === 0) throw 'no list data found'
    const ctxArr = []
    const cellHeight = this.cellHeight + 1
    const canvasHeight = this.cellsPerCanvas * this.cellHeight
    const cellsPerCanvas = this.cellsPerCanvas
    const lowerTitleShouldWrap = false//this.config.lowerTitleShouldWrap
    const width = this.width
    this.canvasArray.forEach((canvas, i) => {
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, width, canvasHeight)
        canvas.width = width + 1

        const isHeader = (i === 0)
        if (isHeader) {
            const modifier = (lowerTitleShouldWrap) ? 1.5 : 1
            canvas.height = (cellHeight + 3) * modifier// - 1
        } else {
            canvas.height = this.getCanvasHeight(i)
            canvas.style.display = ''
        }
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        ctx.font = `${this.defaultFontSize}pt Arial`
        //grid
        ctx.fillStyle = this.gridColor
        ctx.fillRect(0, 0, canvas.width, canvas.height + 1)

        ctxArr.push(ctx)
    })
    this.drawHeader(ctxArr[0], lowerTitleShouldWrap)
    this.drawContent({ctxArr})
    this.drawTrendLine({ctxArr})
    return this.canvasArray
  }
  
  drawHeader(ctx, lowerTitleShouldWrap) {
    const cellHeight = this.cellHeight
    const drawCell = this.drawCell
    const headerText = this.headerText
    const headerDefault = {
        bgColor: '#404251',
        tColor: '#fff',
        ctx
    }
    let offsetX = 1
    const heightModifier = (lowerTitleShouldWrap) ? 1.5 : 1
    headerText.forEach((tier1, i1) => {
        if (typeof tier1 === 'string') { //single layer
            const cellWidth = this.getCellWidth(i1)
            drawCell({
                text: tier1,
                fx: offsetX,
                fy: 1,
                width: cellWidth,
                height: cellHeight + 3,
                offsetX,
                ...headerDefault
            })
            offsetX += cellWidth
        } else { //double layer
            const cellWidth = this.getCellWidth(i1)
            const upperTitle = tier1[0]
            const lowerTitles = tier1[1]
            const upperTitleWidth = lowerTitles.length * cellWidth
            drawCell({
                text: upperTitle,
                fx: offsetX,
                fy: 1,
                width: upperTitleWidth,
                height: cellHeight / 2,
                offsetX,
                ...headerDefault
            })

            lowerTitles.forEach((title, i) => {
                const gridOffset = (i === lowerTitles.length - 1) ? 0 : 1
                const heightModifier = (lowerTitleShouldWrap) ? 1 : 0.5
                drawCell({
                    text: title,
                    fx: offsetX + (cellWidth * i),
                    fy: cellHeight / 2 + 2,
                    width: cellWidth - gridOffset,
                    height: cellHeight * heightModifier + 2,
                    offsetX: offsetX + (cellWidth * i),
                    shouldWrapText: lowerTitleShouldWrap && (title.length > 2),
                    ...headerDefault
                })
            })
            offsetX += upperTitleWidth
        }
        offsetX += 1 //grid
    })
  }
  
  drawContent({
    ctxArr, 
    drawBeforeEachRow = ()=>{}, 
    drawBeforeEachSection = ()=>{}, 
    drawAfterEachSection = ()=>{}
  }) {
    const cellHeight = this.cellHeight
    let offsetX = 1
    let offsetY = 1
    const data = this.list
    let canvasIdx = 1
    const canvasHeight = this.cellsPerCanvas * this.cellHeight
    data.forEach((row, rowIdx) => {
      //reset x to left
      offsetX = 1

      drawBeforeEachRow({ctxArr, row, rowIdx, x: offsetX, y: offsetY})
      
      //draw each section
      row.forEach((section, sectionIdx) => {
          if (section === undefined) return
          drawBeforeEachSection({ctxArr, section, sectionIdx, x: offsetX, y: offsetY})
          const isSectionCls = (section instanceof Section)
          const hasCustomStyle = section.drawFunc
          const isMultiColumn = (isSectionCls && section.length >= 2) || typeof section === 'object'
          // const content = (isSectionCls) ? section.content : section.content
          const content = (typeof section === 'object') ? section.content : section
          let drawFunc
          if (hasCustomStyle) {
              drawFunc = section.drawFunc
          } else {
              drawFunc = (isMultiColumn) ? 'drawMultiSubColumnCell' : 'drawSingleColumnCell'
          }
          try {
              //use next canvas when full
              if (offsetY >= canvasHeight) {
                  canvasIdx++
                  offsetY = 1
              }
              offsetX += this[drawFunc]({ctx: ctxArr[canvasIdx], rowCodes: content, offsetX, offsetY, rowIdx, sectionIdx})
          } catch (e) {
              console.error(`error occured at "${this.headerText[sectionIdx - 1]}",\n draw function: "${drawFunc}"\n`, e)
          }
          drawAfterEachSection({ctxArr, section, sectionIdx, x: offsetX, y: offsetY})
      })
      offsetY += cellHeight + 1
    })
  }
  
  getCanvasArray() {
    const canvasHeight = this.cellHeight * this.cellsPerCanvas
    const listCount = this.list.length
    const totalHeight = listCount * this.cellHeight
    const num = Math.ceil(totalHeight / canvasHeight) + 1
    let arr = [...Array(num).keys()]
    arr = arr.map(e => document.createElement('canvas'))
    return arr
  }
  
  getCanvasHeight(idx) {
    const listCount = this.list.length
    const canvasCount = this.canvasArray.length
    const canvasHeight = this.cellHeight * this.cellsPerCanvas
    const isLast = idx === canvasCount - 1
    if (isLast) {
      const remainCount = listCount - ((canvasCount - 2/*header & last*/) * this.cellsPerCanvas)
      const remainHeight = (this.cellHeight + 1/*grid*/) * remainCount
      return remainHeight + 1
    } else {
      return canvasHeight + 1
    }
  }
  
  calcCellWidths(headerText = this.headerText) {
    let tier2Count = 0
    let totalGridWidth = 0
    let settedCellWidth = 0
    headerText.forEach((tier1, idx) => {
      const settedWidth = this.cellWidth[idx]
      if (typeof tier1 === 'string') {
        if (settedWidth) {
          settedCellWidth += settedWidth
        } else {
          tier2Count++
        }
      } else {
        tier1[1].forEach(() => {
          if (settedWidth) {
            settedCellWidth += settedWidth
          } else {
            tier2Count++
          }
        })
      }
      totalGridWidth++
    })
    // const settedCellWidth = (typeof this.cellWidth === 'object') 
    //                     ? Object.values(this.cellWidth).reduce((prev, num) => prev + num) 
    //                     : 0
    const allColWidth = this.width
    const totalUnsetCellWidth = allColWidth - settedCellWidth// - 18
    let cellWidth = 0
    let missedWidth = 0

    cellWidth = Math.floor(totalUnsetCellWidth / tier2Count)
    // cellWidth = totalUnsetCellWidth / tier2Count
    missedWidth = allColWidth - (cellWidth * tier2Count + settedCellWidth)
    missedWidth -= totalGridWidth
    // this.defaultCellWidth = cellWidth
    // this.width -= missedWidth
    
    if (typeof this.cellWidth === 'object') {
      if (isNaN(this.cellWidth[0])) {
        this.cellWidth[0] = cellWidth + missedWidth
      } else {
        this.cellWidth[0] += missedWidth
      }
    } else {
      this.cellWidth = {}
      this.cellWidth[0] = cellWidth + missedWidth
    }
    
    return cellWidth
  }
  
  getCellWidth(idx) {
    return this.cellWidth[idx] || this.defaultCellWidth
  }
}

Object.assign(CanvasTable.prototype, Drawer)

export default CanvasTable