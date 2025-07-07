function colo(){
    let color:any = ["#f2a1dd","dba1f2",""]
    const random = Math.floor(Math.random() * colo.length);
    console.log(random, color[random]);
    return color[random]
  }

  export default colo;