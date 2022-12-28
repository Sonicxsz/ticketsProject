 const month = ['янр', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
 const days = {
    Mon: 'ПН',
    Tue: 'ВТ',
    Wed: 'СР',
    Thu: 'ЧТ',
    Fri: 'ПТ',
    Sat: 'СБ',
    Sun: 'ВС' 

 }



function getTransormDate (data: string) {
    const [day, mm , yy] = data.split('.')
   
    const month = transformMounth(mm)
    const year = transformYear(yy)
    const fullDate = `${year}.${mm}.${day}`
    
    const dayString = transformDay(fullDate);
    return {
        year, 
        month,
        day,
        dayString 
    }
}

function transformMounth(mounth:string){ 
    return mounth[0] === '0' ? month[+mounth.slice(1) - 1] : month[+mounth - 1]
}
function transformYear(year:string){ 
    return `20${year}`
}

function transformDay (date:string) {
    const day = new Date(date).toString().split(' ')[0]

 
    return days[day as keyof typeof days]
  
   
}

export {getTransormDate}