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
  cellWidth: { 0: 120, 1: 80 },
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

const canvases = canvasTable.draw()
canvases.forEach((e) => {
  dom.appendChild(e)
})

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
              offsetX += this[drawFunc]({ctx: ctxArr[canvasIdx], rowCodes: content, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight})
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
  drawMultiSubColumnCell({ctx, rowCodes, offsetX, offsetY, sectionIdx, drawCellParams}) {
      if (typeof rowCodes !== 'object') throw `error at 'drawMultiSubColumnCell'. Expecting an array or Section object, found: rowCodes: ${rowCodes}`
      const cellHeight = this.cellHeight
      let totalWidth = 0
      rowCodes.forEach((code, cellIdx) => {
        // code could be 'text' or ['text', 'color']
        const cellWidth = this.getCellWidth(sectionIdx)
        const gridOffset = (cellIdx === rowCodes.length - 1) ? 0 : 1
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
  drawSingleColumnCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight}) {
      let cell, tColor, text
      if (typeof rowCodes !== 'object') {
          text = rowCodes
          tColor = 'black'
      } else {
          cell = (typeof rowCodes[0] === 'object') ? rowCodes[0] : rowCodes
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
  drawBallCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight}) {

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
    return this.drawMultiSubColumnCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx, drawCellParams})
  },
  /** 繪製帶遺漏條的格子 */
  drawLostLineStatusCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight}) {
      const dataLength = this.computedData.length
      const trendIsShowLoseNum = this.trendIsShowLoseNum
      const trendIsShowLoseLine = this.trendIsShowLoseLine

      //data
      const lostCombosArr = this.data.lostComboStatus
      if (!lostCombosArr) {
          throw "can't find lostCombos in data."
      }

      rowCodes.forEach((arr, cellIdx) => {
          const gridOffset = (cellIdx === rowCodes.length - 1) ? 0 : 1
          const lastLoseCombo = lostCombosArr[cellIdx]
          const isLosing = rowIdx >= (dataLength - lastLoseCombo)
          const bgColor = (trendIsShowLoseLine && isLosing) ? 'lightgray' : 'white'
          const text = arr[0]
          let tColor = arr[1]
          if (!trendIsShowLoseNum && typeof text === 'number') {
              tColor = bgColor
          }
          let hitBallParams = []

          this.drawCell({
              ctx: ctx,
              bgColor,
              tColor,
              text,
              fx: offsetX,
              fy: offsetY,
              width: cellWidth - gridOffset,
              height: cellHeight,
              ...hitBallParams
          })
          offsetX += cellWidth
      })
      return cellWidth * rowCodes.length + 1
  },
  /** 繪製帶遺漏條及走勢線的格子 */
  drawLostLineCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx, cellWidth, cellHeight}) {
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

      rowCodes.forEach((code, cellIdx) => {
          const gridOffset = (cellIdx === rowCodes.length - 1) ? 0 : 1
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
      return cellWidth * rowCodes.length + 1
  },
  /**繪製六合彩球號格 */
  drawMark6Num(ctx, rowCodes, offsetX, offsetY) {
      rowCodes.forEach((row, cellIdx) => {
          // code could be 'text' or ['text', 'color']
          const gridOffset = (cellIdx === rowCodes.length - 1) ? 0 : 1
          const text = row.code
          const ballColor = row.color
          const animal = (this.lotteryName === 'MARK6_SIN')? row.animal : this.$t(row.animal)
          const fx = offsetX
          const fy = offsetY
          const width = cellWidth - gridOffset
          const height = cellHeight

          //bg
          ctx.fillStyle = 'white'
          ctx.fillRect(fx, fy, width, height)

          //ball
          const radius = 9
          ctx.fillStyle = ballColor
          ctx.beginPath()
          ctx.arc(fx + (width / 3), fy + (height / 2), radius, 0, 2 * Math.PI)
          ctx.fill()
          //ballText
          ctx.fillStyle = 'white'
          ctx.fillText(text, fx + (width / 3), height / 2 + fy)

          //animal
          ctx.fillStyle = 'black'
          // ctx.font = ctx.font.replace(/\d+px/, "16px");
          ctx.fillText(animal, fx + (width / 1.5), height / 2 + fy)

          offsetX += cellWidth
      })
      return cellWidth * rowCodes.length + 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlclRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NhbnZhc1RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9zZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ3FCOztBQUViOztBQUVSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0EsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQzdDZ0I7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsa0NBQWtDO0FBQ2xDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsNENBQTRDOztBQUVyRTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0RBQW9EO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUdBQXVHO0FBQ2hKLFdBQVc7QUFDWCxpREFBaUQsZ0NBQWdDLHVCQUF1QixTQUFTO0FBQ2pIO0FBQ0EsZ0NBQWdDLG9EQUFvRDtBQUNwRixPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEU7Ozs7Ozs7Ozs7Ozs7O0FDelBBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0lBQXNJO0FBQ25KO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMEJBQTBCLDREQUE0RDtBQUN0RiwySUFBMkksU0FBUztBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSx3QkFBd0IsMkVBQTJFO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZ0JBQWdCLDJFQUEyRTs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvRUFBb0U7QUFDNUcsR0FBRztBQUNIO0FBQ0EsMEJBQTBCLDJFQUEyRTtBQUNyRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0Esb0JBQW9CLDJFQUEyRTtBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ3pSQTtBQUFBLGVBQWU7QUFDRCxNQUFPLE9BQU87SUFHeEIsZUFBZTtJQUNmLFlBQVksR0FBNEI7UUFDcEMsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNwQixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLElBQUksRUFBRTtJQUM1QixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07SUFDOUIsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ0gsR0FBRyxDQUFDLElBQVksRUFBRSxLQUFjO1FBQzVCLE1BQU0sR0FBRyxHQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdEIsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUNELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNwQixPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxLQUE2QjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7UUFDcEIsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUE2QjtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ0QsT0FBTyxDQUFDLEVBQStFO1FBQ3JGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGhlYWRlckRhdGEgPSBbXHJcbiAgJ0lzc3VlJyxcclxuICBbXHJcbiAgICBcIuW8gOWlluWPt+eggVwiLFxyXG4gICAgW1xyXG4gICAgICBcIuS4h+S9jVwiLFxyXG4gICAgICBcIuWNg+S9jVwiLFxyXG4gICAgICBcIueZvuS9jVwiLFxyXG4gICAgICBcIuWNgeS9jVwiLFxyXG4gICAgICBcIuS4quS9jVwiXHJcbiAgICBdXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIuaAu+WSjFwiLFxyXG4gICAgW1xyXG4gICAgICBcIuWSjOWAvFwiLFxyXG4gICAgICBcIuWkp+Wwj1wiLFxyXG4gICAgICBcIuWNleWPjFwiXHJcbiAgICBdXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIuS4h+S9jVwiLFxyXG4gICAgW1xyXG4gICAgICBcIuWkp+Wwj1wiLFxyXG4gICAgICBcIuWNleWPjFwiLFxyXG4gICAgICBcIui0qOWQiFwiXHJcbiAgICBdXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIuWNg+S9jVwiLFxyXG4gICAgW1xyXG4gICAgICBcIuWkp+Wwj1wiLFxyXG4gICAgICBcIuWNleWPjFwiLFxyXG4gICAgICBcIui0qOWQiFwiXHJcbiAgICBdXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIueZvuS9jVwiLFxyXG4gICAgW1xyXG4gICAgICBcIuWkp+Wwj1wiLFxyXG4gICAgICBcIuWNleWPjFwiLFxyXG4gICAgICBcIui0qOWQiFwiXHJcbiAgICBdXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIuWNgeS9jVwiLFxyXG4gICAgW1xyXG4gICAgICBcIuWkp+Wwj1wiLFxyXG4gICAgICBcIuWNleWPjFwiLFxyXG4gICAgICBcIui0qOWQiFwiXHJcbiAgICBdXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIuS4quS9jVwiLFxyXG4gICAgW1xyXG4gICAgICBcIuWkp+Wwj1wiLFxyXG4gICAgICBcIuWNleWPjFwiLFxyXG4gICAgICBcIui0qOWQiFwiXHJcbiAgICBdXHJcbiAgXVxyXG5dIiwiaW1wb3J0IENhbnZhc1RhYmxlIGZyb20gXCIuL2xpYnMvY2FudmFzVGFibGVcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vbGlicy9zZWN0aW9uXCI7XHJcbmltcG9ydCB7IGhlYWRlckRhdGEgfSBmcm9tIFwiLi9oZWFkZXJUZXh0XCI7XHJcblxyXG5leHBvcnQgeyBDYW52YXNUYWJsZSwgU2VjdGlvbiB9XHJcblxyXG4vLyBtb2NrIGFwaVxyXG5jb25zdCBmaWxsQXJyYXkgPSAodGltZXMsIGZuKSA9PiBbLi4uQXJyYXkodGltZXMpLmtleXMoKV0ubWFwKCgpID0+IGZuKCkpXHJcbmNvbnN0IGdldDF0bzkgPSAoKSA9PiBmaWxsQXJyYXkoNSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKSAvLyBbJzEnLCAnNicsICc3JywgJzcnLCAnOCddXHJcbmNvbnN0IHNvdXJjZSA9IGZpbGxBcnJheSg5MCwgKCkgPT4gZ2V0MXRvOSgpKVxyXG5cclxuLy8gZGF0YSBjYWxjdWxhdGlvblxyXG5sZXQgY29udGVudERhdGEgPSBzb3VyY2UubWFwKChyb3csIGlkeCkgPT4ge1xyXG4gIGNvbnN0IGFuYWx5emVTaW5nbGUgPSAobnVtKSA9PiBuZXcgU2VjdGlvbigpLmFkZCgn5aSnJywgJ3JlZCcpLmFkZCgn5ZauJywgJ2JsdWUnKS5hZGQoJ+izqicsICdyZWQnKVxyXG4gIGNvbnN0IHN1bSA9IHJvdy5yZWR1Y2UoKHN1bSwgbnVtKSA9PiBzdW0gKyBudW0pXHJcbiAgcmV0dXJuIFtcclxuICAgIG5ldyBTZWN0aW9uKCkuYWRkKGlkeCwgbnVsbCksXHJcbiAgICBuZXcgU2VjdGlvbigpLnNldERyYXdGdW5jKCdkcmF3TG9zdExpbmVDZWxsJykuc2V0Q29udGVudChyb3cpLFxyXG4gICAgYW5hbHl6ZVNpbmdsZShzdW0pLFxyXG4gICAgLi4ucm93Lm1hcChhbmFseXplU2luZ2xlKVxyXG4gIF1cclxufSlcclxuXHJcbi8vIGRyYXdcclxuY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215VGFibGUnKVxyXG5cclxuY29uc3QgY2FudmFzVGFibGUgPSBuZXcgQ2FudmFzVGFibGUoe1xyXG4gIGNlbGxXaWR0aDogeyAwOiAxMjAsIDE6IDgwIH0sXHJcbiAgY2VsbEhlaWdodDogMzIsXHJcbiAgY2VsbHNQZXJDYW52YXM6IDIwMCxcclxuICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLSAxOCxcclxuICBkZWZhdWx0Rm9udFNpemU6IDgsXHJcbiAgaGVhZGVyVGV4dDogaGVhZGVyRGF0YSxcclxuICBsaXN0OiBbLi4uY29udGVudERhdGFdLFxyXG4gIGRhdGE6IHtcclxuICAgIGxvc3RDb21ib3M6IFs1LCAxNSwgMiwgOCwgMV0sXHJcbiAgICBudW1IZWF0OiBbMiwgMCwgMSwgMCwgMSwgMCwgMiwgMCwgMl0sXHJcbiAgICBoaXROdW1zOiBbXSxcclxuICB9XHJcbiAgLy8gbGlzdDogWy4uLkFycmF5KDUwKS5rZXlzKCldLnJlZHVjZSgoYXJyLCBlKSA9PiBhcnIuY29uY2F0KG1vY2tDb250ZW50VGV4dCksIFtdKSxcclxufSlcclxuXHJcbmNvbnN0IGNhbnZhc2VzID0gY2FudmFzVGFibGUuZHJhdygpXHJcbmNhbnZhc2VzLmZvckVhY2goKGUpID0+IHtcclxuICBkb20uYXBwZW5kQ2hpbGQoZSlcclxufSkiLCJpbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuL2RyYXdlcidcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xyXG5jbGFzcyBDYW52YXNUYWJsZSB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHRoaXMuY2VsbFdpZHRoID0gcHJvcHMuY2VsbFdpZHRoIHx8IDY0XHJcbiAgICB0aGlzLmNlbGxIZWlnaHQgPSArcHJvcHMuY2VsbEhlaWdodCB8fCAzMlxyXG4gICAgdGhpcy5jZWxsc1BlckNhbnZhcyA9ICtwcm9wcy5jZWxsc1BlckNhbnZhcyB8fCAyMDBcclxuICAgIHRoaXMud2lkdGggPSArcHJvcHMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGhcclxuICAgIHRoaXMuZGVmYXVsdEZvbnRTaXplID0gcHJvcHMuZGVmYXVsdEZvbnRTaXplIHx8IDEyXHJcbiAgICB0aGlzLmdyaWRDb2xvciA9IHByb3BzLmdyaWRDb2xvciB8fCAnZ3JheSdcclxuICAgIHRoaXMuYmdDb2xvciA9IHByb3BzLmJnQ29sb3IgfHwgJ3doaXRlJ1xyXG4gICAgdGhpcy5jb2xvciA9IHByb3BzLmNvbG9yIHx8ICdibGFjaydcclxuICAgIFxyXG4gICAgdGhpcy5oZWFkZXJUZXh0ID0gcHJvcHMuaGVhZGVyVGV4dFxyXG4gICAgdGhpcy5saXN0ID0gcHJvcHMubGlzdFxyXG4gICAgdGhpcy5kYXRhID0gcHJvcHMuZGF0YVxyXG4gICAgXHJcbiAgICB0aGlzLmRlZmF1bHRDZWxsV2lkdGggPSB0aGlzLmNhbGNDZWxsV2lkdGhzKClcclxuICAgIHRoaXMuY2FudmFzQXJyYXkgPSB0aGlzLmdldENhbnZhc0FycmF5KClcclxuICB9XHJcbiAgZHJhdygpIHtcclxuICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID09PSAwKSB0aHJvdyAnbm8gbGlzdCBkYXRhIGZvdW5kJ1xyXG4gICAgY29uc3QgY3R4QXJyID0gW11cclxuICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxIZWlnaHQgKyAxXHJcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLmNlbGxzUGVyQ2FudmFzICogdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICBjb25zdCBjZWxsc1BlckNhbnZhcyA9IHRoaXMuY2VsbHNQZXJDYW52YXNcclxuICAgIGNvbnN0IGxvd2VyVGl0bGVTaG91bGRXcmFwID0gZmFsc2UvL3RoaXMuY29uZmlnLmxvd2VyVGl0bGVTaG91bGRXcmFwXHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcclxuICAgIHRoaXMuY2FudmFzQXJyYXkuZm9yRWFjaCgoY2FudmFzLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBjYW52YXNIZWlnaHQpXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggKyAxXHJcblxyXG4gICAgICAgIGNvbnN0IGlzSGVhZGVyID0gKGkgPT09IDApXHJcbiAgICAgICAgaWYgKGlzSGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVyID0gKGxvd2VyVGl0bGVTaG91bGRXcmFwKSA/IDEuNSA6IDFcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IChjZWxsSGVpZ2h0ICsgMykgKiBtb2RpZmllci8vIC0gMVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldENhbnZhc0hlaWdodChpKVxyXG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJ1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xyXG4gICAgICAgIGN0eC5mb250ID0gYCR7dGhpcy5kZWZhdWx0Rm9udFNpemV9cHQgQXJpYWxgXHJcbiAgICAgICAgLy9ncmlkXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JpZENvbG9yXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCArIDEpXHJcblxyXG4gICAgICAgIGN0eEFyci5wdXNoKGN0eClcclxuICAgIH0pXHJcbiAgICB0aGlzLmRyYXdIZWFkZXIoY3R4QXJyWzBdLCBsb3dlclRpdGxlU2hvdWxkV3JhcClcclxuICAgIHRoaXMuZHJhd0NvbnRlbnQoe2N0eEFycn0pXHJcbiAgICB0aGlzLmRyYXdUcmVuZExpbmUoe2N0eEFycn0pXHJcbiAgICByZXR1cm4gdGhpcy5jYW52YXNBcnJheVxyXG4gIH1cclxuICBcclxuICBkcmF3SGVhZGVyKGN0eCwgbG93ZXJUaXRsZVNob3VsZFdyYXApIHtcclxuICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxIZWlnaHRcclxuICAgIGNvbnN0IGRyYXdDZWxsID0gdGhpcy5kcmF3Q2VsbFxyXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IHRoaXMuaGVhZGVyVGV4dFxyXG4gICAgY29uc3QgaGVhZGVyRGVmYXVsdCA9IHtcclxuICAgICAgICBiZ0NvbG9yOiAnIzQwNDI1MScsXHJcbiAgICAgICAgdENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgY3R4XHJcbiAgICB9XHJcbiAgICBsZXQgb2Zmc2V0WCA9IDFcclxuICAgIGNvbnN0IGhlaWdodE1vZGlmaWVyID0gKGxvd2VyVGl0bGVTaG91bGRXcmFwKSA/IDEuNSA6IDFcclxuICAgIGhlYWRlclRleHQuZm9yRWFjaCgodGllcjEsIGkxKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aWVyMSA9PT0gJ3N0cmluZycpIHsgLy9zaW5nbGUgbGF5ZXJcclxuICAgICAgICAgICAgY29uc3QgY2VsbFdpZHRoID0gdGhpcy5nZXRDZWxsV2lkdGgoaTEpXHJcbiAgICAgICAgICAgIGRyYXdDZWxsKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRpZXIxLFxyXG4gICAgICAgICAgICAgICAgZng6IG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICBmeTogMSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHQgKyAzLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgIC4uLmhlYWRlckRlZmF1bHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgb2Zmc2V0WCArPSBjZWxsV2lkdGhcclxuICAgICAgICB9IGVsc2UgeyAvL2RvdWJsZSBsYXllclxyXG4gICAgICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmdldENlbGxXaWR0aChpMSlcclxuICAgICAgICAgICAgY29uc3QgdXBwZXJUaXRsZSA9IHRpZXIxWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyVGl0bGVzID0gdGllcjFbMV1cclxuICAgICAgICAgICAgY29uc3QgdXBwZXJUaXRsZVdpZHRoID0gbG93ZXJUaXRsZXMubGVuZ3RoICogY2VsbFdpZHRoXHJcbiAgICAgICAgICAgIGRyYXdDZWxsKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHVwcGVyVGl0bGUsXHJcbiAgICAgICAgICAgICAgICBmeDogb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgIGZ5OiAxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHVwcGVyVGl0bGVXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2VsbEhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgLi4uaGVhZGVyRGVmYXVsdFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbG93ZXJUaXRsZXMuZm9yRWFjaCgodGl0bGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRPZmZzZXQgPSAoaSA9PT0gbG93ZXJUaXRsZXMubGVuZ3RoIC0gMSkgPyAwIDogMVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0TW9kaWZpZXIgPSAobG93ZXJUaXRsZVNob3VsZFdyYXApID8gMSA6IDAuNVxyXG4gICAgICAgICAgICAgICAgZHJhd0NlbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ4OiBvZmZzZXRYICsgKGNlbGxXaWR0aCAqIGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ5OiBjZWxsSGVpZ2h0IC8gMiArIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCAtIGdyaWRPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0ICogaGVpZ2h0TW9kaWZpZXIgKyAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IG9mZnNldFggKyAoY2VsbFdpZHRoICogaSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkV3JhcFRleHQ6IGxvd2VyVGl0bGVTaG91bGRXcmFwICYmICh0aXRsZS5sZW5ndGggPiAyKSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5oZWFkZXJEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBvZmZzZXRYICs9IHVwcGVyVGl0bGVXaWR0aFxyXG4gICAgICAgIH1cclxuICAgICAgICBvZmZzZXRYICs9IDEgLy9ncmlkXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICBkcmF3Q29udGVudCh7XHJcbiAgICBjdHhBcnIsIFxyXG4gICAgZHJhd0JlZm9yZUVhY2hSb3cgPSAoKT0+e30sIFxyXG4gICAgZHJhd0JlZm9yZUVhY2hTZWN0aW9uID0gKCk9Pnt9LCBcclxuICAgIGRyYXdBZnRlckVhY2hTZWN0aW9uID0gKCk9Pnt9XHJcbiAgfSkge1xyXG4gICAgY29uc3QgY2VsbEhlaWdodCA9IHRoaXMuY2VsbEhlaWdodFxyXG4gICAgbGV0IG9mZnNldFggPSAxXHJcbiAgICBsZXQgb2Zmc2V0WSA9IDFcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxpc3RcclxuICAgIGxldCBjYW52YXNJZHggPSAxXHJcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLmNlbGxzUGVyQ2FudmFzICogdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICBkYXRhLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XHJcbiAgICAgIC8vcmVzZXQgeCB0byBsZWZ0XHJcbiAgICAgIG9mZnNldFggPSAxXHJcblxyXG4gICAgICBkcmF3QmVmb3JlRWFjaFJvdyh7Y3R4QXJyLCByb3csIHJvd0lkeCwgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WX0pXHJcbiAgICAgIFxyXG4gICAgICAvL2RyYXcgZWFjaCBzZWN0aW9uXHJcbiAgICAgIHJvdy5mb3JFYWNoKChzZWN0aW9uLCBzZWN0aW9uSWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgICAgICAgIGRyYXdCZWZvcmVFYWNoU2VjdGlvbih7Y3R4QXJyLCBzZWN0aW9uLCBzZWN0aW9uSWR4LCB4OiBvZmZzZXRYLCB5OiBvZmZzZXRZfSlcclxuICAgICAgICAgIGNvbnN0IGlzU2VjdGlvbkNscyA9IChzZWN0aW9uIGluc3RhbmNlb2YgU2VjdGlvbilcclxuICAgICAgICAgIGNvbnN0IGhhc0N1c3RvbVN0eWxlID0gc2VjdGlvbi5kcmF3RnVuY1xyXG4gICAgICAgICAgY29uc3QgaXNNdWx0aUNvbHVtbiA9IChpc1NlY3Rpb25DbHMgJiYgc2VjdGlvbi5sZW5ndGggPj0gMikgfHwgdHlwZW9mIHNlY3Rpb24gPT09ICdvYmplY3QnXHJcbiAgICAgICAgICAvLyBjb25zdCBjb250ZW50ID0gKGlzU2VjdGlvbkNscykgPyBzZWN0aW9uLmNvbnRlbnQgOiBzZWN0aW9uLmNvbnRlbnRcclxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAodHlwZW9mIHNlY3Rpb24gPT09ICdvYmplY3QnKSA/IHNlY3Rpb24uY29udGVudCA6IHNlY3Rpb25cclxuICAgICAgICAgIGxldCBkcmF3RnVuY1xyXG4gICAgICAgICAgaWYgKGhhc0N1c3RvbVN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgZHJhd0Z1bmMgPSBzZWN0aW9uLmRyYXdGdW5jXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRyYXdGdW5jID0gKGlzTXVsdGlDb2x1bW4pID8gJ2RyYXdNdWx0aVN1YkNvbHVtbkNlbGwnIDogJ2RyYXdTaW5nbGVDb2x1bW5DZWxsJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAvL3VzZSBuZXh0IGNhbnZhcyB3aGVuIGZ1bGxcclxuICAgICAgICAgICAgICBpZiAob2Zmc2V0WSA+PSBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgY2FudmFzSWR4KytcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0WSA9IDFcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgY2VsbFdpZHRoID0gdGhpcy5nZXRDZWxsV2lkdGgoc2VjdGlvbklkeClcclxuICAgICAgICAgICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICAgICAgICAgICAgb2Zmc2V0WCArPSB0aGlzW2RyYXdGdW5jXSh7Y3R4OiBjdHhBcnJbY2FudmFzSWR4XSwgcm93Q29kZXM6IGNvbnRlbnQsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeCwgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0fSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBlcnJvciBvY2N1cmVkIGF0IFwiJHt0aGlzLmhlYWRlclRleHRbc2VjdGlvbklkeCAtIDFdfVwiLFxcbiBkcmF3IGZ1bmN0aW9uOiBcIiR7ZHJhd0Z1bmN9XCJcXG5gLCBlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZHJhd0FmdGVyRWFjaFNlY3Rpb24oe2N0eEFyciwgc2VjdGlvbiwgc2VjdGlvbklkeCwgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WX0pXHJcbiAgICAgIH0pXHJcbiAgICAgIG9mZnNldFkgKz0gY2VsbEhlaWdodCArIDFcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGdldENhbnZhc0FycmF5KCkge1xyXG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0ICogdGhpcy5jZWxsc1BlckNhbnZhc1xyXG4gICAgY29uc3QgbGlzdENvdW50ID0gdGhpcy5saXN0Lmxlbmd0aFxyXG4gICAgY29uc3QgdG90YWxIZWlnaHQgPSBsaXN0Q291bnQgKiB0aGlzLmNlbGxIZWlnaHRcclxuICAgIGNvbnN0IG51bSA9IE1hdGguY2VpbCh0b3RhbEhlaWdodCAvIGNhbnZhc0hlaWdodCkgKyAxXHJcbiAgICBsZXQgYXJyID0gWy4uLkFycmF5KG51bSkua2V5cygpXVxyXG4gICAgYXJyID0gYXJyLm1hcChlID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKVxyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxuICBcclxuICBnZXRDYW52YXNIZWlnaHQoaWR4KSB7XHJcbiAgICBjb25zdCBsaXN0Q291bnQgPSB0aGlzLmxpc3QubGVuZ3RoXHJcbiAgICBjb25zdCBjYW52YXNDb3VudCA9IHRoaXMuY2FudmFzQXJyYXkubGVuZ3RoXHJcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLmNlbGxIZWlnaHQgKiB0aGlzLmNlbGxzUGVyQ2FudmFzXHJcbiAgICBjb25zdCBpc0xhc3QgPSBpZHggPT09IGNhbnZhc0NvdW50IC0gMVxyXG4gICAgaWYgKGlzTGFzdCkge1xyXG4gICAgICBjb25zdCByZW1haW5Db3VudCA9IGxpc3RDb3VudCAtICgoY2FudmFzQ291bnQgLSAyLypoZWFkZXIgJiBsYXN0Ki8pICogdGhpcy5jZWxsc1BlckNhbnZhcylcclxuICAgICAgY29uc3QgcmVtYWluSGVpZ2h0ID0gKHRoaXMuY2VsbEhlaWdodCArIDEvKmdyaWQqLykgKiByZW1haW5Db3VudFxyXG4gICAgICByZXR1cm4gcmVtYWluSGVpZ2h0ICsgMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNhbnZhc0hlaWdodCArIDFcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY2FsY0NlbGxXaWR0aHMoaGVhZGVyVGV4dCA9IHRoaXMuaGVhZGVyVGV4dCkge1xyXG4gICAgbGV0IHRpZXIyQ291bnQgPSAwXHJcbiAgICBsZXQgdG90YWxHcmlkV2lkdGggPSAwXHJcbiAgICBsZXQgc2V0dGVkQ2VsbFdpZHRoID0gMFxyXG4gICAgaGVhZGVyVGV4dC5mb3JFYWNoKCh0aWVyMSwgaWR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNldHRlZFdpZHRoID0gdGhpcy5jZWxsV2lkdGhbaWR4XVxyXG4gICAgICBpZiAodHlwZW9mIHRpZXIxID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmIChzZXR0ZWRXaWR0aCkge1xyXG4gICAgICAgICAgc2V0dGVkQ2VsbFdpZHRoICs9IHNldHRlZFdpZHRoXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRpZXIyQ291bnQrK1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aWVyMVsxXS5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgICAgIGlmIChzZXR0ZWRXaWR0aCkge1xyXG4gICAgICAgICAgICBzZXR0ZWRDZWxsV2lkdGggKz0gc2V0dGVkV2lkdGhcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpZXIyQ291bnQrK1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgdG90YWxHcmlkV2lkdGgrK1xyXG4gICAgfSlcclxuICAgIC8vIGNvbnN0IHNldHRlZENlbGxXaWR0aCA9ICh0eXBlb2YgdGhpcy5jZWxsV2lkdGggPT09ICdvYmplY3QnKSBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QudmFsdWVzKHRoaXMuY2VsbFdpZHRoKS5yZWR1Y2UoKHByZXYsIG51bSkgPT4gcHJldiArIG51bSkgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDogMFxyXG4gICAgY29uc3QgYWxsQ29sV2lkdGggPSB0aGlzLndpZHRoXHJcbiAgICBjb25zdCB0b3RhbFVuc2V0Q2VsbFdpZHRoID0gYWxsQ29sV2lkdGggLSBzZXR0ZWRDZWxsV2lkdGgvLyAtIDE4XHJcbiAgICBsZXQgY2VsbFdpZHRoID0gMFxyXG4gICAgbGV0IG1pc3NlZFdpZHRoID0gMFxyXG5cclxuICAgIGNlbGxXaWR0aCA9IE1hdGguZmxvb3IodG90YWxVbnNldENlbGxXaWR0aCAvIHRpZXIyQ291bnQpXHJcbiAgICAvLyBjZWxsV2lkdGggPSB0b3RhbFVuc2V0Q2VsbFdpZHRoIC8gdGllcjJDb3VudFxyXG4gICAgbWlzc2VkV2lkdGggPSBhbGxDb2xXaWR0aCAtIChjZWxsV2lkdGggKiB0aWVyMkNvdW50ICsgc2V0dGVkQ2VsbFdpZHRoKVxyXG4gICAgbWlzc2VkV2lkdGggLT0gdG90YWxHcmlkV2lkdGhcclxuICAgIC8vIHRoaXMuZGVmYXVsdENlbGxXaWR0aCA9IGNlbGxXaWR0aFxyXG4gICAgLy8gdGhpcy53aWR0aCAtPSBtaXNzZWRXaWR0aFxyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY2VsbFdpZHRoID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBpZiAoaXNOYU4odGhpcy5jZWxsV2lkdGhbMF0pKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsV2lkdGhbMF0gPSBjZWxsV2lkdGggKyBtaXNzZWRXaWR0aFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2VsbFdpZHRoWzBdICs9IG1pc3NlZFdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2VsbFdpZHRoID0ge31cclxuICAgICAgdGhpcy5jZWxsV2lkdGhbMF0gPSBjZWxsV2lkdGggKyBtaXNzZWRXaWR0aFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2VsbFdpZHRoXHJcbiAgfVxyXG4gIFxyXG4gIGdldENlbGxXaWR0aChpZHgpIHtcclxuICAgIHJldHVybiB0aGlzLmNlbGxXaWR0aFtpZHhdIHx8IHRoaXMuZGVmYXVsdENlbGxXaWR0aFxyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihDYW52YXNUYWJsZS5wcm90b3R5cGUsIERyYXdlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc1RhYmxlIiwiZXhwb3J0IGNvbnN0IERyYXdlciA9IHtcclxuICBkcmF3Q2VsbChpbnB1dCkge1xyXG4gICAgICBjb25zdCBub29wID0gKCkgPT4ge31cclxuICAgICAgY29uc3QgeyBjdHgsIGJnQ29sb3IsIHRDb2xvciwgdGV4dCwgZngsIGZ5LCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXRYID0gMCwgZHJhd0JlZm9yZVRleHQgPSBub29wLCBkcmF3QWZ0ZXJUZXh0ID0gbm9vcCwgc2hvdWxkV3JhcFRleHQgPSBmYWxzZSB9ID0gaW5wdXRcclxuICAgICAgLy9iZ1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gYmdDb2xvclxyXG4gICAgICBjdHguZmlsbFJlY3QoZngsIGZ5LCB3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgICAgZHJhd0JlZm9yZVRleHQodGV4dClcclxuXHJcbiAgICAgIC8vdGV4dFxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdENvbG9yXHJcbiAgICAgIGlmIChzaG91bGRXcmFwVGV4dCkge1xyXG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aClcclxuICAgICAgICAgIGNvbnN0IHVwcGVyID0gdGV4dC5zdWJzdHIoMCwgbGVuZ3RoIC8gMilcclxuICAgICAgICAgIGNvbnN0IGxvd2VyID0gdGV4dC5zdWJzdHIobGVuZ3RoIC8gMiwgbGVuZ3RoKVxyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHVwcGVyLCBmeCArICh3aWR0aCAvIDIpLCBoZWlnaHQgKiAwLjI1ICsgZnkpXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQobG93ZXIsIGZ4ICsgKHdpZHRoIC8gMiksIGhlaWdodCAqIDAuNzUgKyBmeSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBmeCArICh3aWR0aCAvIDIpLCBoZWlnaHQgLyAyICsgZnksIHdpZHRoIC0gMilcclxuICAgICAgfVxyXG5cclxuICAgICAgZHJhd0FmdGVyVGV4dCh0ZXh0KVxyXG4gIH0sXHJcbiAgXHJcbiAgLyoqIOe5quijveacieWtkOWxpOeahOWNgOWhiueahOagvOWtkCAqL1xyXG4gIGRyYXdNdWx0aVN1YkNvbHVtbkNlbGwoe2N0eCwgcm93Q29kZXMsIG9mZnNldFgsIG9mZnNldFksIHNlY3Rpb25JZHgsIGRyYXdDZWxsUGFyYW1zfSkge1xyXG4gICAgICBpZiAodHlwZW9mIHJvd0NvZGVzICE9PSAnb2JqZWN0JykgdGhyb3cgYGVycm9yIGF0ICdkcmF3TXVsdGlTdWJDb2x1bW5DZWxsJy4gRXhwZWN0aW5nIGFuIGFycmF5IG9yIFNlY3Rpb24gb2JqZWN0LCBmb3VuZDogcm93Q29kZXM6ICR7cm93Q29kZXN9YFxyXG4gICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICAgIGxldCB0b3RhbFdpZHRoID0gMFxyXG4gICAgICByb3dDb2Rlcy5mb3JFYWNoKChjb2RlLCBjZWxsSWR4KSA9PiB7XHJcbiAgICAgICAgLy8gY29kZSBjb3VsZCBiZSAndGV4dCcgb3IgWyd0ZXh0JywgJ2NvbG9yJ11cclxuICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmdldENlbGxXaWR0aChzZWN0aW9uSWR4KVxyXG4gICAgICAgIGNvbnN0IGdyaWRPZmZzZXQgPSAoY2VsbElkeCA9PT0gcm93Q29kZXMubGVuZ3RoIC0gMSkgPyAwIDogMVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSAodHlwZW9mIGNvZGUgPT09ICdvYmplY3QnICYmIGNvZGVbMF0pIHx8IGNvZGVcclxuICAgICAgICBjb25zdCB0Q29sb3IgPSAodHlwZW9mIGNvZGUgPT09ICdvYmplY3QnICYmIGNvZGVbMV0pIHx8ICdibGFjaydcclxuICAgICAgICB0aGlzLmRyYXdDZWxsKHtcclxuICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgIGJnQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdENvbG9yLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBmeDogb2Zmc2V0WCxcclxuICAgICAgICAgICAgZnk6IG9mZnNldFksXHJcbiAgICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGggLSBncmlkT2Zmc2V0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHQsXHJcbiAgICAgICAgICAgIC4uLmRyYXdDZWxsUGFyYW1zXHJcbiAgICAgICAgfSlcclxuICAgICAgICBvZmZzZXRYICs9IGNlbGxXaWR0aFxyXG4gICAgICAgIHRvdGFsV2lkdGggKz0gY2VsbFdpZHRoXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB0b3RhbFdpZHRoICsgMVxyXG4gIH0sXHJcbiAgXHJcbiAgLyoqIOe5quijveWWruS4gOWxpOeahOagvOWtkCAqL1xyXG4gIGRyYXdTaW5nbGVDb2x1bW5DZWxsKHtjdHgsIHJvd0NvZGVzLCBvZmZzZXRYLCBvZmZzZXRZLCByb3dJZHgsIHNlY3Rpb25JZHgsIGNlbGxXaWR0aCwgY2VsbEhlaWdodH0pIHtcclxuICAgICAgbGV0IGNlbGwsIHRDb2xvciwgdGV4dFxyXG4gICAgICBpZiAodHlwZW9mIHJvd0NvZGVzICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgdGV4dCA9IHJvd0NvZGVzXHJcbiAgICAgICAgICB0Q29sb3IgPSAnYmxhY2snXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjZWxsID0gKHR5cGVvZiByb3dDb2Rlc1swXSA9PT0gJ29iamVjdCcpID8gcm93Q29kZXNbMF0gOiByb3dDb2Rlc1xyXG4gICAgICAgICAgdENvbG9yID0gY2VsbFsxXSB8fCAnYmxhY2snXHJcbiAgICAgICAgICB0ZXh0ID0gY2VsbFswXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJhd0NlbGwoe1xyXG4gICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICBiZ0NvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICB0Q29sb3IsXHJcbiAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgZng6IG9mZnNldFgsXHJcbiAgICAgICAgICBmeTogb2Zmc2V0WSxcclxuICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGNlbGxXaWR0aCArIDFcclxuICB9LFxyXG4gIC8qKiDnuaroo73nkIPomZ/moLwgKi9cclxuICBkcmF3QmFsbENlbGwoe2N0eCwgcm93Q29kZXMsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeCwgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0fSkge1xyXG5cclxuICAgIGNvbnN0IGRyYXdDaXJjbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeCA9IG9mZnNldFggKyAoKGNlbGxXaWR0aCAtIDEvKmdyaWRPZmZzZXQqLykgLyAyKVxyXG4gICAgICAgIGNvbnN0IHkgPSBjZWxsSGVpZ2h0IC8gMiArIG9mZnNldFlcclxuICAgICAgICBjb25zdCByYWRpdXMgPSAxMFxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxyXG4gICAgICAgIGN0eC5maWxsKClcclxuICAgICAgICBvZmZzZXRYICs9IGNlbGxXaWR0aFxyXG4gICAgfVxyXG4gICAgY29uc3QgZHJhd0NlbGxQYXJhbXMgPSB7XHJcbiAgICAgICAgZHJhd0JlZm9yZVRleHQ6IGRyYXdDaXJjbGUsXHJcbiAgICAgICAgdENvbG9yOiAnd2hpdGUnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kcmF3TXVsdGlTdWJDb2x1bW5DZWxsKHtjdHgsIHJvd0NvZGVzLCBvZmZzZXRYLCBvZmZzZXRZLCByb3dJZHgsIHNlY3Rpb25JZHgsIGRyYXdDZWxsUGFyYW1zfSlcclxuICB9LFxyXG4gIC8qKiDnuaroo73luLbpgbrmvI/mop3nmoTmoLzlrZAgKi9cclxuICBkcmF3TG9zdExpbmVTdGF0dXNDZWxsKHtjdHgsIHJvd0NvZGVzLCBvZmZzZXRYLCBvZmZzZXRZLCByb3dJZHgsIHNlY3Rpb25JZHgsIGNlbGxXaWR0aCwgY2VsbEhlaWdodH0pIHtcclxuICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IHRoaXMuY29tcHV0ZWREYXRhLmxlbmd0aFxyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xvc2VOdW0gPSB0aGlzLnRyZW5kSXNTaG93TG9zZU51bVxyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xvc2VMaW5lID0gdGhpcy50cmVuZElzU2hvd0xvc2VMaW5lXHJcblxyXG4gICAgICAvL2RhdGFcclxuICAgICAgY29uc3QgbG9zdENvbWJvc0FyciA9IHRoaXMuZGF0YS5sb3N0Q29tYm9TdGF0dXNcclxuICAgICAgaWYgKCFsb3N0Q29tYm9zQXJyKSB7XHJcbiAgICAgICAgICB0aHJvdyBcImNhbid0IGZpbmQgbG9zdENvbWJvcyBpbiBkYXRhLlwiXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvd0NvZGVzLmZvckVhY2goKGFyciwgY2VsbElkeCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZ3JpZE9mZnNldCA9IChjZWxsSWR4ID09PSByb3dDb2Rlcy5sZW5ndGggLSAxKSA/IDAgOiAxXHJcbiAgICAgICAgICBjb25zdCBsYXN0TG9zZUNvbWJvID0gbG9zdENvbWJvc0FycltjZWxsSWR4XVxyXG4gICAgICAgICAgY29uc3QgaXNMb3NpbmcgPSByb3dJZHggPj0gKGRhdGFMZW5ndGggLSBsYXN0TG9zZUNvbWJvKVxyXG4gICAgICAgICAgY29uc3QgYmdDb2xvciA9ICh0cmVuZElzU2hvd0xvc2VMaW5lICYmIGlzTG9zaW5nKSA/ICdsaWdodGdyYXknIDogJ3doaXRlJ1xyXG4gICAgICAgICAgY29uc3QgdGV4dCA9IGFyclswXVxyXG4gICAgICAgICAgbGV0IHRDb2xvciA9IGFyclsxXVxyXG4gICAgICAgICAgaWYgKCF0cmVuZElzU2hvd0xvc2VOdW0gJiYgdHlwZW9mIHRleHQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgdENvbG9yID0gYmdDb2xvclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGhpdEJhbGxQYXJhbXMgPSBbXVxyXG5cclxuICAgICAgICAgIHRoaXMuZHJhd0NlbGwoe1xyXG4gICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgdENvbG9yLFxyXG4gICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgZng6IG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgZnk6IG9mZnNldFksXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCAtIGdyaWRPZmZzZXQsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0LFxyXG4gICAgICAgICAgICAgIC4uLmhpdEJhbGxQYXJhbXNcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBvZmZzZXRYICs9IGNlbGxXaWR0aFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gY2VsbFdpZHRoICogcm93Q29kZXMubGVuZ3RoICsgMVxyXG4gIH0sXHJcbiAgLyoqIOe5quijveW4tumBuua8j+aineWPiui1sOWLoue3mueahOagvOWtkCAqL1xyXG4gIGRyYXdMb3N0TGluZUNlbGwoe2N0eCwgcm93Q29kZXMsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeCwgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0fSkge1xyXG4gICAgICBjb25zdCBkYXRhTGVuZ3RoID0gdGhpcy5saXN0Lmxlbmd0aFxyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xvc2VOdW0gPSB0cnVlIC8vdGhpcy50cmVuZElzU2hvd0xvc2VOdW1cclxuICAgICAgY29uc3QgdHJlbmRJc1Nob3dMb3NlTGluZSA9IHRydWUgLy90aGlzLnRyZW5kSXNTaG93TG9zZUxpbmVcclxuXHJcbiAgICAgIC8vZGF0YVxyXG4gICAgICBjb25zdCBsb3N0Q29tYm9zQXJyID0gdGhpcy5kYXRhLmxvc3RDb21ib3NcclxuICAgICAgY29uc3QgbnVtSGVhdEFyciA9IHRoaXMuZGF0YS5udW1IZWF0XHJcbiAgICAgIGNvbnN0IGhpdE51bXNBcnIgPSB0aGlzLmRhdGEuaGl0TnVtc1xyXG4gICAgICBpZiAoIWxvc3RDb21ib3NBcnIgfHwgIW51bUhlYXRBcnIgfHwgIWhpdE51bXNBcnIpIHtcclxuICAgICAgICAgIHRocm93IFwiY2FuJ3QgZmluZCBsb3N0Q29tYm9zIG9yIG51bUhlYXQgb3IgaGl0TnVtc0FyciBpbiBkYXRhLlwiXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvd0NvZGVzLmZvckVhY2goKGNvZGUsIGNlbGxJZHgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGdyaWRPZmZzZXQgPSAoY2VsbElkeCA9PT0gcm93Q29kZXMubGVuZ3RoIC0gMSkgPyAwIDogMVxyXG4gICAgICAgICAgY29uc3QgaXNTdW0gPSBmYWxzZSAvL2NlbGxJZHggPT09IDBcclxuICAgICAgICAgIGNvbnN0IGxhc3RMb3NlQ29tYm8gPSBsb3N0Q29tYm9zQXJyW2NlbGxJZHggLyotIDEqL10gLy8xc3QgY2VsbCBpcyBzdW0sIHNvIG9mZnNldCAxXHJcbiAgICAgICAgICBjb25zdCBpc0xvc2luZyA9IHJvd0lkeCA+PSAoZGF0YUxlbmd0aCAtIGxhc3RMb3NlQ29tYm8pXHJcbiAgICAgICAgICBsZXQgYmdDb2xvciA9ICh0cmVuZElzU2hvd0xvc2VMaW5lICYmICFpc1N1bSAmJiBpc0xvc2luZykgPyAnbGlnaHRncmF5JyA6ICd3aGl0ZSdcclxuICAgICAgICAgIGxldCB0Q29sb3IgPSAnZ3JheSdcclxuICAgICAgICAgIGlmICghdHJlbmRJc1Nob3dMb3NlTnVtICYmIHR5cGVvZiBjb2RlID09PSAnbnVtYmVyJyAmJiAhaXNTdW0pIHtcclxuICAgICAgICAgICAgICB0Q29sb3IgPSBiZ0NvbG9yXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgaGl0QmFsbFBhcmFtcyA9IFtdXHJcblxyXG4gICAgICAgICAgLy8gaWYgKGNvZGUgPT09IDApIHsgLy9oaXRcclxuICAgICAgICAgIGlmIChjZWxsSWR4ID09IHJvd0lkeCAlIDUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBudW0gPSBjZWxsSWR4ICsgMlxyXG4gICAgICAgICAgICAgIGNvbnN0IG51bUhlYXQgPSBudW1IZWF0QXJyW251bV1cclxuICAgICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbJ0RlZXBTa3lCbHVlJywgJ29yYW5nZScsICdyZWQnXVxyXG4gICAgICAgICAgICAgIGNvbnN0IGJhbGxDb2xvciA9IGNvbG9yc1tudW1IZWF0XVxyXG4gICAgICAgICAgICAgIGNvbnN0IHggPSBvZmZzZXRYICsgKChjZWxsV2lkdGggLSAxLypncmlkT2Zmc2V0Ki8pIC8gMilcclxuICAgICAgICAgICAgICBjb25zdCB5ID0gY2VsbEhlaWdodCAvIDIgKyBvZmZzZXRZXHJcbiAgICAgICAgICAgICAgaGl0TnVtc0Fycltyb3dJZHhdID0geyBiYWxsQ29sb3IsIHgsIHksIG51bSwgY3R4IH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmRyYXdDZWxsKHtcclxuICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yLFxyXG4gICAgICAgICAgICAgIHRDb2xvcixcclxuICAgICAgICAgICAgICB0ZXh0OiBjb2RlLFxyXG4gICAgICAgICAgICAgIGZ4OiBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgIGZ5OiBvZmZzZXRZLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGggLSBncmlkT2Zmc2V0LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogY2VsbEhlaWdodCxcclxuICAgICAgICAgICAgICAuLi5oaXRCYWxsUGFyYW1zXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgb2Zmc2V0WCArPSBjZWxsV2lkdGhcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGNlbGxXaWR0aCAqIHJvd0NvZGVzLmxlbmd0aCArIDFcclxuICB9LFxyXG4gIC8qKue5quijveWFreWQiOW9qeeQg+iZn+agvCAqL1xyXG4gIGRyYXdNYXJrNk51bShjdHgsIHJvd0NvZGVzLCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcbiAgICAgIHJvd0NvZGVzLmZvckVhY2goKHJvdywgY2VsbElkeCkgPT4ge1xyXG4gICAgICAgICAgLy8gY29kZSBjb3VsZCBiZSAndGV4dCcgb3IgWyd0ZXh0JywgJ2NvbG9yJ11cclxuICAgICAgICAgIGNvbnN0IGdyaWRPZmZzZXQgPSAoY2VsbElkeCA9PT0gcm93Q29kZXMubGVuZ3RoIC0gMSkgPyAwIDogMVxyXG4gICAgICAgICAgY29uc3QgdGV4dCA9IHJvdy5jb2RlXHJcbiAgICAgICAgICBjb25zdCBiYWxsQ29sb3IgPSByb3cuY29sb3JcclxuICAgICAgICAgIGNvbnN0IGFuaW1hbCA9ICh0aGlzLmxvdHRlcnlOYW1lID09PSAnTUFSSzZfU0lOJyk/IHJvdy5hbmltYWwgOiB0aGlzLiR0KHJvdy5hbmltYWwpXHJcbiAgICAgICAgICBjb25zdCBmeCA9IG9mZnNldFhcclxuICAgICAgICAgIGNvbnN0IGZ5ID0gb2Zmc2V0WVxyXG4gICAgICAgICAgY29uc3Qgd2lkdGggPSBjZWxsV2lkdGggLSBncmlkT2Zmc2V0XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBjZWxsSGVpZ2h0XHJcblxyXG4gICAgICAgICAgLy9iZ1xyXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcclxuICAgICAgICAgIGN0eC5maWxsUmVjdChmeCwgZnksIHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgICAgICAgLy9iYWxsXHJcbiAgICAgICAgICBjb25zdCByYWRpdXMgPSA5XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYmFsbENvbG9yXHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgIGN0eC5hcmMoZnggKyAod2lkdGggLyAzKSwgZnkgKyAoaGVpZ2h0IC8gMiksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpXHJcbiAgICAgICAgICBjdHguZmlsbCgpXHJcbiAgICAgICAgICAvL2JhbGxUZXh0XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIGZ4ICsgKHdpZHRoIC8gMyksIGhlaWdodCAvIDIgKyBmeSlcclxuXHJcbiAgICAgICAgICAvL2FuaW1hbFxyXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjaydcclxuICAgICAgICAgIC8vIGN0eC5mb250ID0gY3R4LmZvbnQucmVwbGFjZSgvXFxkK3B4LywgXCIxNnB4XCIpO1xyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGFuaW1hbCwgZnggKyAod2lkdGggLyAxLjUpLCBoZWlnaHQgLyAyICsgZnkpXHJcblxyXG4gICAgICAgICAgb2Zmc2V0WCArPSBjZWxsV2lkdGhcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGNlbGxXaWR0aCAqIHJvd0NvZGVzLmxlbmd0aCArIDFcclxuICB9LFxyXG4gIC8qKiDnuaroo73otbDli6Lnt5ogKi9cclxuICBkcmF3VHJlbmRMaW5lKCkge1xyXG4gICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICAgIGNvbnN0IGhpdE51bXMgPSB0aGlzLmRhdGEuaGl0TnVtc1xyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xpbmUgPSB0cnVlIC8vdGhpcy50cmVuZElzU2hvd0xpbmVcclxuICAgICAgY29uc3QgdHJlbmRJc1Nob3dCYWxsc1dhcm4gPSB0cnVlIC8vdGhpcy50cmVuZElzU2hvd0JhbGxzV2FyblxyXG4gICAgICBpZiAoIWhpdE51bXMpIHtcclxuICAgICAgICAgIHRocm93ICdjYW5cXCd0IGZpbmQgaGl0TnVtcyBpbiBkYXRhLidcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkcmF3TGluZSA9IChmcm9tLCB0bykgPT4ge1xyXG4gICAgICAgICAgaWYgKCFmcm9tIHx8ICF0bykgcmV0dXJuXHJcbiAgICAgICAgICAvL2RyYXcgbGluZXNcclxuICAgICAgICAgIGNvbnN0IGN0eCA9IGZyb20uY3R4XHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnXHJcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gMlxyXG4gICAgICAgICAgY3R4Lm1vdmVUbyhmcm9tLngsIGZyb20ueSlcclxuICAgICAgICAgIGlmICh0by55IDwgZnJvbS55KSB7XHJcbiAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0by54LCB0by55ICsgdGhpcy5jYW52YXNIZWlnaHQpXHJcblxyXG4gICAgICAgICAgICAgIHRvLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgIHRvLmN0eC5zdHJva2VTdHlsZSA9ICdyZWQnXHJcbiAgICAgICAgICAgICAgdG8uY3R4LmxpbmVXaWR0aCA9IDJcclxuICAgICAgICAgICAgICB0by5jdHgubW92ZVRvKGZyb20ueCwgZnJvbS55IC0gdGhpcy5jYW52YXNIZWlnaHQpXHJcbiAgICAgICAgICAgICAgdG8uY3R4LmxpbmVUbyh0by54LCB0by55KVxyXG4gICAgICAgICAgICAgIHRvLmN0eC5zdHJva2UoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjdHgubGluZVRvKHRvLngsIHRvLnkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjdHguc3Ryb2tlKClcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkcmF3QmFsbCA9IChoaXQpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGhpdCAhPT0gJ29iamVjdCcpIHJldHVyblxyXG4gICAgICAgICAgLy9kcmF3IGJhbGxcclxuICAgICAgICAgIGNvbnN0IGN0eCA9IGhpdC5jdHhcclxuICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDEwXHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gKHRyZW5kSXNTaG93QmFsbHNXYXJuKSA/IGhpdC5iYWxsQ29sb3IgOiAnZ3JlZW4nXHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgIGN0eC5hcmMoaGl0LngsIGhpdC55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxyXG4gICAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgICAgICAgLy9kcmF3IHRleHRcclxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQoaGl0Lm51bSwgaGl0LngsIGhpdC55KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHJlbmRJc1Nob3dMaW5lKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gaGl0TnVtcykge1xyXG4gICAgICAgICAgICAgIGlmICghaGl0TnVtcy5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWVcclxuICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IGhpdE51bXNbaSAtIDFdXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXROdW1zW2ldXHJcbiAgICAgICAgICAgICAgICAgIGRyYXdMaW5lKHByZXYsIGN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAoY29uc3QgY3VycmVudCBvZiBoaXROdW1zKSB7XHJcbiAgICAgICAgICBkcmF3QmFsbChjdXJyZW50KVxyXG4gICAgICB9XHJcbiAgfSxcclxufSIsIi8qKiDkuIDljYDloYrnmoTkuIDooYzos4fmlpkgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbjxUPiB7XHJcbiAgICBkcmF3RnVuYzogU3RyaW5nXHJcbiAgICBjb250ZW50OiBBcnJheTxTdHJpbmd8U3RyaW5nW10+XHJcbiAgICAvKiog5LiA5Y2A5aGK55qE5LiA6KGM6LOH5paZICovXHJcbiAgICBjb25zdHJ1Y3RvcihhcnI/OiBBcnJheTxTdHJpbmd8U3RyaW5nW10+KSB7XHJcbiAgICAgICAgLyoqIChzdHJpbmcpIOiqv+eUqOeJueauiue5quijvWZ1bmN0aW9uICovXHJcbiAgICAgICAgdGhpcy5kcmF3RnVuYyA9IG51bGxcclxuICAgICAgICAvKiogKGFycmF5KSDos4fmlpnlhaflrrkgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhcnIgfHwgW11cclxuICAgIH1cclxuICAgIGdldCBsZW5ndGgoKTogTnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDlhaXos4fmlplcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGV4dFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb2xvclxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAgIGFkZCh0ZXh0OiBTdHJpbmcsIGNvbG9yPzogU3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgcmVzOiBTdHJpbmd8U3RyaW5nW10gPSAoY29sb3IpID8gW3RleHQsIGNvbG9yXSA6IHRleHRcclxuICAgICAgICB0aGlzLmNvbnRlbnQucHVzaChyZXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIHNldERyYXdGdW5jKGZ1bmM6IFN0cmluZykge1xyXG4gICAgICB0aGlzLmRyYXdGdW5jID0gZnVuY1xyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3lrpros4fmlplcclxuICAgICAqIEBwYXJhbSAge2FycmF5fSBhcnJheSAtIGFycmF5IG9mICd0ZXh0JyBvciBbJ3RleHQnLCAnY29sb3InXVxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAgIHNldENvbnRlbnQoYXJyYXk6IEFycmF5PFN0cmluZ3xTdHJpbmdbXT4pIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhcnJheVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICBjb25jYXQoYXJyYXk6IEFycmF5PFN0cmluZ3xTdHJpbmdbXT4pIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuY29uY2F0KGFycmF5KVxyXG4gICAgfVxyXG4gICAgZm9yRWFjaChmbjogKHZhbHVlOiBTdHJpbmd8U3RyaW5nW10sIGluZGV4OiBudW1iZXIsIGFycmF5OiAoU3RyaW5nfFN0cmluZ1tdKVtdKSA9PiB2b2lkKSB7XHJcbiAgICAgIHRoaXMuY29udGVudC5mb3JFYWNoKGZuKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==