export function isBingo(clickedButons: Array<boolean>): boolean {
    if(clickedButons[0] && clickedButons[1] && clickedButons[2]){
      return true;
    }else if(clickedButons[3] && clickedButons[4] && clickedButons[5]){
      return true;
    }else if(clickedButons[6] && clickedButons[7] && clickedButons[8]){
      return true;
    }else if(clickedButons[0] && clickedButons[3] && clickedButons[6]){
      return true;
    }else if(clickedButons[1] && clickedButons[4] && clickedButons[7]){
      return true;
    }else if(clickedButons[2] && clickedButons[5] && clickedButons[8]){
      return true;
    }else if(clickedButons[0] && clickedButons[4] && clickedButons[8]){
      return true;
    }else if(clickedButons[2] && clickedButons[4] && clickedButons[6]){
      return true;
    }
    return false;
  }