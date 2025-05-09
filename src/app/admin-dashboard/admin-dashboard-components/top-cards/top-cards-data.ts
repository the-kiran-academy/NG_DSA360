export interface topcard {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string
}

export const topcards: topcard[] = [

  {
    bgcolor: 'success',   //0
    icon: 'bi bi-wallet',
    title: '0',
    subtitle: 'Total Syatem Users'
  },
  {
    bgcolor: 'success', //1
    icon: 'bi bi-wallet',
    title: '0',
    subtitle: 'Active Syatem Users'
  },
  {
    bgcolor: 'warning',  //2
    icon: 'bi bi-basket3',
    title: '0',
    subtitle: 'Deactivated Syatem Users'
  },
  {
    bgcolor: 'info',  //3
    icon: 'bi bi-person-add',
    title: '0',
    subtitle: 'Todays Registrations'
  },
  {
    bgcolor: 'info',  //4
    icon: 'bi bi-person-add',
    title: '0',
    subtitle: 'Monthly Registrations'
  },
  {
    bgcolor: 'info',  //5
    icon: 'bi bi-person-add',
    title: '0',
    subtitle: 'Weekly Registrations'
  },
  {
    bgcolor: 'danger',  //6
    icon: 'bi bi-hourglass-split',
    title: '0',
    subtitle: 'DSA Registration On Pending'
  }

]
