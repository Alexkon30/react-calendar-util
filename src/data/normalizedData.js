import { data } from "./data";
import {v4} from 'uuid'


export const normalizedData = data.map(item => {
    const newItem = { ...item, Days: [] }

    let index = 0
    for (let i = 1; i < 32; i++) {

        if (Number(item.Days[index].Date.split('-')[2]) === i) {
            let start = Date.parse(`${item.Days[index].Date}T${item.Days[index].Start.split('-').join(':')}`)
            let end = Date.parse(`${item.Days[index].Date}T${item.Days[index].End.split('-').join(':')}`)

            newItem.Days.push({value: (end - start)/ (1000 * 60), id: v4()})
            if (index < item.Days.length - 1) {
                index++
            }
        } else {
            newItem.Days.push({value: 0, id: v4()})
        }
    }

    newItem.total = newItem.Days.reduce((acc, item) => acc += item.value, 0)

    return newItem
})

console.log(normalizedData)
