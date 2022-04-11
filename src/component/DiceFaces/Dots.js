import React from 'react'
import { Eye, Nothing } from './Dice_Layout'

function Dots({data}) {
  return (
    <>
        {
            data && data.map((row, ri) => {
                return <tr key={ri}>
                    {
                        row.map((column, col_id) => {
                            return column ? <Eye key={col_id} /> : <Nothing key={col_id} />
                        })
                    }
                </tr>
            })
        }
    </>
  )
}

export default Dots