import React from 'react'

const Transactions = () => {
  return (
    <div>
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>03-01-2024</td>
                <td>Salary</td>
                <td>$1000</td>
            </tr>
            <tr>
                <td>04-01-2024</td>
                <td>Rent</td>
                <td>$300</td>
            </tr>
            <tr>
                <td>05-01-2024</td>
                <td>Food</td>
                <td>$200</td>
            </tr>
            <tr>
                <td>10-01-2024</td>
                <td>Hair&Nails</td>
                <td>$30</td>
            </tr>
            <tr>
                <td>27-01-2024</td>
                <td>Entertainment</td>
                <td>$30</td>
            </tr>
        </table>
    </div>
  )
}

export default Transactions