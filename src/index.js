import CanvasTable from "./libs/canvasTable";
import Section from "./libs/section";
import { headerData } from "./headerText";

export { CanvasTable, Section }

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
  cellWidth: { 0: 120, 1: 80 },
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

const canvases = canvasTable.draw()
canvases.forEach((e) => {
  dom.appendChild(e)
})