import React from 'react'

function StatisticLine({ value, text }) {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
  )
}

export default StatisticLine