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