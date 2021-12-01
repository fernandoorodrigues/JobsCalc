module.exports = {
  remainingDays(job) {
    //calculo de tempo restante
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed();

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + Number(remainingDays);
    const dueDateInMs = createdDate.setDate(dueDay);

    const timeDiffInMs = dueDateInMs - Date.now();
    //trasnformar ms(millisegundos) em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.floor(timeDiffInMs / dayInMs); // Math.floor(arredonda para baixo) ao contrario do tofixed(que arredonda para o numero mais proximo para baixo ou cima)

    //restam x dias
    return dayDiff;
  },
  calculateBudget: (job, valueHour) => valueHour * job['total-hours']
};
