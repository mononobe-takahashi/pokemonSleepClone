//ホーム画面の設定

const getSupportId = () => {
    
}

const setSupportId = (id) =>{
    let getNode = document.getElementById(id);
    let getText = getNode.textContent;
    let supportId = getText.split(':')[0] + ': 1234567890';
    // document.getElementById(id).textContent = supportId;
    getNode.textContent = supportId;
}

const clickMenu = () => {
    const createNode = 
}
