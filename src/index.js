import CanvasTable from "./libs/canvasTable";
import Section from "./libs/section";
import {
  headerData
} from "./headerText";

export {
  CanvasTable,
  Section
}

// mock api
const fillArray = (times, fn) => [...Array(times).keys()].map(() => fn())
const get1to9 = () => fillArray(5, () => Math.floor(Math.random() * 10)) // ['1', '6', '7', '7', '8']
const source = fillArray(90, () => get1to9())

// data calculation
let contentData = source.map((row, idx) => {
  const analyzeSingle = (num) => new Section().add('大', 'red').add('單', 'blue').add('質', 'red')
  const sum = row.reduce((sum, num) => sum + num)
  return [
    new Section().add(idx, null),
    new Section().setDrawFunc('drawLostLineCell').setContent(row),
    analyzeSingle(sum),
    ...row.map(analyzeSingle)
  ]
})

// draw
const dom = document.getElementById('myTable')

const canvasTable = new CanvasTable({
  cellWidth: {
    0: 120,
    1: 80
  },
  cellHeight: 32,
  cellsPerCanvas: 200,
  width: window.innerWidth - 18,
  defaultFontSize: 8,
  headerText: headerData,
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