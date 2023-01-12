


const contents = getNode('.contents');
const textField = getNode('#comment37');

function clearText(target) {
  target.value = "";
}

function handler(e){


  let target = e.target;

  // console.log(target);

  while(!attr(target,'data-name')){
    target = target.parentNode;

    if(target.nodeName === 'BODY'){
      target = null;
      return
    }
  }




  if(target.dataset.name === 'like') {
    console.log('like!');
    toggleClass(target,'active')
  }

  if(target.dataset.name === 'comment'){
    // console.log('댓글달기!');
    textField.focus();
  }


  /* 마우스로 전송을 누를 때 반응하는것 */
  if(target.dataset.name === 'send'){
    // console.log('보내기!');
    console.log(textField.value); 

    let template = `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">심선범</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `

    insertLast('.comment_container',template)

    clearText(textField)
  

    
  }


  /* 엔터키로 전송하는 법 */
  textField.addEventListener('keydown',(e)=>{

    if(e.keyCode === 13){
      textField.value
  
      let template = `
        <div class="id">
        <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
            <div class="comment_field">
                <div class="text_container">
                    <div class="name"><a href="#">심선범</a></div>
                    <div class="text_field">${textField.value}</div>
                </div>
            </div>
        </div>
        `
        insertLast('.comment_container',template);
  
        clearText(textField)
    }
  })
  


  }





contents.addEventListener('click',handler)









// const off = bindEvent(contents,'click','handler')
















