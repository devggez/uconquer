'use client'
import { Card } from '@radix-ui/themes'
import React from 'react'
import {ResponsiveContainer, BarChart, XAxis, YAxis, Bar} from 'recharts'

interface Props{
    week1: number,
    week2: number,
    week3: number,
    week4: number,

}

const IssueChart = ({week1,week2,week3,week4} : Props) => {
    const data = [
        { label: 'week 4', value: week4},
        { label: 'week 3', value: week3},
        { label: 'week 2', value: week2},
        { label: 'week 1', value: week1},
    ]

  return (
    <div>
        <Card>
            <ResponsiveContainer width='100%' height={200}>
                <BarChart data={data}>
                    <XAxis dataKey="label"></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey='value' barSize={50} fill='rgb(251, 146, 60)'></Bar>
                </BarChart>
            </ResponsiveContainer>
        </Card>

    </div>
  )
}

export default IssueChart