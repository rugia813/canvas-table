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

/* harmony import */ var _libs_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/section */ "./src/libs/section.js");
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
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section */ "./src/libs/section.js");


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
    console.log(settedCellWidth, allColWidth, totalUnsetCellWidth)
    let cellWidth = 0
    let missedWidth = 0

    cellWidth = Math.floor(totalUnsetCellWidth / tier2Count)
    // cellWidth = totalUnsetCellWidth / tier2Count
    missedWidth = allColWidth - (cellWidth * tier2Count + settedCellWidth)
    missedWidth -= totalGridWidth
    // this.defaultCellWidth = cellWidth
    console.log('celw', cellWidth, 'miss', missedWidth, 'tier2Count', tier2Count)
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
      const func = () => {}
      const { ctx, bgColor, tColor, text, fx, fy, width, height, offsetX = 0, drawBeforeText = func, drawAfterText = func, shouldWrapText = false } = input
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
  drawSingleColumnCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx}) {
      const cellWidth = this.getCellWidth(sectionIdx)
      const cellHeight = this.cellHeight
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
  drawBallCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx}) {
    const cellWidth = this.getCellWidth(sectionIdx)
    const cellHeight = this.cellHeight

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
  drawLostLineStatusCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx}) {
      const cellWidth = this.cellWidths.cellWidth
      const cellHeight = this.topMargin
      const dataLength = this.computedData.length
      const trendIsShowLoseNum = this.trendIsShowLoseNum
      const trendIsShowLoseLine = this.trendIsShowLoseLine

      //extradata
      const lostCombosArr = this.extraData.lostComboStatus
      if (!lostCombosArr) {
          throw "can't find lostCombos in extraData."
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
  drawLostLineCell({ctx, rowCodes, offsetX, offsetY, rowIdx, sectionIdx}) {
      const cellWidth = this.getCellWidth(sectionIdx)
      const cellHeight = this.cellHeight
      const dataLength = this.list.length
      const trendIsShowLoseNum = true //this.trendIsShowLoseNum
      const trendIsShowLoseLine = true //this.trendIsShowLoseLine

      //extradata
      const lostCombosArr = this.extraData.lostCombos
      const numHeatArr = [2,0,1,0,1,0,2,0,2] //this.extraData.numHeat
      const hitNumsArr = this.extraData.hitNums
      if (!lostCombosArr || !numHeatArr || !hitNumsArr) {
          throw "can't find lostCombos or numHeat or hitNumsArr in extraData."
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
          if (cellIdx == rowIdx%5) {
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
      const cellWidth = this.cellWidths.cellWidth
      const cellHeight = this.topMargin
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
      const hitNums = this.extraData.hitNums
      const trendIsShowLine = true //this.trendIsShowLine
      const trendIsShowBallsWarn = true //this.trendIsShowBallsWarn
      if (!hitNums) {
          throw 'can\'t find hitNums in extraData.'
      }
      const drawLine = (from, to) => {
        console.log('ft', from , to)
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
        console.log('hi', hit)
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
        console.log('hitNums', hitNums)
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

/***/ "./src/libs/section.js":
/*!*****************************!*\
  !*** ./src/libs/section.js ***!
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlclRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NhbnZhc1RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9zZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFHO0FBQ0g7QUFDQSxvQkFBb0Isb0RBQW9EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUN0U0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBoZWFkZXJEYXRhID0gW1xyXG4gICdJc3N1ZScsXHJcbiAgW1xyXG4gICAgXCLlvIDlpZblj7fnoIFcIixcclxuICAgIFtcclxuICAgICAgXCLkuIfkvY1cIixcclxuICAgICAgXCLljYPkvY1cIixcclxuICAgICAgXCLnmb7kvY1cIixcclxuICAgICAgXCLljYHkvY1cIixcclxuICAgICAgXCLkuKrkvY1cIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLmgLvlkoxcIixcclxuICAgIFtcclxuICAgICAgXCLlkozlgLxcIixcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLkuIfkvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLljYPkvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLnmb7kvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLljYHkvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCLkuKrkvY1cIixcclxuICAgIFtcclxuICAgICAgXCLlpKflsI9cIixcclxuICAgICAgXCLljZXlj4xcIixcclxuICAgICAgXCLotKjlkIhcIlxyXG4gICAgXVxyXG4gIF1cclxuXSIsImltcG9ydCBDYW52YXNUYWJsZSBmcm9tIFwiLi9saWJzL2NhbnZhc1RhYmxlXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL2xpYnMvc2VjdGlvblwiO1xyXG5pbXBvcnQgeyBoZWFkZXJEYXRhIH0gZnJvbSBcIi4vaGVhZGVyVGV4dFwiO1xyXG5cclxuZXhwb3J0IHsgQ2FudmFzVGFibGUsIFNlY3Rpb24gfVxyXG5cclxuLy8gbW9jayBhcGlcclxuY29uc3QgZmlsbEFycmF5ID0gKHRpbWVzLCBmbikgPT4gWy4uLkFycmF5KHRpbWVzKS5rZXlzKCldLm1hcCgoKSA9PiBmbigpKVxyXG5jb25zdCBnZXQxdG85ID0gKCkgPT4gZmlsbEFycmF5KDUsICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkgLy8gWycxJywgJzYnLCAnNycsICc3JywgJzgnXVxyXG5jb25zdCBzb3VyY2UgPSBmaWxsQXJyYXkoOTAsICgpID0+IGdldDF0bzkoKSlcclxuXHJcbi8vIGRhdGEgY2FsY3VsYXRpb25cclxubGV0IGNvbnRlbnREYXRhID0gc291cmNlLm1hcCgocm93LCBpZHgpID0+IHtcclxuICBjb25zdCBhbmFseXplU2luZ2xlID0gKG51bSkgPT4gbmV3IFNlY3Rpb24oKS5hZGQoJ+WkpycsICdyZWQnKS5hZGQoJ+WWricsICdibHVlJykuYWRkKCfos6onLCAncmVkJylcclxuICBjb25zdCBzdW0gPSByb3cucmVkdWNlKChzdW0sIG51bSkgPT4gc3VtICsgbnVtKVxyXG4gIHJldHVybiBbXHJcbiAgICBuZXcgU2VjdGlvbigpLmFkZChpZHgsIG51bGwpLFxyXG4gICAgbmV3IFNlY3Rpb24oKS5zZXREcmF3RnVuYygnZHJhd0xvc3RMaW5lQ2VsbCcpLnNldENvbnRlbnQocm93KSxcclxuICAgIGFuYWx5emVTaW5nbGUoc3VtKSxcclxuICAgIC4uLnJvdy5tYXAoYW5hbHl6ZVNpbmdsZSlcclxuICBdXHJcbn0pXHJcblxyXG4vLyBkcmF3XHJcbmNvbnN0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVRhYmxlJylcclxuXHJcbmNvbnN0IGNhbnZhc1RhYmxlID0gbmV3IENhbnZhc1RhYmxlKHtcclxuICBjZWxsV2lkdGg6IHsgMDogMTIwLCAxOiA4MCB9LFxyXG4gIGNlbGxIZWlnaHQ6IDMyLFxyXG4gIGNlbGxzUGVyQ2FudmFzOiAyMDAsXHJcbiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC0gMTgsXHJcbiAgZGVmYXVsdEZvbnRTaXplOiA4LFxyXG4gIGhlYWRlclRleHQ6IGhlYWRlckRhdGEsXHJcbiAgbGlzdDogWy4uLmNvbnRlbnREYXRhXSxcclxuICAvLyBsaXN0OiBbLi4uQXJyYXkoNTApLmtleXMoKV0ucmVkdWNlKChhcnIsIGUpID0+IGFyci5jb25jYXQobW9ja0NvbnRlbnRUZXh0KSwgW10pLFxyXG59KVxyXG5cclxuY29uc3QgY2FudmFzZXMgPSBjYW52YXNUYWJsZS5kcmF3KClcclxuY2FudmFzZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gIGRvbS5hcHBlbmRDaGlsZChlKVxyXG59KSIsImltcG9ydCB7IERyYXdlciB9IGZyb20gJy4vZHJhd2VyJ1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nXHJcbmNsYXNzIENhbnZhc1RhYmxlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgdGhpcy5jZWxsV2lkdGggPSBwcm9wcy5jZWxsV2lkdGggfHwgNjRcclxuICAgIHRoaXMuY2VsbEhlaWdodCA9ICtwcm9wcy5jZWxsSGVpZ2h0IHx8IDMyXHJcbiAgICB0aGlzLmNlbGxzUGVyQ2FudmFzID0gK3Byb3BzLmNlbGxzUGVyQ2FudmFzIHx8IDIwMFxyXG4gICAgdGhpcy53aWR0aCA9ICtwcm9wcy53aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgdGhpcy5kZWZhdWx0Rm9udFNpemUgPSBwcm9wcy5kZWZhdWx0Rm9udFNpemUgfHwgMTJcclxuICAgIHRoaXMuZ3JpZENvbG9yID0gcHJvcHMuZ3JpZENvbG9yIHx8ICdncmF5J1xyXG4gICAgdGhpcy5iZ0NvbG9yID0gcHJvcHMuYmdDb2xvciB8fCAnd2hpdGUnXHJcbiAgICB0aGlzLmNvbG9yID0gcHJvcHMuY29sb3IgfHwgJ2JsYWNrJ1xyXG4gICAgXHJcbiAgICB0aGlzLmhlYWRlclRleHQgPSBwcm9wcy5oZWFkZXJUZXh0XHJcbiAgICB0aGlzLmxpc3QgPSBwcm9wcy5saXN0XHJcbiAgICBcclxuICAgIHRoaXMuZXh0cmFEYXRhID0ge1xyXG4gICAgICBsb3N0Q29tYm9zOiBbNSwgMTUsIDIsIDgsIDFdLFxyXG4gICAgICBudW1IZWF0OiBbMywgMCwgMiwgMywgMl0sXHJcbiAgICAgIGhpdE51bXM6IFtdLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmRlZmF1bHRDZWxsV2lkdGggPSB0aGlzLmNhbGNDZWxsV2lkdGhzKClcclxuICAgIHRoaXMuY2FudmFzQXJyYXkgPSB0aGlzLmdldENhbnZhc0FycmF5KClcclxuICB9XHJcbiAgZHJhdygpIHtcclxuICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID09PSAwKSB0aHJvdyAnbm8gbGlzdCBkYXRhIGZvdW5kJ1xyXG4gICAgY29uc3QgY3R4QXJyID0gW11cclxuICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxIZWlnaHQgKyAxXHJcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLmNlbGxzUGVyQ2FudmFzICogdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICBjb25zdCBjZWxsc1BlckNhbnZhcyA9IHRoaXMuY2VsbHNQZXJDYW52YXNcclxuICAgIGNvbnN0IGxvd2VyVGl0bGVTaG91bGRXcmFwID0gZmFsc2UvL3RoaXMuY29uZmlnLmxvd2VyVGl0bGVTaG91bGRXcmFwXHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcclxuICAgIHRoaXMuY2FudmFzQXJyYXkuZm9yRWFjaCgoY2FudmFzLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBjYW52YXNIZWlnaHQpXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggKyAxXHJcblxyXG4gICAgICAgIGNvbnN0IGlzSGVhZGVyID0gKGkgPT09IDApXHJcbiAgICAgICAgaWYgKGlzSGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVyID0gKGxvd2VyVGl0bGVTaG91bGRXcmFwKSA/IDEuNSA6IDFcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IChjZWxsSGVpZ2h0ICsgMykgKiBtb2RpZmllci8vIC0gMVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmdldENhbnZhc0hlaWdodChpKVxyXG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJ1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xyXG4gICAgICAgIGN0eC5mb250ID0gYCR7dGhpcy5kZWZhdWx0Rm9udFNpemV9cHQgQXJpYWxgXHJcbiAgICAgICAgLy9ncmlkXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JpZENvbG9yXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCArIDEpXHJcblxyXG4gICAgICAgIGN0eEFyci5wdXNoKGN0eClcclxuICAgIH0pXHJcbiAgICB0aGlzLmRyYXdIZWFkZXIoY3R4QXJyWzBdLCBsb3dlclRpdGxlU2hvdWxkV3JhcClcclxuICAgIHRoaXMuZHJhd0NvbnRlbnQoe2N0eEFycn0pXHJcbiAgICB0aGlzLmRyYXdUcmVuZExpbmUoe2N0eEFycn0pXHJcbiAgICByZXR1cm4gdGhpcy5jYW52YXNBcnJheVxyXG4gIH1cclxuICBcclxuICBkcmF3SGVhZGVyKGN0eCwgbG93ZXJUaXRsZVNob3VsZFdyYXApIHtcclxuICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxIZWlnaHRcclxuICAgIGNvbnN0IGRyYXdDZWxsID0gdGhpcy5kcmF3Q2VsbFxyXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IHRoaXMuaGVhZGVyVGV4dFxyXG4gICAgY29uc3QgaGVhZGVyRGVmYXVsdCA9IHtcclxuICAgICAgICBiZ0NvbG9yOiAnIzQwNDI1MScsXHJcbiAgICAgICAgdENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgY3R4XHJcbiAgICB9XHJcbiAgICBsZXQgb2Zmc2V0WCA9IDFcclxuICAgIGNvbnN0IGhlaWdodE1vZGlmaWVyID0gKGxvd2VyVGl0bGVTaG91bGRXcmFwKSA/IDEuNSA6IDFcclxuICAgIGhlYWRlclRleHQuZm9yRWFjaCgodGllcjEsIGkxKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aWVyMSA9PT0gJ3N0cmluZycpIHsgLy9zaW5nbGUgbGF5ZXJcclxuICAgICAgICAgICAgY29uc3QgY2VsbFdpZHRoID0gdGhpcy5nZXRDZWxsV2lkdGgoaTEpXHJcbiAgICAgICAgICAgIGRyYXdDZWxsKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRpZXIxLFxyXG4gICAgICAgICAgICAgICAgZng6IG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICBmeTogMSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHQgKyAzLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgIC4uLmhlYWRlckRlZmF1bHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgb2Zmc2V0WCArPSBjZWxsV2lkdGhcclxuICAgICAgICB9IGVsc2UgeyAvL2RvdWJsZSBsYXllclxyXG4gICAgICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmdldENlbGxXaWR0aChpMSlcclxuICAgICAgICAgICAgY29uc3QgdXBwZXJUaXRsZSA9IHRpZXIxWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyVGl0bGVzID0gdGllcjFbMV1cclxuICAgICAgICAgICAgY29uc3QgdXBwZXJUaXRsZVdpZHRoID0gbG93ZXJUaXRsZXMubGVuZ3RoICogY2VsbFdpZHRoXHJcbiAgICAgICAgICAgIGRyYXdDZWxsKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHVwcGVyVGl0bGUsXHJcbiAgICAgICAgICAgICAgICBmeDogb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgIGZ5OiAxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHVwcGVyVGl0bGVXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2VsbEhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgLi4uaGVhZGVyRGVmYXVsdFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbG93ZXJUaXRsZXMuZm9yRWFjaCgodGl0bGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRPZmZzZXQgPSAoaSA9PT0gbG93ZXJUaXRsZXMubGVuZ3RoIC0gMSkgPyAwIDogMVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0TW9kaWZpZXIgPSAobG93ZXJUaXRsZVNob3VsZFdyYXApID8gMSA6IDAuNVxyXG4gICAgICAgICAgICAgICAgZHJhd0NlbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ4OiBvZmZzZXRYICsgKGNlbGxXaWR0aCAqIGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ5OiBjZWxsSGVpZ2h0IC8gMiArIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCAtIGdyaWRPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0ICogaGVpZ2h0TW9kaWZpZXIgKyAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IG9mZnNldFggKyAoY2VsbFdpZHRoICogaSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkV3JhcFRleHQ6IGxvd2VyVGl0bGVTaG91bGRXcmFwICYmICh0aXRsZS5sZW5ndGggPiAyKSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5oZWFkZXJEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBvZmZzZXRYICs9IHVwcGVyVGl0bGVXaWR0aFxyXG4gICAgICAgIH1cclxuICAgICAgICBvZmZzZXRYICs9IDEgLy9ncmlkXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICBkcmF3Q29udGVudCh7XHJcbiAgICBjdHhBcnIsIFxyXG4gICAgZHJhd0JlZm9yZUVhY2hSb3cgPSAoKT0+e30sIFxyXG4gICAgZHJhd0JlZm9yZUVhY2hTZWN0aW9uID0gKCk9Pnt9LCBcclxuICAgIGRyYXdBZnRlckVhY2hTZWN0aW9uID0gKCk9Pnt9XHJcbiAgfSkge1xyXG4gICAgY29uc3QgY2VsbEhlaWdodCA9IHRoaXMuY2VsbEhlaWdodFxyXG4gICAgbGV0IG9mZnNldFggPSAxXHJcbiAgICBsZXQgb2Zmc2V0WSA9IDFcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxpc3RcclxuICAgIGxldCBjYW52YXNJZHggPSAxXHJcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLmNlbGxzUGVyQ2FudmFzICogdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICBkYXRhLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XHJcbiAgICAgIC8vcmVzZXQgeCB0byBsZWZ0XHJcbiAgICAgIG9mZnNldFggPSAxXHJcblxyXG4gICAgICBkcmF3QmVmb3JlRWFjaFJvdyh7Y3R4QXJyLCByb3csIHJvd0lkeCwgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WX0pXHJcbiAgICAgIFxyXG4gICAgICAvL2RyYXcgZWFjaCBzZWN0aW9uXHJcbiAgICAgIHJvdy5mb3JFYWNoKChzZWN0aW9uLCBzZWN0aW9uSWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgICAgICAgIGRyYXdCZWZvcmVFYWNoU2VjdGlvbih7Y3R4QXJyLCBzZWN0aW9uLCBzZWN0aW9uSWR4LCB4OiBvZmZzZXRYLCB5OiBvZmZzZXRZfSlcclxuICAgICAgICAgIGNvbnN0IGlzU2VjdGlvbkNscyA9IChzZWN0aW9uIGluc3RhbmNlb2YgU2VjdGlvbilcclxuICAgICAgICAgIGNvbnN0IGhhc0N1c3RvbVN0eWxlID0gc2VjdGlvbi5kcmF3RnVuY1xyXG4gICAgICAgICAgY29uc3QgaXNNdWx0aUNvbHVtbiA9IChpc1NlY3Rpb25DbHMgJiYgc2VjdGlvbi5sZW5ndGggPj0gMikgfHwgdHlwZW9mIHNlY3Rpb24gPT09ICdvYmplY3QnXHJcbiAgICAgICAgICAvLyBjb25zdCBjb250ZW50ID0gKGlzU2VjdGlvbkNscykgPyBzZWN0aW9uLmNvbnRlbnQgOiBzZWN0aW9uLmNvbnRlbnRcclxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAodHlwZW9mIHNlY3Rpb24gPT09ICdvYmplY3QnKSA/IHNlY3Rpb24uY29udGVudCA6IHNlY3Rpb25cclxuICAgICAgICAgIGxldCBkcmF3RnVuY1xyXG4gICAgICAgICAgaWYgKGhhc0N1c3RvbVN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgZHJhd0Z1bmMgPSBzZWN0aW9uLmRyYXdGdW5jXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRyYXdGdW5jID0gKGlzTXVsdGlDb2x1bW4pID8gJ2RyYXdNdWx0aVN1YkNvbHVtbkNlbGwnIDogJ2RyYXdTaW5nbGVDb2x1bW5DZWxsJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAvL3VzZSBuZXh0IGNhbnZhcyB3aGVuIGZ1bGxcclxuICAgICAgICAgICAgICBpZiAob2Zmc2V0WSA+PSBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgY2FudmFzSWR4KytcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0WSA9IDFcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb2Zmc2V0WCArPSB0aGlzW2RyYXdGdW5jXSh7Y3R4OiBjdHhBcnJbY2FudmFzSWR4XSwgcm93Q29kZXM6IGNvbnRlbnQsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeH0pXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXJyb3Igb2NjdXJlZCBhdCBcIiR7dGhpcy5oZWFkZXJUZXh0W3NlY3Rpb25JZHggLSAxXX1cIixcXG4gZHJhdyBmdW5jdGlvbjogXCIke2RyYXdGdW5jfVwiXFxuYCwgZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRyYXdBZnRlckVhY2hTZWN0aW9uKHtjdHhBcnIsIHNlY3Rpb24sIHNlY3Rpb25JZHgsIHg6IG9mZnNldFgsIHk6IG9mZnNldFl9KVxyXG4gICAgICB9KVxyXG4gICAgICBvZmZzZXRZICs9IGNlbGxIZWlnaHQgKyAxXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICBnZXRDYW52YXNBcnJheSgpIHtcclxuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuY2VsbEhlaWdodCAqIHRoaXMuY2VsbHNQZXJDYW52YXNcclxuICAgIGNvbnN0IGxpc3RDb3VudCA9IHRoaXMubGlzdC5sZW5ndGhcclxuICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gbGlzdENvdW50ICogdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICBjb25zdCBudW0gPSBNYXRoLmNlaWwodG90YWxIZWlnaHQgLyBjYW52YXNIZWlnaHQpICsgMVxyXG4gICAgbGV0IGFyciA9IFsuLi5BcnJheShudW0pLmtleXMoKV1cclxuICAgIGFyciA9IGFyci5tYXAoZSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSlcclxuICAgIHJldHVybiBhcnJcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q2FudmFzSGVpZ2h0KGlkeCkge1xyXG4gICAgY29uc3QgbGlzdENvdW50ID0gdGhpcy5saXN0Lmxlbmd0aFxyXG4gICAgY29uc3QgY2FudmFzQ291bnQgPSB0aGlzLmNhbnZhc0FycmF5Lmxlbmd0aFxyXG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0ICogdGhpcy5jZWxsc1BlckNhbnZhc1xyXG4gICAgY29uc3QgaXNMYXN0ID0gaWR4ID09PSBjYW52YXNDb3VudCAtIDFcclxuICAgIGlmIChpc0xhc3QpIHtcclxuICAgICAgY29uc3QgcmVtYWluQ291bnQgPSBsaXN0Q291bnQgLSAoKGNhbnZhc0NvdW50IC0gMi8qaGVhZGVyICYgbGFzdCovKSAqIHRoaXMuY2VsbHNQZXJDYW52YXMpXHJcbiAgICAgIGNvbnN0IHJlbWFpbkhlaWdodCA9ICh0aGlzLmNlbGxIZWlnaHQgKyAxLypncmlkKi8pICogcmVtYWluQ291bnRcclxuICAgICAgcmV0dXJuIHJlbWFpbkhlaWdodCArIDFcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjYW52YXNIZWlnaHQgKyAxXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNhbGNDZWxsV2lkdGhzKGhlYWRlclRleHQgPSB0aGlzLmhlYWRlclRleHQpIHtcclxuICAgIGxldCB0aWVyMkNvdW50ID0gMFxyXG4gICAgbGV0IHRvdGFsR3JpZFdpZHRoID0gMFxyXG4gICAgbGV0IHNldHRlZENlbGxXaWR0aCA9IDBcclxuICAgIGhlYWRlclRleHQuZm9yRWFjaCgodGllcjEsIGlkeCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXR0ZWRXaWR0aCA9IHRoaXMuY2VsbFdpZHRoW2lkeF1cclxuICAgICAgaWYgKHR5cGVvZiB0aWVyMSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAoc2V0dGVkV2lkdGgpIHtcclxuICAgICAgICAgIHNldHRlZENlbGxXaWR0aCArPSBzZXR0ZWRXaWR0aFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aWVyMkNvdW50KytcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGllcjFbMV0uZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2V0dGVkV2lkdGgpIHtcclxuICAgICAgICAgICAgc2V0dGVkQ2VsbFdpZHRoICs9IHNldHRlZFdpZHRoXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aWVyMkNvdW50KytcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRvdGFsR3JpZFdpZHRoKytcclxuICAgIH0pXHJcbiAgICAvLyBjb25zdCBzZXR0ZWRDZWxsV2lkdGggPSAodHlwZW9mIHRoaXMuY2VsbFdpZHRoID09PSAnb2JqZWN0JykgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgID8gT2JqZWN0LnZhbHVlcyh0aGlzLmNlbGxXaWR0aCkucmVkdWNlKChwcmV2LCBudW0pID0+IHByZXYgKyBudW0pIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA6IDBcclxuICAgIGNvbnN0IGFsbENvbFdpZHRoID0gdGhpcy53aWR0aFxyXG4gICAgY29uc3QgdG90YWxVbnNldENlbGxXaWR0aCA9IGFsbENvbFdpZHRoIC0gc2V0dGVkQ2VsbFdpZHRoLy8gLSAxOFxyXG4gICAgY29uc29sZS5sb2coc2V0dGVkQ2VsbFdpZHRoLCBhbGxDb2xXaWR0aCwgdG90YWxVbnNldENlbGxXaWR0aClcclxuICAgIGxldCBjZWxsV2lkdGggPSAwXHJcbiAgICBsZXQgbWlzc2VkV2lkdGggPSAwXHJcblxyXG4gICAgY2VsbFdpZHRoID0gTWF0aC5mbG9vcih0b3RhbFVuc2V0Q2VsbFdpZHRoIC8gdGllcjJDb3VudClcclxuICAgIC8vIGNlbGxXaWR0aCA9IHRvdGFsVW5zZXRDZWxsV2lkdGggLyB0aWVyMkNvdW50XHJcbiAgICBtaXNzZWRXaWR0aCA9IGFsbENvbFdpZHRoIC0gKGNlbGxXaWR0aCAqIHRpZXIyQ291bnQgKyBzZXR0ZWRDZWxsV2lkdGgpXHJcbiAgICBtaXNzZWRXaWR0aCAtPSB0b3RhbEdyaWRXaWR0aFxyXG4gICAgLy8gdGhpcy5kZWZhdWx0Q2VsbFdpZHRoID0gY2VsbFdpZHRoXHJcbiAgICBjb25zb2xlLmxvZygnY2VsdycsIGNlbGxXaWR0aCwgJ21pc3MnLCBtaXNzZWRXaWR0aCwgJ3RpZXIyQ291bnQnLCB0aWVyMkNvdW50KVxyXG4gICAgLy8gdGhpcy53aWR0aCAtPSBtaXNzZWRXaWR0aFxyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY2VsbFdpZHRoID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBpZiAoaXNOYU4odGhpcy5jZWxsV2lkdGhbMF0pKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsV2lkdGhbMF0gPSBjZWxsV2lkdGggKyBtaXNzZWRXaWR0aFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2VsbFdpZHRoWzBdICs9IG1pc3NlZFdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2VsbFdpZHRoID0ge31cclxuICAgICAgdGhpcy5jZWxsV2lkdGhbMF0gPSBjZWxsV2lkdGggKyBtaXNzZWRXaWR0aFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2VsbFdpZHRoXHJcbiAgfVxyXG4gIFxyXG4gIGdldENlbGxXaWR0aChpZHgpIHtcclxuICAgIHJldHVybiB0aGlzLmNlbGxXaWR0aFtpZHhdIHx8IHRoaXMuZGVmYXVsdENlbGxXaWR0aFxyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihDYW52YXNUYWJsZS5wcm90b3R5cGUsIERyYXdlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc1RhYmxlIiwiZXhwb3J0IGNvbnN0IERyYXdlciA9IHtcclxuICBkcmF3Q2VsbChpbnB1dCkge1xyXG4gICAgICBjb25zdCBmdW5jID0gKCkgPT4ge31cclxuICAgICAgY29uc3QgeyBjdHgsIGJnQ29sb3IsIHRDb2xvciwgdGV4dCwgZngsIGZ5LCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXRYID0gMCwgZHJhd0JlZm9yZVRleHQgPSBmdW5jLCBkcmF3QWZ0ZXJUZXh0ID0gZnVuYywgc2hvdWxkV3JhcFRleHQgPSBmYWxzZSB9ID0gaW5wdXRcclxuICAgICAgLy9iZ1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gYmdDb2xvclxyXG4gICAgICBjdHguZmlsbFJlY3QoZngsIGZ5LCB3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgICAgZHJhd0JlZm9yZVRleHQodGV4dClcclxuXHJcbiAgICAgIC8vdGV4dFxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdENvbG9yXHJcbiAgICAgIGlmIChzaG91bGRXcmFwVGV4dCkge1xyXG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aClcclxuICAgICAgICAgIGNvbnN0IHVwcGVyID0gdGV4dC5zdWJzdHIoMCwgbGVuZ3RoIC8gMilcclxuICAgICAgICAgIGNvbnN0IGxvd2VyID0gdGV4dC5zdWJzdHIobGVuZ3RoIC8gMiwgbGVuZ3RoKVxyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHVwcGVyLCBmeCArICh3aWR0aCAvIDIpLCBoZWlnaHQgKiAwLjI1ICsgZnkpXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQobG93ZXIsIGZ4ICsgKHdpZHRoIC8gMiksIGhlaWdodCAqIDAuNzUgKyBmeSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBmeCArICh3aWR0aCAvIDIpLCBoZWlnaHQgLyAyICsgZnksIHdpZHRoIC0gMilcclxuICAgICAgfVxyXG5cclxuICAgICAgZHJhd0FmdGVyVGV4dCh0ZXh0KVxyXG4gIH0sXHJcbiAgXHJcbiAgLyoqIOe5quijveacieWtkOWxpOeahOWNgOWhiueahOagvOWtkCAqL1xyXG4gIGRyYXdNdWx0aVN1YkNvbHVtbkNlbGwoe2N0eCwgcm93Q29kZXMsIG9mZnNldFgsIG9mZnNldFksIHNlY3Rpb25JZHgsIGRyYXdDZWxsUGFyYW1zfSkge1xyXG4gICAgICBpZiAodHlwZW9mIHJvd0NvZGVzICE9PSAnb2JqZWN0JykgdGhyb3cgYGVycm9yIGF0ICdkcmF3TXVsdGlTdWJDb2x1bW5DZWxsJy4gRXhwZWN0aW5nIGFuIGFycmF5IG9yIFNlY3Rpb24gb2JqZWN0LCBmb3VuZDogcm93Q29kZXM6ICR7cm93Q29kZXN9YFxyXG4gICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICAgIGxldCB0b3RhbFdpZHRoID0gMFxyXG4gICAgICByb3dDb2Rlcy5mb3JFYWNoKChjb2RlLCBjZWxsSWR4KSA9PiB7XHJcbiAgICAgICAgLy8gY29kZSBjb3VsZCBiZSAndGV4dCcgb3IgWyd0ZXh0JywgJ2NvbG9yJ11cclxuICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmdldENlbGxXaWR0aChzZWN0aW9uSWR4KVxyXG4gICAgICAgIGNvbnN0IGdyaWRPZmZzZXQgPSAoY2VsbElkeCA9PT0gcm93Q29kZXMubGVuZ3RoIC0gMSkgPyAwIDogMVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSAodHlwZW9mIGNvZGUgPT09ICdvYmplY3QnICYmIGNvZGVbMF0pIHx8IGNvZGVcclxuICAgICAgICBjb25zdCB0Q29sb3IgPSAodHlwZW9mIGNvZGUgPT09ICdvYmplY3QnICYmIGNvZGVbMV0pIHx8ICdibGFjaydcclxuICAgICAgICB0aGlzLmRyYXdDZWxsKHtcclxuICAgICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICAgIGJnQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdENvbG9yLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBmeDogb2Zmc2V0WCxcclxuICAgICAgICAgICAgZnk6IG9mZnNldFksXHJcbiAgICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGggLSBncmlkT2Zmc2V0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHQsXHJcbiAgICAgICAgICAgIC4uLmRyYXdDZWxsUGFyYW1zXHJcbiAgICAgICAgfSlcclxuICAgICAgICBvZmZzZXRYICs9IGNlbGxXaWR0aFxyXG4gICAgICAgIHRvdGFsV2lkdGggKz0gY2VsbFdpZHRoXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB0b3RhbFdpZHRoICsgMVxyXG4gIH0sXHJcbiAgXHJcbiAgLyoqIOe5quijveWWruS4gOWxpOeahOagvOWtkCAqL1xyXG4gIGRyYXdTaW5nbGVDb2x1bW5DZWxsKHtjdHgsIHJvd0NvZGVzLCBvZmZzZXRYLCBvZmZzZXRZLCByb3dJZHgsIHNlY3Rpb25JZHh9KSB7XHJcbiAgICAgIGNvbnN0IGNlbGxXaWR0aCA9IHRoaXMuZ2V0Q2VsbFdpZHRoKHNlY3Rpb25JZHgpXHJcbiAgICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxIZWlnaHRcclxuICAgICAgbGV0IGNlbGwsIHRDb2xvciwgdGV4dFxyXG4gICAgICBpZiAodHlwZW9mIHJvd0NvZGVzICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgdGV4dCA9IHJvd0NvZGVzXHJcbiAgICAgICAgICB0Q29sb3IgPSAnYmxhY2snXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjZWxsID0gKHR5cGVvZiByb3dDb2Rlc1swXSA9PT0gJ29iamVjdCcpID8gcm93Q29kZXNbMF0gOiByb3dDb2Rlc1xyXG4gICAgICAgICAgdENvbG9yID0gY2VsbFsxXSB8fCAnYmxhY2snXHJcbiAgICAgICAgICB0ZXh0ID0gY2VsbFswXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJhd0NlbGwoe1xyXG4gICAgICAgICAgY3R4OiBjdHgsXHJcbiAgICAgICAgICBiZ0NvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICB0Q29sb3IsXHJcbiAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgZng6IG9mZnNldFgsXHJcbiAgICAgICAgICBmeTogb2Zmc2V0WSxcclxuICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGNlbGxIZWlnaHRcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGNlbGxXaWR0aCArIDFcclxuICB9LFxyXG4gIC8qKiDnuaroo73nkIPomZ/moLwgKi9cclxuICBkcmF3QmFsbENlbGwoe2N0eCwgcm93Q29kZXMsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeH0pIHtcclxuICAgIGNvbnN0IGNlbGxXaWR0aCA9IHRoaXMuZ2V0Q2VsbFdpZHRoKHNlY3Rpb25JZHgpXHJcbiAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0XHJcblxyXG4gICAgY29uc3QgZHJhd0NpcmNsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB4ID0gb2Zmc2V0WCArICgoY2VsbFdpZHRoIC0gMS8qZ3JpZE9mZnNldCovKSAvIDIpXHJcbiAgICAgICAgY29uc3QgeSA9IGNlbGxIZWlnaHQgLyAyICsgb2Zmc2V0WVxyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDEwXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbidcclxuICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpXHJcbiAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgICAgIG9mZnNldFggKz0gY2VsbFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkcmF3Q2VsbFBhcmFtcyA9IHtcclxuICAgICAgICBkcmF3QmVmb3JlVGV4dDogZHJhd0NpcmNsZSxcclxuICAgICAgICB0Q29sb3I6ICd3aGl0ZSdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmRyYXdNdWx0aVN1YkNvbHVtbkNlbGwoe2N0eCwgcm93Q29kZXMsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeCwgZHJhd0NlbGxQYXJhbXN9KVxyXG4gIH0sXHJcbiAgLyoqIOe5quijveW4tumBuua8j+aineeahOagvOWtkCAqL1xyXG4gIGRyYXdMb3N0TGluZVN0YXR1c0NlbGwoe2N0eCwgcm93Q29kZXMsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeH0pIHtcclxuICAgICAgY29uc3QgY2VsbFdpZHRoID0gdGhpcy5jZWxsV2lkdGhzLmNlbGxXaWR0aFxyXG4gICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy50b3BNYXJnaW5cclxuICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IHRoaXMuY29tcHV0ZWREYXRhLmxlbmd0aFxyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xvc2VOdW0gPSB0aGlzLnRyZW5kSXNTaG93TG9zZU51bVxyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xvc2VMaW5lID0gdGhpcy50cmVuZElzU2hvd0xvc2VMaW5lXHJcblxyXG4gICAgICAvL2V4dHJhZGF0YVxyXG4gICAgICBjb25zdCBsb3N0Q29tYm9zQXJyID0gdGhpcy5leHRyYURhdGEubG9zdENvbWJvU3RhdHVzXHJcbiAgICAgIGlmICghbG9zdENvbWJvc0Fycikge1xyXG4gICAgICAgICAgdGhyb3cgXCJjYW4ndCBmaW5kIGxvc3RDb21ib3MgaW4gZXh0cmFEYXRhLlwiXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvd0NvZGVzLmZvckVhY2goKGFyciwgY2VsbElkeCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZ3JpZE9mZnNldCA9IChjZWxsSWR4ID09PSByb3dDb2Rlcy5sZW5ndGggLSAxKSA/IDAgOiAxXHJcbiAgICAgICAgICBjb25zdCBsYXN0TG9zZUNvbWJvID0gbG9zdENvbWJvc0FycltjZWxsSWR4XVxyXG4gICAgICAgICAgY29uc3QgaXNMb3NpbmcgPSByb3dJZHggPj0gKGRhdGFMZW5ndGggLSBsYXN0TG9zZUNvbWJvKVxyXG4gICAgICAgICAgY29uc3QgYmdDb2xvciA9ICh0cmVuZElzU2hvd0xvc2VMaW5lICYmIGlzTG9zaW5nKSA/ICdsaWdodGdyYXknIDogJ3doaXRlJ1xyXG4gICAgICAgICAgY29uc3QgdGV4dCA9IGFyclswXVxyXG4gICAgICAgICAgbGV0IHRDb2xvciA9IGFyclsxXVxyXG4gICAgICAgICAgaWYgKCF0cmVuZElzU2hvd0xvc2VOdW0gJiYgdHlwZW9mIHRleHQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgdENvbG9yID0gYmdDb2xvclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGhpdEJhbGxQYXJhbXMgPSBbXVxyXG5cclxuICAgICAgICAgIHRoaXMuZHJhd0NlbGwoe1xyXG4gICAgICAgICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgICAgICAgIGJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgdENvbG9yLFxyXG4gICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgZng6IG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgZnk6IG9mZnNldFksXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCAtIGdyaWRPZmZzZXQsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjZWxsSGVpZ2h0LFxyXG4gICAgICAgICAgICAgIC4uLmhpdEJhbGxQYXJhbXNcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBvZmZzZXRYICs9IGNlbGxXaWR0aFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gY2VsbFdpZHRoICogcm93Q29kZXMubGVuZ3RoICsgMVxyXG4gIH0sXHJcbiAgLyoqIOe5quijveW4tumBuua8j+aineWPiui1sOWLoue3mueahOagvOWtkCAqL1xyXG4gIGRyYXdMb3N0TGluZUNlbGwoe2N0eCwgcm93Q29kZXMsIG9mZnNldFgsIG9mZnNldFksIHJvd0lkeCwgc2VjdGlvbklkeH0pIHtcclxuICAgICAgY29uc3QgY2VsbFdpZHRoID0gdGhpcy5nZXRDZWxsV2lkdGgoc2VjdGlvbklkeClcclxuICAgICAgY29uc3QgY2VsbEhlaWdodCA9IHRoaXMuY2VsbEhlaWdodFxyXG4gICAgICBjb25zdCBkYXRhTGVuZ3RoID0gdGhpcy5saXN0Lmxlbmd0aFxyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0xvc2VOdW0gPSB0cnVlIC8vdGhpcy50cmVuZElzU2hvd0xvc2VOdW1cclxuICAgICAgY29uc3QgdHJlbmRJc1Nob3dMb3NlTGluZSA9IHRydWUgLy90aGlzLnRyZW5kSXNTaG93TG9zZUxpbmVcclxuXHJcbiAgICAgIC8vZXh0cmFkYXRhXHJcbiAgICAgIGNvbnN0IGxvc3RDb21ib3NBcnIgPSB0aGlzLmV4dHJhRGF0YS5sb3N0Q29tYm9zXHJcbiAgICAgIGNvbnN0IG51bUhlYXRBcnIgPSBbMiwwLDEsMCwxLDAsMiwwLDJdIC8vdGhpcy5leHRyYURhdGEubnVtSGVhdFxyXG4gICAgICBjb25zdCBoaXROdW1zQXJyID0gdGhpcy5leHRyYURhdGEuaGl0TnVtc1xyXG4gICAgICBpZiAoIWxvc3RDb21ib3NBcnIgfHwgIW51bUhlYXRBcnIgfHwgIWhpdE51bXNBcnIpIHtcclxuICAgICAgICAgIHRocm93IFwiY2FuJ3QgZmluZCBsb3N0Q29tYm9zIG9yIG51bUhlYXQgb3IgaGl0TnVtc0FyciBpbiBleHRyYURhdGEuXCJcclxuICAgICAgfVxyXG5cclxuICAgICAgcm93Q29kZXMuZm9yRWFjaCgoY29kZSwgY2VsbElkeCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZ3JpZE9mZnNldCA9IChjZWxsSWR4ID09PSByb3dDb2Rlcy5sZW5ndGggLSAxKSA/IDAgOiAxXHJcbiAgICAgICAgICBjb25zdCBpc1N1bSA9IGZhbHNlIC8vY2VsbElkeCA9PT0gMFxyXG4gICAgICAgICAgY29uc3QgbGFzdExvc2VDb21ibyA9IGxvc3RDb21ib3NBcnJbY2VsbElkeCAvKi0gMSovXSAvLzFzdCBjZWxsIGlzIHN1bSwgc28gb2Zmc2V0IDFcclxuICAgICAgICAgIGNvbnN0IGlzTG9zaW5nID0gcm93SWR4ID49IChkYXRhTGVuZ3RoIC0gbGFzdExvc2VDb21ibylcclxuICAgICAgICAgIGxldCBiZ0NvbG9yID0gKHRyZW5kSXNTaG93TG9zZUxpbmUgJiYgIWlzU3VtICYmIGlzTG9zaW5nKSA/ICdsaWdodGdyYXknIDogJ3doaXRlJ1xyXG4gICAgICAgICAgbGV0IHRDb2xvciA9ICdncmF5J1xyXG4gICAgICAgICAgaWYgKCF0cmVuZElzU2hvd0xvc2VOdW0gJiYgdHlwZW9mIGNvZGUgPT09ICdudW1iZXInICYmICFpc1N1bSkge1xyXG4gICAgICAgICAgICAgIHRDb2xvciA9IGJnQ29sb3JcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBoaXRCYWxsUGFyYW1zID0gW11cclxuXHJcbiAgICAgICAgICAvLyBpZiAoY29kZSA9PT0gMCkgeyAvL2hpdFxyXG4gICAgICAgICAgaWYgKGNlbGxJZHggPT0gcm93SWR4JTUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBudW0gPSBjZWxsSWR4ICsgMlxyXG4gICAgICAgICAgICAgIGNvbnN0IG51bUhlYXQgPSBudW1IZWF0QXJyW251bV1cclxuICAgICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbJ0RlZXBTa3lCbHVlJywgJ29yYW5nZScsICdyZWQnXVxyXG4gICAgICAgICAgICAgIGNvbnN0IGJhbGxDb2xvciA9IGNvbG9yc1tudW1IZWF0XVxyXG4gICAgICAgICAgICAgIGNvbnN0IHggPSBvZmZzZXRYICsgKChjZWxsV2lkdGggLSAxLypncmlkT2Zmc2V0Ki8pIC8gMilcclxuICAgICAgICAgICAgICBjb25zdCB5ID0gY2VsbEhlaWdodCAvIDIgKyBvZmZzZXRZXHJcbiAgICAgICAgICAgICAgaGl0TnVtc0Fycltyb3dJZHhdID0geyBiYWxsQ29sb3IsIHgsIHksIG51bSwgY3R4IH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmRyYXdDZWxsKHtcclxuICAgICAgICAgICAgICBjdHg6IGN0eCxcclxuICAgICAgICAgICAgICBiZ0NvbG9yLFxyXG4gICAgICAgICAgICAgIHRDb2xvcixcclxuICAgICAgICAgICAgICB0ZXh0OiBjb2RlLFxyXG4gICAgICAgICAgICAgIGZ4OiBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgIGZ5OiBvZmZzZXRZLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBjZWxsV2lkdGggLSBncmlkT2Zmc2V0LFxyXG4gICAgICAgICAgICAgIGhlaWdodDogY2VsbEhlaWdodCxcclxuICAgICAgICAgICAgICAuLi5oaXRCYWxsUGFyYW1zXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgb2Zmc2V0WCArPSBjZWxsV2lkdGhcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGNlbGxXaWR0aCAqIHJvd0NvZGVzLmxlbmd0aCArIDFcclxuICB9LFxyXG4gIC8qKue5quijveWFreWQiOW9qeeQg+iZn+agvCAqL1xyXG4gIGRyYXdNYXJrNk51bShjdHgsIHJvd0NvZGVzLCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcbiAgICAgIGNvbnN0IGNlbGxXaWR0aCA9IHRoaXMuY2VsbFdpZHRocy5jZWxsV2lkdGhcclxuICAgICAgY29uc3QgY2VsbEhlaWdodCA9IHRoaXMudG9wTWFyZ2luXHJcbiAgICAgIHJvd0NvZGVzLmZvckVhY2goKHJvdywgY2VsbElkeCkgPT4ge1xyXG4gICAgICAgICAgLy8gY29kZSBjb3VsZCBiZSAndGV4dCcgb3IgWyd0ZXh0JywgJ2NvbG9yJ11cclxuICAgICAgICAgIGNvbnN0IGdyaWRPZmZzZXQgPSAoY2VsbElkeCA9PT0gcm93Q29kZXMubGVuZ3RoIC0gMSkgPyAwIDogMVxyXG4gICAgICAgICAgY29uc3QgdGV4dCA9IHJvdy5jb2RlXHJcbiAgICAgICAgICBjb25zdCBiYWxsQ29sb3IgPSByb3cuY29sb3JcclxuICAgICAgICAgIGNvbnN0IGFuaW1hbCA9ICh0aGlzLmxvdHRlcnlOYW1lID09PSAnTUFSSzZfU0lOJyk/IHJvdy5hbmltYWwgOiB0aGlzLiR0KHJvdy5hbmltYWwpXHJcbiAgICAgICAgICBjb25zdCBmeCA9IG9mZnNldFhcclxuICAgICAgICAgIGNvbnN0IGZ5ID0gb2Zmc2V0WVxyXG4gICAgICAgICAgY29uc3Qgd2lkdGggPSBjZWxsV2lkdGggLSBncmlkT2Zmc2V0XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBjZWxsSGVpZ2h0XHJcblxyXG4gICAgICAgICAgLy9iZ1xyXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcclxuICAgICAgICAgIGN0eC5maWxsUmVjdChmeCwgZnksIHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgICAgICAgLy9iYWxsXHJcbiAgICAgICAgICBjb25zdCByYWRpdXMgPSA5XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYmFsbENvbG9yXHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgIGN0eC5hcmMoZnggKyAod2lkdGggLyAzKSwgZnkgKyAoaGVpZ2h0IC8gMiksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpXHJcbiAgICAgICAgICBjdHguZmlsbCgpXHJcbiAgICAgICAgICAvL2JhbGxUZXh0XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIGZ4ICsgKHdpZHRoIC8gMyksIGhlaWdodCAvIDIgKyBmeSlcclxuXHJcbiAgICAgICAgICAvL2FuaW1hbFxyXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjaydcclxuICAgICAgICAgIC8vIGN0eC5mb250ID0gY3R4LmZvbnQucmVwbGFjZSgvXFxkK3B4LywgXCIxNnB4XCIpO1xyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGFuaW1hbCwgZnggKyAod2lkdGggLyAxLjUpLCBoZWlnaHQgLyAyICsgZnkpXHJcblxyXG4gICAgICAgICAgb2Zmc2V0WCArPSBjZWxsV2lkdGhcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGNlbGxXaWR0aCAqIHJvd0NvZGVzLmxlbmd0aCArIDFcclxuICB9LFxyXG4gIC8qKiDnuaroo73otbDli6Lnt5ogKi9cclxuICBkcmF3VHJlbmRMaW5lKCkge1xyXG4gICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsSGVpZ2h0XHJcbiAgICAgIGNvbnN0IGhpdE51bXMgPSB0aGlzLmV4dHJhRGF0YS5oaXROdW1zXHJcbiAgICAgIGNvbnN0IHRyZW5kSXNTaG93TGluZSA9IHRydWUgLy90aGlzLnRyZW5kSXNTaG93TGluZVxyXG4gICAgICBjb25zdCB0cmVuZElzU2hvd0JhbGxzV2FybiA9IHRydWUgLy90aGlzLnRyZW5kSXNTaG93QmFsbHNXYXJuXHJcbiAgICAgIGlmICghaGl0TnVtcykge1xyXG4gICAgICAgICAgdGhyb3cgJ2NhblxcJ3QgZmluZCBoaXROdW1zIGluIGV4dHJhRGF0YS4nXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZHJhd0xpbmUgPSAoZnJvbSwgdG8pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZnQnLCBmcm9tICwgdG8pXHJcbiAgICAgICAgICBpZiAoIWZyb20gfHwgIXRvKSByZXR1cm5cclxuICAgICAgICAgIC8vZHJhdyBsaW5lc1xyXG4gICAgICAgICAgY29uc3QgY3R4ID0gZnJvbS5jdHhcclxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCdcclxuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyXHJcbiAgICAgICAgICBjdHgubW92ZVRvKGZyb20ueCwgZnJvbS55KVxyXG4gICAgICAgICAgaWYgKHRvLnkgPCBmcm9tLnkpIHtcclxuICAgICAgICAgICAgICBjdHgubGluZVRvKHRvLngsIHRvLnkgKyB0aGlzLmNhbnZhc0hlaWdodClcclxuXHJcbiAgICAgICAgICAgICAgdG8uY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgICAgdG8uY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCdcclxuICAgICAgICAgICAgICB0by5jdHgubGluZVdpZHRoID0gMlxyXG4gICAgICAgICAgICAgIHRvLmN0eC5tb3ZlVG8oZnJvbS54LCBmcm9tLnkgLSB0aGlzLmNhbnZhc0hlaWdodClcclxuICAgICAgICAgICAgICB0by5jdHgubGluZVRvKHRvLngsIHRvLnkpXHJcbiAgICAgICAgICAgICAgdG8uY3R4LnN0cm9rZSgpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGN0eC5saW5lVG8odG8ueCwgdG8ueSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGN0eC5zdHJva2UoKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRyYXdCYWxsID0gKGhpdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaScsIGhpdClcclxuICAgICAgICBpZiAodHlwZW9mIGhpdCAhPT0gJ29iamVjdCcpIHJldHVyblxyXG4gICAgICAgICAgLy9kcmF3IGJhbGxcclxuICAgICAgICAgIGNvbnN0IGN0eCA9IGhpdC5jdHhcclxuICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDEwXHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gKHRyZW5kSXNTaG93QmFsbHNXYXJuKSA/IGhpdC5iYWxsQ29sb3IgOiAnZ3JlZW4nXHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICAgIGN0eC5hcmMoaGl0LngsIGhpdC55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxyXG4gICAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgICAgICAgLy9kcmF3IHRleHRcclxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQoaGl0Lm51bSwgaGl0LngsIGhpdC55KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHJlbmRJc1Nob3dMaW5lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hpdE51bXMnLCBoaXROdW1zKVxyXG4gICAgICAgICAgZm9yIChjb25zdCBpIGluIGhpdE51bXMpIHtcclxuICAgICAgICAgICAgICBpZiAoIWhpdE51bXMuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXYgPSBoaXROdW1zW2kgLSAxXVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gaGl0TnVtc1tpXVxyXG4gICAgICAgICAgICAgICAgICBkcmF3TGluZShwcmV2LCBjdXJyZW50KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGNvbnN0IGN1cnJlbnQgb2YgaGl0TnVtcykge1xyXG4gICAgICAgICAgZHJhd0JhbGwoY3VycmVudClcclxuICAgICAgfVxyXG4gIH0sXHJcbn0iLCIvKiog5LiA5Y2A5aGK55qE5LiA6KGM6LOH5paZICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgLyoqIOS4gOWNgOWhiueahOS4gOihjOizh+aWmSAqL1xyXG4gICAgY29uc3RydWN0b3IoYXJyKSB7XHJcbiAgICAgICAgLyoqIChzdHJpbmcpIOiqv+eUqOeJueauiue5quijvWZ1bmN0aW9uICovXHJcbiAgICAgICAgdGhpcy5kcmF3RnVuYyA9IG51bGxcclxuICAgICAgICAvKiogKGFycmF5KSDos4fmlpnlhaflrrkgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhcnIgfHwgW11cclxuICAgIH1cclxuICAgIGdldCBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGhcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yqg5YWl6LOH5paZXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY29sb3JcclxuICAgICAqIEByZXR1cm4gdGhpc1xyXG4gICAgICovXHJcbiAgICBhZGQodGV4dCwgY29sb3IpIHtcclxuICAgICAgICBjb25zdCByZXMgPSAoY29sb3IpID8gW3RleHQsIGNvbG9yXSA6IHRleHRcclxuICAgICAgICB0aGlzLmNvbnRlbnQucHVzaChyZXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIHNldERyYXdGdW5jKGZ1bmMpIHtcclxuICAgICAgdGhpcy5kcmF3RnVuYyA9IGZ1bmNcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6Kit5a6a6LOH5paZXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gYXJyYXkgLSBhcnJheSBvZiAndGV4dCcgb3IgWyd0ZXh0JywgJ2NvbG9yJ11cclxuICAgICAqIEByZXR1cm4gdGhpc1xyXG4gICAgICovXHJcbiAgICBzZXRDb250ZW50KGFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gYXJyYXlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgY29uY2F0KGFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmNvbmNhdChhcnJheSlcclxuICAgIH1cclxuICAgIGZvckVhY2goZm4pIHtcclxuICAgICAgdGhpcy5jb250ZW50LmZvckVhY2goZm4pXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9