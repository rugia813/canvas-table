export const Drawer = {
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