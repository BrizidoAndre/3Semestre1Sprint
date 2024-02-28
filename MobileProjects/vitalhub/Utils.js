// Funções de data

export const getToday = () => {

    const date = new Date();

    let dateTitle = date.toLocaleString('default', { month: 'long', year: 'numeric' })

    dateTitle = dateTitle[0].toUpperCase() + dateTitle.slice(1,100)

    return dateTitle;
}