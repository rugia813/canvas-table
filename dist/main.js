/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/headerText.js":
/*!***************************!*\
  !*** ./src/headerText.js ***!
  \***************************/
/*! exports provided: headerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerData", function() { return headerData; });
const headerData = [
  'Issue',
  [
    "开奖号码",
    [
      "万位",
      "千位",
      "百位",
      "十位",
      "个位"
    ]
  ],
  [
    "总和",
    [
      "和值",
      "大小",
      "单双"
    ]
  ],
  [
    "万位",
    [
      "大小",
      "单双",
      "质合"
    ]
  ],
  [
    "千位",
    [
      "大小",
      "单双",
      "质合"
    ]
  ],
  [
    "百位",
    [
      "大小",
      "单双",
      "质合"
    ]
  ],
  [
    "十位",
    [
      "大小",
      "单双",
      "质合"
    ]
  ],
  [
    "个位",
    [
      "大小",
      "单双",
      "质合"
    ]
  ]
]

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: CanvasTable, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_canvasTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/canvasTable */ "./src/libs/canvasTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasTable", function() { return _libs_canvasTable__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _libs_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/section */ "./src/libs/section.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _libs_section__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _headerText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerText */ "./src/headerText.js");






// mock api
const fillArray = (times, fn) => [...Array(times).keys()].map(() => fn())
const get1to9 = () => fillArray(5, () => Math.floor(Math.random() * 10)) // ['1', '6', '7', '7', '8']
const source = fillArray(90, () => get1to9())

// data calculation
let contentData = source.map((row, idx) => {
  const analyzeSingle = (num) => new _libs_section__WEBPACK_IMPORTED_MODULE_1__["default"]().add('大', 'red').add('單', 'blue').add('質', 'red')
  const sum = row.reduce((sum, num) => sum + num)
  return [
    new _libs_section__WEBPACK_IMPORTED_MODULE_1__["default"]().add(idx, null),
    new _libs_section__WEBPACK_IMPORTED_MODULE_1__["default"]().setDrawFunc('drawLostLineCell').setContent(row),
    analyzeSingle(sum),
    ...row.map(analyzeSingle)
  ]
})

// draw
const dom = document.getElementById('myTable')

const canvasTable = new _libs_canvasTable__WEBPACK_IMPORTED_MODULE_0__["default"]({
  cellWidth: {
    0: 120,
    1: 80
  },
  cellHeight: 32,
  cellsPerCanvas: 200,
  width: window.innerWidth - 18,
  defaultFontSize: 8,
  headerText: _headerText__WEBPACK_IMPORTED_MODULE_2__["headerData"],
  list: [...contentData],
  data: {
    lostCombos: [5, 15, 2, 8, 1],
    numHeat: [2, 0, 1, 0, 1, 0, 2, 0, 2],
    hitNums: [],
  }
  // list: [...Array(50).keys()].reduce((arr, e) => arr.concat(mockContentText), []),
})

canvasTable.drawLostLineCell = ({ ctx, rowData, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight }) => {
  const ct = canvasTable
  const dataLength = ct.list.length
  const trendIsShowLoseNum = true //ct.trendIsShowLoseNum
  const trendIsShowLoseLine = true //ct.trendIsShowLoseLine

  //data
  const lostCombosArr = ct.data.lostCombos
  const numHeatArr = ct.data.numHeat
  const hitNumsArr = ct.data.hitNums
  if (!lostCombosArr || !numHeatArr || !hitNumsArr) {
    throw "can't find lostCombos or numHeat or hitNumsArr in data."
  }

  rowData.forEach((code, cellIdx) => {
    const gridOffset = (cellIdx === rowData.length - 1) ? 0 : 1
    const isSum = false //cellIdx === 0
    const lastLoseCombo = lostCombosArr[cellIdx /*- 1*/ ] //1st cell is sum, so offset 1
    const isLosing = rowIdx >= (dataLength - lastLoseCombo)
    let bgColor = (trendIsShowLoseLine && !isSum && isLosing) ? 'lightgray' : 'white'
    let tColor = 'gray'
    if (!trendIsShowLoseNum && typeof code === 'number' && !isSum) {
      tColor = bgColor
    }
    let hitBallParams = []

    // if (code === 0) { //hit
    if (cellIdx == rowIdx % 5) {
      const num = cellIdx + 2
      const numHeat = numHeatArr[num]
      const colors = ['DeepSkyBlue', 'orange', 'red']
      const ballColor = colors[numHeat]
      const x = offsetX + ((cellWidth - 1 /*gridOffset*/ ) / 2)
      const y = cellHeight / 2 + offsetY
      hitNumsArr[rowIdx] = {
        ballColor,
        x,
        y,
        num,
        ctx
      }
    }

    ct.drawCell({
      ctx: ctx,
      bgColor,
      tColor,
      text: code,
      fx: offsetX,
      fy: offsetY,
      width: cellWidth - gridOffset,
      height: cellHeight,
      ...hitBallParams
    })
    offsetX += cellWidth
  })
  return cellWidth * rowData.length + 1
}

const canvases = canvasTable.draw(dom)

/***/ }),

/***/ "./src/libs/canvasTable.js":
/*!*********************************!*\
  !*** ./src/libs/canvasTable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer */ "./src/libs/drawer.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section */ "./src/libs/section.ts");


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
    this.data = props.data
    
    this.defaultCellWidth = this.calcCellWidths()
    this.canvasArray = this.getCanvasArray()
  }
  draw(dom) {
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

    if (dom) {
      this.canvasArray.forEach((e) => {
        dom.appendChild(e)
      })
    }
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
          const isSectionCls = (section instanceof _section__WEBPACK_IMPORTED_MODULE_1__["default"])
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
              const cellWidth = this.getCellWidth(sectionIdx)
              const cellHeight = this.cellHeight
              offsetX += this[drawFunc]({ctx: ctxArr[canvasIdx], rowData: content, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight})
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

Object.assign(CanvasTable.prototype, _drawer__WEBPACK_IMPORTED_MODULE_0__["Drawer"])

/* harmony default export */ __webpack_exports__["default"] = (CanvasTable);

/***/ }),

/***/ "./src/libs/drawer.js":
/*!****************************!*\
  !*** ./src/libs/drawer.js ***!
  \****************************/
