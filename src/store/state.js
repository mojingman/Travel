let defalutCity="杭州"

try {
  if(localStorage.city){
    defalutCity=localStorage.city
  }
}catch (e) {

}
export default {
  city:defalutCity
}
