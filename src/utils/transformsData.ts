import { days, mounth, stopsTitle } from "../constants/constans";

export function getTransormedDate (data: string) {
    const [day, mm , yy] = data.split('.')
    const month = mounth[mm as  keyof typeof mounth]
    const year = `20${yy}`
    
    const dayString = transformDay(`${year}.${mm}.${day}`)
    const fullDate = `${day} ${month} ${year}, ${dayString}`

    return {
        fullDate,
        dayString 
    }
}

function transformDay (date:string) {
    const day = new Date(date).toString().split(' ')[0]

    return days[day as keyof typeof days]
}

export function getStopsTitle (count: number) {
    const titleByCount = stopsTitle[count] !== undefined ? stopsTitle[count] : stopsTitle[0]
    return {
        count,
        titleByCount
    }
}





