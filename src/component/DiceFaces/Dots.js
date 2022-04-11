import React from 'react'
import { Eye, Nothing } from './Dice_Layout'

function Dots({data}) {
  return (
    <>
        {
            data && data.map((row, ri) => {
                return <tr key={ri}>
                    {
                        row.map((col, ci) => {
                            return col ? <Eye key={ci} /> : <Nothing key={ci} />
                        })
                    }
                </tr>
            })
        }
    </>
  )
}

export default Dots