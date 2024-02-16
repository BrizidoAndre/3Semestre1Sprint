const Calendar = () => {

    const data = new Date()

    data = data.getDay();

    alert(data)

    // Array com os dias da semana abreviados
    var diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const semanaResumida = diasDaSemana[data]

    const produceDate = () => {
        for (let i = 0; i < 10; i++) {
            return (
                <></>
            )
        }
    }

    return (
        <>

        </>
    )
}

export default Calendar