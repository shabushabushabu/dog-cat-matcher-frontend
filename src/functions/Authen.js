function saveTokens(userid, token){
    window.localStorage.setItem("userid", userid)
    window.localStorage.setItem("usertoken", token)  
};

function removeTokens(){
    window.localStorage.removeItem("userid")
    window.localStorage.removeItem("usertoken")  
};

function isLogin(){
    if (window.localStorage.getItem("usertoken")) {
        return true
    } else {
        return false
    }
};

module.exports = {
    saveTokens,
    removeTokens,
    isLogin
  };