/*! exports provided: Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
const Drawer = {
  drawCell(input) {
      const noop = () => {}
      const { ctx, bgColor, tColor, text, fx, fy, width, height, offsetX = 0, drawBeforeText = noop, drawAfterText = noop, shouldWrapText = false } = input
      //bg
      ctx.fillStyle = bgColor
      ctx.fillRect(fx, fy, width, height)

      drawBeforeText(text)

      //text
      ctx.fillStyle = tColor
      if (shouldWrapText) {
          const length = Math.floor(text.length)
          const upper = text.substr(0, length / 2)
          const lower = text.substr(length / 2, length)
          ctx.fillText(upper, fx + (width / 2), height * 0.25 + fy)
          ctx.fillText(lower, fx + (width / 2), height * 0.75 + fy)
      } else {
          ctx.fillText(text, fx + (width / 2), height / 2 + fy, width - 2)
      }

      drawAfterText(text)
  },
  
  /** 繪製有子層的區塊的格子 */
  drawMultiSubColumnCell({ctx, rowData, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight}, drawCellParams) {
      if (typeof rowData !== 'object') throw `error at 'drawMultiSubColumnCell'. Expecting an array or Section object, found: rowData: ${rowData}`
      let totalWidth = 0
      rowData.forEach((code, cellIdx) => {
        // code could be 'text' or ['text', 'color']
        const gridOffset = (cellIdx === rowData.length - 1) ? 0 : 1
        const text = (typeof code === 'object' && code[0]) || code
        const tColor = (typeof code === 'object' && code[1]) || 'black'
        this.drawCell({
            ctx: ctx,
            bgColor: '#fff',
            tColor,
            text,
            fx: offsetX,
            fy: offsetY,
            width: cellWidth - gridOffset,
            height: cellHeight,
            ...drawCellParams
        })
        offsetX += cellWidth
        totalWidth += cellWidth
      })
      return totalWidth + 1
  },
  
  /** 繪製單一層的格子 */
  drawSingleColumnCell({ctx, rowData, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight}) {
      let cell, tColor, text
      if (typeof rowData !== 'object') {
          text = rowData
          tColor = 'black'
      } else {
          cell = (typeof rowData[0] === 'object') ? rowData[0] : rowData
          tColor = cell[1] || 'black'
          text = cell[0]
      }
      this.drawCell({
          ctx: ctx,
          bgColor: '#fff',
          tColor,
          text,
          fx: offsetX,
          fy: offsetY,
          width: cellWidth,
          height: cellHeight
      })
      return cellWidth + 1
  },
  /** 繪製球號格 */
  drawBallCell({ctx, rowData, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight}) {

    const drawCircle = () => {
        const x = offsetX + ((cellWidth - 1/*gridOffset*/) / 2)
        const y = cellHeight / 2 + offsetY
        const radius = 10
        ctx.fillStyle = 'green'
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI)
        ctx.fill()
        offsetX += cellWidth
    }
    const drawCellParams = {
        drawBeforeText: drawCircle,
        tColor: 'white'
    }
    return this.drawMultiSubColumnCell(...arguments, drawCellParams)
  },
  /** 繪製帶遺漏條及走勢線的格子 */
  drawLostLineCell({ctx, rowData, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight}) {
      const dataLength = this.list.length
      const trendIsShowLoseNum = true //this.trendIsShowLoseNum
      const trendIsShowLoseLine = true //this.trendIsShowLoseLine

      //data
      const lostCombosArr = this.data.lostCombos
      const numHeatArr = this.data.numHeat
      const hitNumsArr = this.data.hitNums
      if (!lostCombosArr || !numHeatArr || !hitNumsArr) {
          throw "can't find lostCombos or numHeat or hitNumsArr in data."
      }

      rowData.forEach((code, cellIdx) => {
          const gridOffset = (cellIdx === rowData.length - 1) ? 0 : 1
          const isSum = false //cellIdx === 0
          const lastLoseCombo = lostCombosArr[cellIdx /*- 1*/] //1st cell is sum, so offset 1
          const isLosing = rowIdx >= (dataLength - lastLoseCombo)
          let bgColor = (trendIsShowLoseLine && !isSum && isLosing) ? 'lightgray' : 'white'
          let tColor = 'gray'
          if (!trendIsShowLoseNum && typeof code === 'number' && !isSum) {
              tColor = bgColor
          }
          let hitBallParams = []

          // if (code === 0) { //hit
          if (cellIdx == rowIdx % 5) {
              const num = cellIdx + 2
              const numHeat = numHeatArr[num]
              const colors = ['DeepSkyBlue', 'orange', 'red']
              const ballColor = colors[numHeat]
              const x = offsetX + ((cellWidth - 1/*gridOffset*/) / 2)
              const y = cellHeight / 2 + offsetY
              hitNumsArr[rowIdx] = { ballColor, x, y, num, ctx }
          }

          this.drawCell({
              ctx: ctx,
              bgColor,
              tColor,
              text: code,
              fx: offsetX,
              fy: offsetY,
              width: cellWidth - gridOffset,
              height: cellHeight,
              ...hitBallParams
          })
          offsetX += cellWidth
      })
      return cellWidth * rowData.length + 1
  },
  /** 繪製走勢線 */
  drawTrendLine() {
      const cellHeight = this.cellHeight
      const hitNums = this.data.hitNums
      const trendIsShowLine = true //this.trendIsShowLine
      const trendIsShowBallsWarn = true //this.trendIsShowBallsWarn
      if (!hitNums) {
          throw 'can\'t find hitNums in data.'
      }
      const drawLine = (from, to) => {
          if (!from || !to) return
          //draw lines
          const ctx = from.ctx
          ctx.beginPath()
          ctx.strokeStyle = 'red'
          ctx.lineWidth = 2
          ctx.moveTo(from.x, from.y)
          if (to.y < from.y) {
              ctx.lineTo(to.x, to.y + this.canvasHeight)

              to.ctx.beginPath()
              to.ctx.strokeStyle = 'red'
              to.ctx.lineWidth = 2
              to.ctx.moveTo(from.x, from.y - this.canvasHeight)
              to.ctx.lineTo(to.x, to.y)
              to.ctx.stroke()
          } else {
              ctx.lineTo(to.x, to.y)
          }
          ctx.stroke()
      }
      const drawBall = (hit) => {
        if (typeof hit !== 'object') return
          //draw ball
          const ctx = hit.ctx
          const radius = 10
          ctx.fillStyle = (trendIsShowBallsWarn) ? hit.ballColor : 'green'
          ctx.beginPath()
          ctx.arc(hit.x, hit.y, radius, 0, 2 * Math.PI)
          ctx.fill()
          //draw text
          ctx.fillStyle = 'white'
          ctx.fillText(hit.num, hit.x, hit.y)
      }

      if (trendIsShowLine) {
          for (const i in hitNums) {
              if (!hitNums.hasOwnProperty(i)) continue
              if (i > 0) {
                  const prev = hitNums[i - 1]
                  const current = hitNums[i]
                  drawLine(prev, current)
              }
          }
      }
      for (const current of hitNums) {
          drawBall(current)
      }
  },
}

/***/ }),

/***/ "./src/libs/section.ts":
/*!*****************************!*\
  !*** ./src/libs/section.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/** 一區塊的一行資料 */
