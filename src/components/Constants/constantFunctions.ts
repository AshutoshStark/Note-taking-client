import Swal from "sweetalert2"

export function GradePalat(){
  const colo = [
    ['#f3077d','#e094f7'],
    ['#0567ff','#5be7ff'],
    ['#e437ed','#fb6327'],
    ['#fe1e7a','#fa9530'],
    ['#f295d2','#f24e66'],
    ['#eea5e9','#b7f0f5'],
    ['#b70e45','#d692ff'],
    ['#800080','#ffc0fb'],
    ['#36d1dc','#5b86e5'],
    ['#0575e6','021b79']
  ]
  function getRand(){
    return Math.floor(Math.random()* 9)
  }
  return colo[getRand()]
} 

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast:any) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export function WishUser(time:any){
  if(time.getHours()>0 && time.getHours() <1){
    return "Good Morning"
  }
  if(time.getHours()>12 && time.getHours() <17){
    return "Good After Noon"
  }
  if(time.getHours()>17 && time.getHours() <23){
    return "Good Evening"
  }
}

export function Day(Date:any){
  if(Date === 1){
    return "MOnday"
  }
  if(Date === 2){
    return "Tuseday"
  }
  if(Date === 3){
    return "Wednessday"
  }
  if(Date === 4){
    return "Thursday"
  }
  if(Date === 5){
    return "Friday"
  }
  if(Date === 6){
    return "Saturday"
  }
  if(Date === 7){
    return "Sunday"
  }
}