class Section {
    /** 一區塊的一行資料 */
    constructor(arr) {
        /** (string) 調用特殊繪製function */
        this.drawFunc = null;
        /** (array) 資料內容 */
        this.content = arr || [];
    }
    get length() {
        return this.content.length;
    }
    /**
     * 加入資料
     * @param  {string} text
     * @param  {string} color
     * @return this
     */
    add(text, color) {
        const res = (color) ? [text, color] : text;
        this.content.push(res);
        return this;
    }
    setDrawFunc(func) {
        this.drawFunc = func;
        return this;
    }
    /**
     * 設定資料
     * @param  {array} array - array of 'text' or ['text', 'color']
     * @return this
     */
    setContent(array) {
        this.content = array;
        return this;
    }
    concat(array) {
        this.content = this.content.concat(array);
    }
    forEach(fn) {
        this.content.forEach(fn);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlclRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NhbnZhc1RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9zZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBR0M7O0FBS0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpQ0FBaUMsNEVBQTRFO0FBQzdHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7Ozs7QUM3R2lCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7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SUFDRDs7Ozs7T0FLRztJQUNILEdBQUcsQ0FBQyxJQUFZLEVBQUUsS0FBYztRQUM1QixNQUFNLEdBQUcsR0FBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3RCLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFDRCxXQUFXLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7UUFDcEIsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsS0FBNkI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO1FBQ3BCLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBNkI7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDN0MsQ0FBQztJQUNELE9BQU8sQ0FBQyxFQUErRTtRQUNyRixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBoZWFkZXJEYXRhID0gW1xyXG4gICdJc3N1ZScsXHJcbiAgW1xyXG4gICAgXCLlvIDlpZblj7fnoIFcIixcclxuICAgIFtcclxuICAgICAgXCLkuIfkvY1cIixcclxuICAgICAgXCLljYPkvY1cIixcclxuICAgICAgXCLnmb7kvY1cIixcclxuICAgICAgXCLljYHkvY1cIixcclxuICAgICAgXCLkuKrkvY1cIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLmgLvlkoxcIixcclxuICAgIFtcclxuICAgICAgXCLlkozlgLxcIixcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLkuIfkvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLljYPkvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLnmb7kvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLljYHkvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLkuKrkvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF1cclxuXSIsImltcG9ydCBDYW52YXNUYWJsZSBmcm9tIFwiLi9saWJzL2NhbnZhc1RhYmxlXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL2xpYnMvc2VjdGlvblwiO1xyXG5pbXBvcnQge1xyXG4gIGhlYWRlckRhdGFcclxufSBmcm9tIFwiLi9oZWFkZXJUZXh0XCI7XHJcblxyXG5leHBvcnQge1xyXG4gIENhbnZhc1RhYmxlLFxyXG4gIFNlY3Rpb25cclxufVxyXG5cclxuLy8gbW9jayBhcGlcclxuY29uc3QgZmlsbEFycmF5ID0gKHRpbWVzLCBmbikgPT4gWy4uLkFycmF5KHRpbWVzKS5rZXlzKCldLm1hcCgoKSA9PiBmbigpKVxyXG5jb25zdCBnZXQxdG85ID0gKCkgPT4gZmlsbEFycmF5KDUsICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkgLy8gWycxJywgJzYnLCAnNycsICc3JywgJzgnXVxyXG5jb25zdCBzb3VyY2UgPSBmaWxsQXJyYXkoOTAsICgpID0+IGdldDF0bzkoKSlcclxuXHJcbi8vIGRhdGEgY2FsY3VsYXRpb25cclxubGV0IGNvbnRlbnREYXRhID0gc291cmNlLm1hcCgocm93LCBpZHgpID0+IHtcclxuICBjb25zdCBhbmFseXplU2luZ2xlID0gKG51bSkgPT4gbmV3IFNlY3Rpb24oKS5hZGQoJ+WkpycsICdyZWQnKS5hZGQoJ+WWricsICdibHVlJykuYWRkKCfos6onLCAncmVkJylcclxuICBjb25zdCBzdW0gPSByb3cucmVkdWNlKChzdW0sIG51bSkgPT4gc3VtICsgbnVtKVxyXG4gIHJldHVybiBbXHJcbiAgICBuZXcgU2VjdGlvbigpLmFkZChpZHgsIG51bGwpLFxyXG4gICAgbmV3IFNlY3Rpb24oKS5zZXREcmF3RnVuYygnZHJhd0xvc3RMaW5lQ2VsbCcpLnNldENvbnRlbnQocm93KSxcclxuICAgIGFuYWx5emVTaW5nbGUoc3VtKSxcclxuICAgIC4uLnJvdy5tYXAoYW5hbHl6ZVNpbmdsZSlcclxuICBdXHJcbn0pXHJcblxyXG4vLyBkcmF3XHJcbmNvbnN0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVRhYmxlJylcclxuXHJcbmNvbnN0IGNhbnZhc1RhYmxlID0gbmV3IENhbnZhc1RhYmxlKHtcclxuICBjZWxsV2lkdGg6IHtcclxuICAgIDA6IDEyMCxcclxuICAgIDE6IDgwXHJcbiAgfSxcclxuICBjZWxsSGVpZ2h0OiAzMixcclxuICBjZWxsc1BlckNhbnZhczogMjAwLFxyXG4gIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDE4LFxyXG4gIGRlZmF1bHRGb250U2l6ZTogOCxcclxuICBoZWFkZXJUZXh0OiBoZWFkZXJEYXRhLFxyXG4gIGxpc3Q6IFsuLi5jb250ZW50RGF0YV0sXHJcbiAgZGF0YToge1xyXG4gICAgbG9zdENvbWJvczogWzUsIDE1LCAyLCA4LCAxXSxcclxuICAgIG51bUhlYXQ6IFsyLCAwLCAxLCAwLCAxLCAwLCAyLCAwLCAyXSxcclxuICAgIGhpdE51bXM6IFtdLFxyXG4gIH1cclxuICAvLyBsaXN0OiBbLi4uQXJyYXkoNTApLmtleXMoKV0ucmVkdWNlKChhcnIsIGUpID0+IGFyci5jb25jYXQobW9ja0NvbnRlbnRUZXh0KSwgW10pLFxyXG59KVxyXG5cclxuY2FudmFzVGFibGUuZHJhd0xvc3RMaW5lQ2VsbCA9ICh7IGN0eCwgcm93RGF0YSwgb2Zmc2V0WCwgb2Zmc2V0WSwgcm93SWR4LCBzZWN0aW9uSWR4LCBjZWxsV2lkdGgsIGNlbGxIZWlnaHQgfSkgPT4ge1xyXG4gIGNvbnN0IGN0ID0gY2FudmFzVGFibGVcclxuICBjb25zdCBkYXRhTGVuZ3RoID0gY3QubGlzdC5sZW5ndGhcclxuICBjb25zdCB0cmVuZElzU2hvd0xvc2VOdW0gPSB0cnVlIC8vY3QudHJlbmRJc1Nob3dMb3NlTnVtXHJcbiAgY29uc3QgdHJlbmRJc1Nob3dMb3NlTGluZSA9IHRydWUgLy9jdC50cmVuZElzU2hvd0xvc2VMaW5lXHJcblxyXG4gIC8vZGF0YVxyXG4gIGNvbnN0IGxvc3RDb21ib3NBcnIgPSBjdC5kYXRhLmxvc3RDb21ib3NcclxuICBjb25zdCBudW1IZWF0QXJyID0gY3QuZGF0YS5udW1IZWF0XHJcbiAgY29uc3QgaGl0TnVtc0FyciA9IGN0LmRhdGEuaGl0TnVtc1xyXG4gIGlmICghbG9zdENvbWJvc0FyciB8fCAhbnVtSGVhdEFyciB8fCAhaGl0TnVtc0Fycikge1xyXG4gICAgdGhyb3cgXCJjYW4ndCBmaW5kIGxvc3RDb21ib3Mgb3IgbnVtSGVhdCBvciBoaXROdW1zQXJyIGluIGRhdGEuXCJcclxuICB9XHJcblxyXG4gIHJvd0RhdGEuZm9yRWFjaCgoY29kZSwgY2VsbElkeCkgPT4ge1xyXG4gICAgY29uc3QgZ3JpZE9mZnNldCA9IChjZWxsSWR4ID09PSByb3dEYXRhLmxlbmd0aCAtIDEpID8gMCA6IDFcclxuICAgIGNvbnN0IGlzU3VtID0gZmFsc2UgLy9jZWxsSWR4ID09PSAwXHJcbiAgICBjb25zdCBsYXN0TG9zZUNvbWJvID0gbG9zdENvbWJvc0FycltjZWxsSWR4IC8qLSAxKi8gXSAvLzFzdCBjZWxsIGlzIHN1bSwgc28gb2Zmc2V0IDFcclxuICAgIGNvbnN0IGlzTG9zaW5nID0gcm93SWR4ID49IChkYXRhTGVuZ3RoIC0gbGFzdExvc2VDb21ibylcclxuICAgIGxldCBiZ0NvbG9yID0gKHRyZW5kSXNTaG93TG9zZUxpbmUgJiYgIWlzU3VtICYmIGlzTG9zaW5nKSA/ICdsaWdodGdyYXknIDogJ3doaXRlJ1xyXG4gICAgbGV0IHRDb2xvciA9ICdncmF5J1xyXG4gICAgaWYgKCF0cmVuZElzU2hvd0xvc2VOdW0gJiYgdHlwZW9mIGNvZGUgPT09ICdudW1iZXInICYmICFpc1N1bSkge1xyXG4gICAgICB0Q29sb3IgPSBiZ0NvbG9yXHJcbiAgICB9XHJcbiAgICBsZXQgaGl0QmFsbFBhcmFtcyA9IFtdXHJcblxyXG4gICAgLy8gaWYgKGNvZGUgPT09IDApIHsgLy9oaXRcclxuICAgIGlmIChjZWxsSWR4ID09IHJvd0lkeCAlIDUpIHtcclxuICAgICAgY29uc3QgbnVtID0gY2VsbElkeCArIDJcclxuICAgICAgY29uc3QgbnVtSGVhdCA9IG51bUhlYXRBcnJbbnVtXVxyXG4gICAgICBjb25zdCBjb2xvcnMgPSBbJ0RlZXBTa3lCbHVlJywgJ29yYW5nZScsICdyZWQnXVxyXG4gICAgICBjb25zdCBiYWxsQ29sb3IgPSBjb2xvcnNbbnVtSGVhdF1cclxuICAgICAgY29uc3QgeCA9IG9mZnNldFggKyAoKGNlbGxXaWR0aCAtIDEgLypncmlkT2Zmc2V0Ki8gKSAvIDIpXHJcbiAgICAgIGNvbnN0IHkgPSBjZWxsSGVpZ2h0IC8gMiArIG9mZnNldFlcclxuICAgICAgaGl0TnVtc0Fycltyb3dJZHhdID0ge1xyXG4gICAgICAgIGJhbGxDb2xvcixcclxuICAgICAgICB4LFxyXG4gICAgICAgIHksXHJcbiAgICAgICAgbnVtLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3QuZHJhd0NlbGwoe1xyXG4gICAgICBjdHg6IGN0eCxcclxuICAgICAgYmdDb2xvcixcclxuICAgICAgdENvbG9yLFxyXG4gICAgICB0ZXh0OiBjb2RlLFxyXG4gICAgICBmeDogb2Zmc2V0WCxcclxuICAgICAgZnk6IG9mZnNldFksXHJcbiAgICAgIHdpZHRoOiBjZWxsV2lkdGggLSBncmlkT2Zmc2V0LFxyXG4gICAgICBoZWlnaHQ6IGNlbGxIZWlnaHQsXHJcbiAgICAgIC4uLmhpdEJhbGxQYXJhbXNcclxuICAgIH0pXHJcbiAgICBvZmZzZXRYICs9IGNlbGxXaWR0aFxyXG4gIH0pXHJcbiAgcmV0dXJuIGNlbGxXaWR0aCAqIHJvd0RhdGEubGVuZ3RoICsgMVxyXG59XHJcblxyXG5jb25zdCBjYW52YXNlcyA9IGNhbnZhc1RhYmxlLmRyYXcoZG9tKSIsImltcG9ydCB7IERyYXdlciB9IGZyb20gJy4vZHJhd2VyJ1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nXHJcbmNsYXNzIENhbnZhc1RhYmxlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgdGhpcy5jZWxsV2lkdGggPSBwcm9wcy5jZWxsV2lkdGggfHwgNjRcclxuICAgIHRoaXMuY2VsbEhlaWdodCA9ICtwcm9wcy5jZWxsSGVpZ2h0IHx8IDMyXHJcbiAgICB0aGlzLmNlbGxzUGVyQ2FudmFzID0gK3Byb3BzLmNlbGxzUGVyQ2FudmFzIHx8IDIwMFxyXG4gICAgdGhpcy53aWR0aCA9ICtwcm9wcy53aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgdGhpcy5kZWZhdWx0Rm9udFNpemUgPSBwcm9wcy5kZWZhdWx0Rm9udFNpemUgfHwgMTJcclxuICAgIHRoaXMuZ3JpZENvbG9yID0gcHJvcHMuZ3JpZENvbG9yIHx8ICdncmF5J1xyXG4gICAgdGhpcy5iZ0NvbG9yID0gcHJvcHMuYmdDb2xvciB8fCAnd2hpdGUnXHJcbiAgICB0aGlzLmNvbG9yID0gcHJvcHMuY29sb3IgfHwgJ2JsYWNrJ1xyXG4gICAgXHJcbiAgICB0aGlzLmhlYWRlclRleHQgPSBwcm9wcy5oZWFkZXJUZXh0XHJcbiAgICB0aGlzLmxpc3QgPSBwcm9wcy5saXN0XHJcbiAgICB0aGlzLmRhdGEgPSBwcm9wcy5kYXRhXHJcbiAgICBcclxuICAgIHRoaXMuZGVmYXVsdENlbGxXaWR0aCA9IHRoaXMuY2FsY0NlbGxXaWR0aHMoKVxyXG4gICAgdGhpcy5jYW52YXNBcnJheSA9IHRoaXMuZ2V0Q2FudmFzQXJyYXkoKVxyXG4gIH1cclxuICBkcmF3KGRvbSkge1xyXG4gICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPT09IDApIHRocm93ICdubyBsaXN0IGRhdGEgZm91bmQnXHJcbiAgICBjb25zdCBjdHhBcnIgPSBbXVxyXG4gICAgY29uc3QgY2VsbEhlaWdodCA9IHRoaXMuY2VsbEhlaWdodCArIDFcclxuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuY2VsbHNQZXJDYW52YXMgKiB0aGlzLmNlbGxIZWlnaHRcclxuICAgIGNvbnN0IGNlbGxzUGVyQ2FudmFzID0gdGhpcy5jZWxsc1BlckNhbnZhc1xyXG4gICAgY29uc3QgbG93ZXJUaXRsZVNob3VsZFdyYXAgPSBmYWxzZS8vdGhpcy5jb25maWcubG93ZXJUaXRsZVNob3VsZFdyYXBcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aFxyXG4gICAgdGhpcy5jYW52YXNBcnJheS5mb3JFYWNoKChjYW52YXMsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGNhbnZhc0hlaWdodClcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aCArIDFcclxuXHJcbiAgICAgICAgY29uc3QgaXNIZWFkZXIgPSAoaSA9PT0gMClcclxuICAgICAgICBpZiAoaXNIZWFkZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kaWZpZXIgPSAobG93ZXJUaXRsZVNob3VsZFdyYXApID8gMS41IDogMVxyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gKGNlbGxIZWlnaHQgKyAzKSAqIG1vZGlmaWVyLy8gLSAxXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KGkpXHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJydcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnXHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInXHJcbiAgICAgICAgY3R4LmZvbnQgPSBgJHt0aGlzLmRlZmF1bHRGb250U2l6ZX1wdCBBcmlhbGBcclxuICAgICAgICAvL2dyaWRcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5ncmlkQ29sb3JcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0ICsgMSlcclxuXHJcbiAgICAgICAgY3R4QXJyLnB1c2goY3R4KVxyXG4gICAgfSlcclxuICAgIHRoaXMuZHJhd0hlYWRlcihjdHhBcnJbMF0sIGxvd2VyVGl0bGVTaG91bGRXcmFwKVxyXG4gICAgdGhpcy5kcmF3Q29udGVudCh7Y3R4QXJyfSlcclxuICAgIHRoaXMuZHJhd1RyZW5kTGluZSh7Y3R4QXJyfSlcclxuXHJcbiAgICBpZiAoZG9tKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzQXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGRvbS5hcHBlbmRDaGlsZChlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzQXJyYXlcclxuICB9XHJcbiAgXHJcbiAgZHJhd0hlYWRlcihjdHgsIGxvd2VyVGl0bGVTaG91bGRXcmFwKSB7XHJcbiAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICBjb25zdCBkcmF3Q2VsbCA9IHRoaXMuZHJhd0NlbGxcclxuICAgIGNvbnN0IGhlYWRlclRleHQgPSB0aGlzLmhlYWRlclRleHRcclxuICAgIGNvbnN0IGhlYWRlckRlZmF1bHQgPSB7XHJcbiAgICAgICAgYmdDb2xvcjogJyM0MDQyNTEnLFxyXG4gICAgICAgIHRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgfVxyXG4gICAgbGV0IG9mZnNldFggPSAxXHJcbiAgICBjb25zdCBoZWlnaHRNb2RpZmllciA9IChsb3dlclRpdGxlU2hvdWxkV3JhcCkgPyAxLjUgOiAxXHJcbiAgICBoZWFkZXJUZXh0LmZvckVhY2goKHRpZXIxLCBpMSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGllcjEgPT09ICdzdHJpbmcnKSB7IC8vc2luZ2xlIGxheWVyXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxXaWR0aCA9IHRoaXMuZ2V0Q2VsbFdpZHRoKGkxKVxyXG4gICAgICAgICAgICBkcmF3Q2VsbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aWVyMSxcclxuICAgICAgICAgICAgICAgIGZ4OiBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgZnk6IDEsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2VsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0ICsgMyxcclxuICAgICAgICAgICAgICAgIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAuLi5oZWFkZXJEZWZhdWx0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG9mZnNldFggKz0gY2VsbFdpZHRoXHJcbiAgICAgICAgfSBlbHNlIHsgLy9kb3VibGUgbGF5ZXJcclxuICAgICAgICAgICAgY29uc3QgY2VsbFdpZHRoID0gdGhpcy5nZXRDZWxsV2lkdGgoaTEpXHJcbiAgICAgICAgICAgIGNvbnN0IHVwcGVyVGl0bGUgPSB0aWVyMVswXVxyXG4gICAgICAgICAgICBjb25zdCBsb3dlclRpdGxlcyA9IHRpZXIxWzFdXHJcbiAgICAgICAgICAgIGNvbnN0IHVwcGVyVGl0bGVXaWR0aCA9IGxvd2VyVGl0bGVzLmxlbmd0aCAqIGNlbGxXaWR0aFxyXG4gICAgICAgICAgICBkcmF3Q2VsbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB1cHBlclRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZng6IG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICBmeTogMSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB1cHBlclRpdGxlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgIC4uLmhlYWRlckRlZmF1bHRcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxvd2VyVGl0bGVzLmZvckVhY2goKHRpdGxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkT2Zmc2V0ID0gKGkgPT09IGxvd2VyVGl0bGVzLmxlbmd0aCAtIDEpID8gMCA6IDFcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodE1vZGlmaWVyID0gKGxvd2VyVGl0bGVTaG91bGRXcmFwKSA/IDEgOiAwLjVcclxuICAgICAgICAgICAgICAgIGRyYXdDZWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBmeDogb2Zmc2V0WCArIChjZWxsV2lkdGggKiBpKSxcclxuICAgICAgICAgICAgICAgICAgICBmeTogY2VsbEhlaWdodCAvIDIgKyAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGggLSBncmlkT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2VsbEhlaWdodCAqIGhlaWdodE1vZGlmaWVyICsgMixcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYICsgKGNlbGxXaWR0aCAqIGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFdyYXBUZXh0OiBsb3dlclRpdGxlU2hvdWxkV3JhcCAmJiAodGl0bGUubGVuZ3RoID4gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uaGVhZGVyRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgb2Zmc2V0WCArPSB1cHBlclRpdGxlV2lkdGhcclxuICAgICAgICB9XHJcbiAgICAgICAgb2Zmc2V0WCArPSAxIC8vZ3JpZFxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgZHJhd0NvbnRlbnQoe1xyXG4gICAgY3R4QXJyLCBcclxuICAgIGRyYXdCZWZvcmVFYWNoUm93ID0gKCk9Pnt9LCBcclxuICAgIGRyYXdCZWZvcmVFYWNoU2VjdGlvbiA9ICgpPT57fSwgXHJcbiAgICBkcmF3QWZ0ZXJFYWNoU2VjdGlvbiA9ICgpPT57fVxyXG4gIH0pIHtcclxuICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxIZWlnaHRcclxuICAgIGxldCBvZmZzZXRYID0gMVxyXG4gICAgbGV0IG9mZnNldFkgPSAxXHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5saXN0XHJcbiAgICBsZXQgY2FudmFzSWR4ID0gMVxyXG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5jZWxsc1BlckNhbnZhcyAqIHRoaXMuY2VsbEhlaWdodFxyXG4gICAgZGF0YS5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xyXG4gICAgICAvL3Jlc2V0IHggdG8gbGVmdFxyXG4gICAgICBvZmZzZXRYID0gMVxyXG5cclxuICAgICAgZHJhd0JlZm9yZUVhY2hSb3coe2N0eEFyciwgcm93LCByb3dJZHgsIHg6IG9mZnNldFgsIHk6IG9mZnNldFl9KVxyXG4gICAgICBcclxuICAgICAgLy9kcmF3IGVhY2ggc2VjdGlvblxyXG4gICAgICByb3cuZm9yRWFjaCgoc2VjdGlvbiwgc2VjdGlvbklkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNlY3Rpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICAgICAgICBkcmF3QmVmb3JlRWFjaFNlY3Rpb24oe2N0eEFyciwgc2VjdGlvbiwgc2VjdGlvbklkeCwgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WX0pXHJcbiAgICAgICAgICBjb25zdCBpc1NlY3Rpb25DbHMgPSAoc2VjdGlvbiBpbnN0YW5jZW9mIFNlY3Rpb24pXHJcbiAgICAgICAgICBjb25zdCBoYXNDdXN0b21TdHlsZSA9IHNlY3Rpb24uZHJhd0Z1bmNcclxuICAgICAgICAgIGNvbnN0IGlzTXVsdGlDb2x1bW4gPSAoaXNTZWN0aW9uQ2xzICYmIHNlY3Rpb24ubGVuZ3RoID49IDIpIHx8IHR5cGVvZiBzZWN0aW9uID09PSAnb2JqZWN0J1xyXG4gICAgICAgICAgLy8gY29uc3QgY29udGVudCA9IChpc1NlY3Rpb25DbHMpID8gc2VjdGlvbi5jb250ZW50IDogc2VjdGlvbi5jb250ZW50XHJcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gKHR5cGVvZiBzZWN0aW9uID09PSAnb2JqZWN0JykgPyBzZWN0aW9uLmNvbnRlbnQgOiBzZWN0aW9uXHJcbiAgICAgICAgICBsZXQgZHJhd0Z1bmNcclxuICAgICAgICAgIGlmIChoYXNDdXN0b21TdHlsZSkge1xyXG4gICAgICAgICAgICAgIGRyYXdGdW5jID0gc2VjdGlvbi5kcmF3RnVuY1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkcmF3RnVuYyA9IChpc011bHRpQ29sdW1uKSA/ICdkcmF3TXVsdGlTdWJDb2x1bW5DZWxsJyA6ICdkcmF3U2luZ2xlQ29sdW1uQ2VsbCdcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgLy91c2UgbmV4dCBjYW52YXMgd2hlbiBmdWxsXHJcbiAgICAgICAgICAgICAgaWYgKG9mZnNldFkgPj0gY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgIGNhbnZhc0lkeCsrXHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldFkgPSAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxXaWR0aCA9IHRoaXMuZ2V0Q2VsbFdpZHRoKHNlY3Rpb25JZHgpXHJcbiAgICAgICAgICAgICAgY29uc3QgY2VsbEhlaWdodCA9IHRoaXMuY2VsbEhlaWdodFxyXG4gICAgICAgICAgICAgIG9mZnNldFggKz0gdGhpc1tkcmF3RnVuY10oe2N0eDogY3R4QXJyW2NhbnZhc0lkeF0sIHJvd0RhdGE6IGNvbnRlbnQsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeCwgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0fSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBlcnJvciBvY2N1cmVkIGF0IFwiJHt0aGlzLmhlYWRlclRleHRbc2VjdGlvbklkeCAtIDFdfVwiLFxcbiBkcmF3IGZ1bmN0aW9uOiBcIiR7ZHJhd0Z1bmN9XCJcXG5gLCBlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZHJhd0FmdGVyRWFjaFNlY3Rpb24oe2N0eEFyciwgc2VjdGlvbiwgc2VjdGlvbklkeCwgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WX0pXHJcbiAgICAgIH0pXHJcbiAgICAgIG9mZnNldFkgKz0gY2VsbEhlaWdodCArIDFcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGdldENhbnZhc0FycmF5KCkge1xyXG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0ICogdGhpcy5jZWxsc1BlckNhbnZhc1xyXG4gICAgY29uc3QgbGlzdENvdW50ID0gdGhpcy5saXN0Lmxlbmd0aFxyXG4gICAgY29uc3QgdG90YWxIZWlnaHQgPSBsaXN0Q291bnQgKiB0aGlzLmNlbGxIZWlnaHRcclxuICAgIGNvbnN0IG51bSA9IE1hdGguY2VpbCh0b3RhbEhlaWdodCAvIGNhbnZhc0hlaWdodCkgKyAxXHJcbiAgICBsZXQgYXJyID0gWy4uLkFycmF5KG51bSkua2V5cygpXVxyXG4gICAgYXJyID0gYXJyLm1hcChlID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKVxyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxuICBcclxuICBnZXRDYW52YXNIZWlnaHQoaWR4KSB7XHJcbiAgICBjb25zdCBsaXN0Q291bnQgPSB0aGlzLmxpc3QubGVuZ3RoXHJcbiAgICBjb25zdCBjYW52YXNDb3VudCA9IHRoaXMuY2FudmFzQXJyYXkubGVuZ3RoXHJcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLmNlbGxIZWlnaHQgKiB0aGlzLmNlbGxzUGVyQ2FudmFzXHJcbiAgICBjb25zdCBpc0xhc3QgPSBpZHggPT09IGNhbnZhc0NvdW50IC0gMVxyXG4gICAgaWYgKGlzTGFzdCkge1xyXG4gICAgICBjb25zdCByZW1haW5Db3VudCA9IGxpc3RDb3VudCAtICgoY2FudmFzQ291bnQgLSAyLypoZWFkZXIgJiBsYXN0Ki8pICogdGhpcy5jZWxsc1BlckNhbnZhcylcclxuICAgICAgY29uc3QgcmVtYWluSGVpZ2h0ID0gKHRoaXMuY2VsbEhlaWdodCArIDEvKmdyaWQqLykgKiByZW1haW5Db3VudFxyXG4gICAgICByZXR1cm4gcmVtYWluSGVpZ2h0ICsgMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNhbnZhc0hlaWdodCArIDFcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY2FsY0NlbGxXaWR0aHMoaGVhZGVyVGV4dCA9IHRoaXMuaGVhZGVyVGV4dCkge1xyXG4gICAgbGV0IHRpZXIyQ291bnQgPSAwXHJcbiAgICBsZXQgdG90YWxHcmlkV2lkdGggPSAwXHJcbiAgICBsZXQgc2V0dGVkQ2VsbFdpZHRoID0gMFxyXG4gICAgaGVhZGVyVGV4dC5mb3JFYWNoKCh0aWVyMSwgaWR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNldHRlZFdpZHRoID0gdGhpcy5jZWxsV2lkdGhbaWR4XVxyXG4gICAgICBpZiAodHlwZW9mIHRpZXIxID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmIChzZXR0ZWRXaWR0aCkge1xyXG4gICAgICAgICAgc2V0dGVkQ2VsbFdpZHRoICs9IHNldHRlZFdpZHRoXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRpZXIyQ291bnQrK1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aWVyMVsxXS5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgICAgIGlmIChzZXR0ZWRXaWR0aCkge1xyXG4gICAgICAgICAgICBzZXR0ZWRDZWxsV2lkdGggKz0gc2V0dGVkV2lkdGhcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpZXIyQ291bnQrK1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgdG90YWxHcmlkV2lkdGgrK1xyXG4gICAgfSlcclxuICAgIC8vIGNvbnN0IHNldHRlZENlbGxXaWR0aCA9ICh0eXBlb2YgdGhpcy5jZWxsV2lkdGggPT09ICdvYmplY3QnKSBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QudmFsdWVzKHRoaXMuY2VsbFdpZHRoKS5yZWR1Y2UoKHByZXYsIG51bSkgPT4gcHJldiArIG51bSkgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDogMFxyXG4gICAgY29uc3QgYWxsQ29sV2lkdGggPSB0aGlzLndpZHRoXHJcbiAgICBjb25zdCB0b3RhbFVuc2V0Q2VsbFdpZHRoID0gYWxsQ29sV2lkdGggLSBzZXR0ZWRDZWxsV2lkdGgvLyAtIDE4XHJcbiAgICBsZXQgY2VsbFdpZHRoID0gMFxyXG4gICAgbGV0IG1pc3NlZFdpZHRoID0gMFxyXG5cclxuICAgIGNlbGxXaWR0aCA9IE1hdGguZmxvb3IodG90YWxVbnNldENlbGxXaWR0aCAvIHRpZXIyQ291bnQpXHJcbiAgICAvLyBjZWxsV2lkdGggPSB0b3RhbFVuc2V0Q2VsbFdpZHRoIC8gdGllcjJDb3VudFxyXG4gICAgbWlzc2VkV2lkdGggPSBhbGxDb2xXaWR0aCAtIChjZWxsV2lkdGggKiB0aWVyMkNvdW50ICsgc2V0dGVkQ2VsbFdpZHRoKVxyXG4gICAgbWlzc2VkV2lkdGggLT0gdG90YWxHcmlkV2lkdGhcclxuICAgIC8vIHRoaXMuZGVmYXVsdENlbGxXaWR0aCA9IGNlbGxXaWR0aFxyXG4gICAgLy8gdGhpcy53aWR0aCAtPSBtaXNzZWRXaWR0aFxyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY2VsbFdpZHRoID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBpZiAoaXNOYU4odGhpcy5jZWxsV2lkdGhbMF0pKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsV2lkdGhbMF0gPSBjZWxsV2lkdGggKyBtaXNzZWRXaWR0aFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2VsbFdpZHRoWzBdICs9IG1pc3NlZFdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2VsbFdpZHRoID0ge31cclxuICAgICAgdGhpcy5jZWxsV2lkdGhbMF0gPSBjZWxsV2lkdGggKyBtaXNzZWRXaWR0aFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2VsbFdpZHRoXHJcbiAgfVxyXG4gIFxyXG4gIGdldENlbGxXaWR0aChpZHgpIHtcclxuICAgIHJldHVybiB0aGlzLmNlbGxXaWR0aFtpZHhdIHx8IHRoaXMuZGVmYXVsdENlbGxXaWR0aFxyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihDYW52YXNUYWJsZS5wcm90b3R5cGUsIERyYXdlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc1RhYmxlIiwiZXhwb3J0IGNvbnN0IERyYXdlciA9IHtcclxuICBkcmF3Q2VsbChpbnB1dCkge1xyXG4gICAgICBjb25zdCBub29wID0gKCkgPT4ge31cclxuICAgICAgY29uc3QgeyBjdHgsIGJnQ29sb3IsIHRDb2xvciwgdGV4dCwgZngsIGZ5LCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXRYID0gMCwgZHJhd0JlZm9yZVRleHQgPSBub29wLCBkcmF3QWZ0ZXJUZXh0ID0gbm9vcCwgc2hvdWxkV3JhcFRleHQgPSBmYWxzZSB9ID0gaW5wdXRcclxuICAgICAgLy9iZ1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gYmdDb2xvclxyXG4gICAgICBjdHguZmlsbFJlY3QoZngsIGZ5LCB3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgICAgZHJhd0JlZm9yZVRleHQodGV4dClcclxuXHJcbiAgICAgIC8vdGV4dFxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdENvbG9yXHJcbiAgICAgIGlmIChzaG91bGRXcmFwVGV4dCkge1xyXG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aClcclxuICAgICAgICAgIGNvbnN0IHVwcGVyID0gdGV4dC5zdWJzdHIoMCwgbGVuZ3RoIC8gMilcclxuICAgICAgICAgIGNvbnN0IGxvd2VyID0gdGV4dC5zdWJzdHIobGVuZ3RoIC8gMiwgbGVuZ3RoKVxyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHVwcGVyLCBmeCArICh3aWR0aCAvIDIpLCBoZWlnaHQgKiAwLjI1ICsgZnkpXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQobG93ZXIsIGZ4ICsgKHdpZHRoIC8gMiksIGhlaWdodCAqIDAuNzUgKyBmeSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBmeCArICh3aWR0aCAvIDIpLCBoZWlnaHQgLyAyICsgZnksIHdpZHRoIC0gMilcclxuICAgICAgfVxyXG5cclxuICAgICAgZHJhd0FmdGVyVGV4dCh0ZXh0KVxyXG4gIH0sXHJcbiAgXHJcbiAgLyoqIOe5quijveacieWtkOWxpOeahOWNgOWhiueahOagvOWtkCAqL1xyXG4gIGRyYXdNdWx0aVN1YkNvbHVtbkNlbGwoe2N0eCwgcm93RGF0YSwgb2Zmc2V0WCwgb2Zmc2V0WSwgcm93SWR4LCBzZWN0aW9uSWR4LCBjZWxsV2lkdGgsIGNlbGxIZWlnaHR9LCBkcmF3Q2VsbFBhcmFtcykge1xyXG4gICAgICBpZiAodHlwZW9mIHJvd0RhdGEgIT09ICdvYmplY3QnKSB0aHJvdyBgZXJyb3IgYXQgJ2RyYXdNdWx0aVN1YkNvbHVtbkNlbGwnLiBFeHBlY3RpbmcgYW4gYXJyYXkgb3IgU2VjdGlvbiBvYmplY3QsIGZvdW5kOiByb3dEYXRhOiAke3Jvd0RhdGF9YFxyXG4gICAgICBsZXQgdG90YWxXaWR0aCA9IDBcclxuICAgICAgcm93RGF0YS5mb3JFYWNoKChjb2RlLCBjZWxsSWR4KSA9PiB7XHJcbiAgICAgICAgLy8gY29kZSBjb3VsZCBiZSAndGV4dCcgb3IgWyd0ZXh0JywgJ2NvbG9yJ11cclxuICAgICAgICBjb25zdCBncmlkT2Zmc2V0ID0gKGNlbGxJZHggPT09IHJvd0RhdGEubGVuZ3RoIC0gMSkgPyAwIDogMVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSAodHlwZW9mIGNvZGUgPT09ICdvYmplY3QnICYmIGNvZGVbMF0pIHx8IGNvZGVcclxuICAgICAgICBjb25zdCB0Q29sb3IgPSAodHlwZW9mIGNvZGUgPT09ICdvYmplY3QnICYmIGNvZGVbMV0pIHx8ICdibGFjaydcclxuICAgICAgICB0aGlzLmRyYXdDZWxsKHtcclxuICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgIGJnQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdENvbG9yLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBmeDogb2Zmc2V0WCxcclxuICAgICAgICAgICAgZnk6IG9mZnNldFksXHJcbiAgICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGggLSBncmlkT2Zmc2V0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHQsXHJcbiAgICAgICAgICAgIC4uLmRyYXdDZWxsUGFyYW1zXHJcbiAgICAgICAgfSlcclxuICAgICAgICBvZmZzZXRYICs9IGNlbGxXaWR0aFxyXG4gICAgICAgIHRvdGFsV2lkdGggKz0gY2VsbFdpZHRoXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB0b3RhbFdpZHRoICsgMVxyXG4gIH0sXHJcbiAgXHJcbiAgLyoqIOe5quijveWWruS4gOWxpOeahOagvOWtkCAqL1xyXG4gIGRyYXdTaW5nbGVDb2x1bW5DZWxsKHtjdHgsIHJvd0RhdGEsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeCwgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0fSkge1xyXG4gICAgICBsZXQgY2VsbCwgdENvbG9yLCB0ZXh0XHJcbiAgICAgIGlmICh0eXBlb2Ygcm93RGF0YSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIHRleHQgPSByb3dEYXRhXHJcbiAgICAgICAgICB0Q29sb3IgPSAnYmxhY2snXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjZWxsID0gKHR5cGVvZiByb3dEYXRhWzBdID09PSAnb2JqZWN0JykgPyByb3dEYXRhWzBdIDogcm93RGF0YVxyXG4gICAgICAgICAgdENvbG9yID0gY2VsbFsxXSB8fCAnYmxhY2snXHJcbiAgICAgICAgICB0ZXh0ID0gY2VsbFswXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJhd0NlbGwoe1xyXG4gICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICBiZ0NvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICB0Q29sb3IsXHJcbiAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgZng6IG9mZnNldFgsXHJcbiAgICAgICAgICBmeTogb2Zmc2V0WSxcclxuICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGNlbGxXaWR0aCArIDFcclxuICB9LFxyXG4gIC8qKiDnuaroo73nkIPomZ/moLwgKi9cclxuICBkcmF3QmFsbENlbGwoe2N0eCwgcm93RGF0YSwgb2Zmc2V0WCwgb2Zmc2V0WSwgcm93SWR4LCBzZWN0aW9uSWR4LCBjZWxsV2lkdGgsIGNlbGxIZWlnaHR9KSB7XHJcblxyXG4gICAgY29uc3QgZHJhd0NpcmNsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB4ID0gb2Zmc2V0WCArICgoY2VsbFdpZHRoIC0gMS8qZ3JpZE9mZnNldCovKSAvIDIpXHJcbiAgICAgICAgY29uc3QgeSA9IGNlbGxIZWlnaHQgLyAyICsgb2Zmc2V0WVxyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDEwXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbidcclxuICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpXHJcbiAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgICAgIG9mZnNldFggKz0gY2VsbFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkcmF3Q2VsbFBhcmFtcyA9IHtcclxuICAgICAgICBkcmF3QmVmb3JlVGV4dDogZHJhd0NpcmNsZSxcclxuICAgICAgICB0Q29sb3I6ICd3aGl0ZSdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmRyYXdNdWx0aVN1YkNvbHVtbkNlbGwoLi4uYXJndW1lbnRzLCBkcmF3Q2VsbFBhcmFtcylcclxuICB9LFxyXG4gIC8qKiDnuaroo73luLbpgbrmvI/mop3lj4rotbDli6Lnt5rnmoTmoLzlrZAgKi9cclxuICBkcmF3TG9zdExpbmVDZWxsKHtjdHgsIHJvd0RhdGEsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeCwgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0fSkge1xyXG4gICAgICBjb25zdCBkYXRhTGVuZ3RoID0gdGhpcy5saXN0Lmxlbmd0aFxyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xvc2VOdW0gPSB0cnVlIC8vdGhpcy50cmVuZElzU2hvd0xvc2VOdW1cclxuICAgICAgY29uc3QgdHJlbmRJc1Nob3dMb3NlTGluZSA9IHRydWUgLy90aGlzLnRyZW5kSXNTaG93TG9zZUxpbmVcclxuXHJcbiAgICAgIC8vZGF0YVxyXG4gICAgICBjb25zdCBsb3N0Q29tYm9zQXJyID0gdGhpcy5kYXRhLmxvc3RDb21ib3NcclxuICAgICAgY29uc3QgbnVtSGVhdEFyciA9IHRoaXMuZGF0YS5udW1IZWF0XHJcbiAgICAgIGNvbnN0IGhpdE51bXNBcnIgPSB0aGlzLmRhdGEuaGl0TnVtc1xyXG4gICAgICBpZiAoIWxvc3RDb21ib3NBcnIgfHwgIW51bUhlYXRBcnIgfHwgIWhpdE51bXNBcnIpIHtcclxuICAgICAgICAgIHRocm93IFwiY2FuJ3QgZmluZCBsb3N0Q29tYm9zIG9yIG51bUhlYXQgb3IgaGl0TnVtc0FyciBpbiBkYXRhLlwiXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvd0RhdGEuZm9yRWFjaCgoY29kZSwgY2VsbElkeCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZ3JpZE9mZnNldCA9IChjZWxsSWR4ID09PSByb3dEYXRhLmxlbmd0aCAtIDEpID8gMCA6IDFcclxuICAgICAgICAgIGNvbnN0IGlzU3VtID0gZmFsc2UgLy9jZWxsSWR4ID09PSAwXHJcbiAgICAgICAgICBjb25zdCBsYXN0TG9zZUNvbWJvID0gbG9zdENvbWJvc0FycltjZWxsSWR4IC8qLSAxKi9dIC8vMXN0IGNlbGwgaXMgc3VtLCBzbyBvZmZzZXQgMVxyXG4gICAgICAgICAgY29uc3QgaXNMb3NpbmcgPSByb3dJZHggPj0gKGRhdGFMZW5ndGggLSBsYXN0TG9zZUNvbWJvKVxyXG4gICAgICAgICAgbGV0IGJnQ29sb3IgPSAodHJlbmRJc1Nob3dMb3NlTGluZSAmJiAhaXNTdW0gJiYgaXNMb3NpbmcpID8gJ2xpZ2h0Z3JheScgOiAnd2hpdGUnXHJcbiAgICAgICAgICBsZXQgdENvbG9yID0gJ2dyYXknXHJcbiAgICAgICAgICBpZiAoIXRyZW5kSXNTaG93TG9zZU51bSAmJiB0eXBlb2YgY29kZSA9PT0gJ251bWJlcicgJiYgIWlzU3VtKSB7XHJcbiAgICAgICAgICAgICAgdENvbG9yID0gYmdDb2xvclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGhpdEJhbGxQYXJhbXMgPSBbXVxyXG5cclxuICAgICAgICAgIC8vIGlmIChjb2RlID09PSAwKSB7IC8vaGl0XHJcbiAgICAgICAgICBpZiAoY2VsbElkeCA9PSByb3dJZHggJSA1KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbnVtID0gY2VsbElkeCArIDJcclxuICAgICAgICAgICAgICBjb25zdCBudW1IZWF0ID0gbnVtSGVhdEFycltudW1dXHJcbiAgICAgICAgICAgICAgY29uc3QgY29sb3JzID0gWydEZWVwU2t5Qmx1ZScsICdvcmFuZ2UnLCAncmVkJ11cclxuICAgICAgICAgICAgICBjb25zdCBiYWxsQ29sb3IgPSBjb2xvcnNbbnVtSGVhdF1cclxuICAgICAgICAgICAgICBjb25zdCB4ID0gb2Zmc2V0WCArICgoY2VsbFdpZHRoIC0gMS8qZ3JpZE9mZnNldCovKSAvIDIpXHJcbiAgICAgICAgICAgICAgY29uc3QgeSA9IGNlbGxIZWlnaHQgLyAyICsgb2Zmc2V0WVxyXG4gICAgICAgICAgICAgIGhpdE51bXNBcnJbcm93SWR4XSA9IHsgYmFsbENvbG9yLCB4LCB5LCBudW0sIGN0eCB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5kcmF3Q2VsbCh7XHJcbiAgICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgICAgYmdDb2xvcixcclxuICAgICAgICAgICAgICB0Q29sb3IsXHJcbiAgICAgICAgICAgICAgdGV4dDogY29kZSxcclxuICAgICAgICAgICAgICBmeDogb2Zmc2V0WCxcclxuICAgICAgICAgICAgICBmeTogb2Zmc2V0WSxcclxuICAgICAgICAgICAgICB3aWR0aDogY2VsbFdpZHRoIC0gZ3JpZE9mZnNldCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHQsXHJcbiAgICAgICAgICAgICAgLi4uaGl0QmFsbFBhcmFtc1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIG9mZnNldFggKz0gY2VsbFdpZHRoXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBjZWxsV2lkdGggKiByb3dEYXRhLmxlbmd0aCArIDFcclxuICB9LFxyXG4gIC8qKiDnuaroo73otbDli6Lnt5ogKi9cclxuICBkcmF3VHJlbmRMaW5lKCkge1xyXG4gICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICAgIGNvbnN0IGhpdE51bXMgPSB0aGlzLmRhdGEuaGl0TnVtc1xyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xpbmUgPSB0cnVlIC8vdGhpcy50cmVuZElzU2hvd0xpbmVcclxuICAgICAgY29uc3QgdHJlbmRJc1Nob3dCYWxsc1dhcm4gPSB0cnVlIC8vdGhpcy50cmVuZElzU2hvd0JhbGxzV2FyblxyXG4gICAgICBpZiAoIWhpdE51bXMpIHtcclxuICAgICAgICAgIHRocm93ICdjYW5cXCd0IGZpbmQgaGl0TnVtcyBpbiBkYXRhLidcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkcmF3TGluZSA9IChmcm9tLCB0bykgPT4ge1xyXG4gICAgICAgICAgaWYgKCFmcm9tIHx8ICF0bykgcmV0dXJuXHJcbiAgICAgICAgICAvL2RyYXcgbGluZXNcclxuICAgICAgICAgIGNvbnN0IGN0eCA9IGZyb20uY3R4XHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnXHJcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gMlxyXG4gICAgICAgICAgY3R4Lm1vdmVUbyhmcm9tLngsIGZyb20ueSlcclxuICAgICAgICAgIGlmICh0by55IDwgZnJvbS55KSB7XHJcbiAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0by54LCB0by55ICsgdGhpcy5jYW52YXNIZWlnaHQpXHJcblxyXG4gICAgICAgICAgICAgIHRvLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgIHRvLmN0eC5zdHJva2VTdHlsZSA9ICdyZWQnXHJcbiAgICAgICAgICAgICAgdG8uY3R4LmxpbmVXaWR0aCA9IDJcclxuICAgICAgICAgICAgICB0by5jdHgubW92ZVRvKGZyb20ueCwgZnJvbS55IC0gdGhpcy5jYW52YXNIZWlnaHQpXHJcbiAgICAgICAgICAgICAgdG8uY3R4LmxpbmVUbyh0by54LCB0by55KVxyXG4gICAgICAgICAgICAgIHRvLmN0eC5zdHJva2UoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjdHgubGluZVRvKHRvLngsIHRvLnkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjdHguc3Ryb2tlKClcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkcmF3QmFsbCA9IChoaXQpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGhpdCAhPT0gJ29iamVjdCcpIHJldHVyblxyXG4gICAgICAgICAgLy9kcmF3IGJhbGxcclxuICAgICAgICAgIGNvbnN0IGN0eCA9IGhpdC5jdHhcclxuICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDEwXHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gKHRyZW5kSXNTaG93QmFsbHNXYXJuKSA/IGhpdC5iYWxsQ29sb3IgOiAnZ3JlZW4nXHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgIGN0eC5hcmMoaGl0LngsIGhpdC55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxyXG4gICAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgICAgICAgLy9kcmF3IHRleHRcclxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQoaGl0Lm51bSwgaGl0LngsIGhpdC55KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHJlbmRJc1Nob3dMaW5lKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gaGl0TnVtcykge1xyXG4gICAgICAgICAgICAgIGlmICghaGl0TnVtcy5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWVcclxuICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IGhpdE51bXNbaSAtIDFdXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXROdW1zW2ldXHJcbiAgICAgICAgICAgICAgICAgIGRyYXdMaW5lKHByZXYsIGN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAoY29uc3QgY3VycmVudCBvZiBoaXROdW1zKSB7XHJcbiAgICAgICAgICBkcmF3QmFsbChjdXJyZW50KVxyXG4gICAgICB9XHJcbiAgfSxcclxufSIsIi8qKiDkuIDljYDloYrnmoTkuIDooYzos4fmlpkgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbjxUPiB7XHJcbiAgICBkcmF3RnVuYzogU3RyaW5nXHJcbiAgICBjb250ZW50OiBBcnJheTxTdHJpbmd8U3RyaW5nW10+XHJcbiAgICAvKiog5LiA5Y2A5aGK55qE5LiA6KGM6LOH5paZICovXHJcbiAgICBjb25zdHJ1Y3RvcihhcnI/OiBBcnJheTxTdHJpbmd8U3RyaW5nW10+KSB7XHJcbiAgICAgICAgLyoqIChzdHJpbmcpIOiqv+eUqOeJueauiue5quijvWZ1bmN0aW9uICovXHJcbiAgICAgICAgdGhpcy5kcmF3RnVuYyA9IG51bGxcclxuICAgICAgICAvKiogKGFycmF5KSDos4fmlpnlhaflrrkgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhcnIgfHwgW11cclxuICAgIH1cclxuICAgIGdldCBsZW5ndGgoKTogTnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDlhaXos4fmlplcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGV4dFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb2xvclxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAgIGFkZCh0ZXh0OiBTdHJpbmcsIGNvbG9yPzogU3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgcmVzOiBTdHJpbmd8U3RyaW5nW10gPSAoY29sb3IpID8gW3RleHQsIGNvbG9yXSA6IHRleHRcclxuICAgICAgICB0aGlzLmNvbnRlbnQucHVzaChyZXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIHNldERyYXdGdW5jKGZ1bmM6IFN0cmluZykge1xyXG4gICAgICB0aGlzLmRyYXdGdW5jID0gZnVuY1xyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3lrpros4fmlplcclxuICAgICAqIEBwYXJhbSAge2FycmF5fSBhcnJheSAtIGFycmF5IG9mICd0ZXh0JyBvciBbJ3RleHQnLCAnY29sb3InXVxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAgIHNldENvbnRlbnQoYXJyYXk6IEFycmF5PFN0cmluZ3xTdHJpbmdbXT4pIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhcnJheVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBjb25jYXQoYXJyYXk6IEFycmF5PFN0cmluZ3xTdHJpbmdbXT4pIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuY29uY2F0KGFycmF5KVxyXG4gICAgfVxyXG4gICAgZm9yRWFjaChmbjogKHZhbHVlOiBTdHJpbmd8U3RyaW5nW10sIGluZGV4OiBudW1iZXIsIGFycmF5OiAoU3RyaW5nfFN0cmluZ1tdKVtdKSA9PiB2b2lkKSB7XHJcbiAgICAgIHRoaXMuY29udGVudC5mb3JFYWNoKGZuKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==