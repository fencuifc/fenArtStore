const dev = true;
const serviceUrl = "http://www.ffeni.com/fen/assets/";


/*return dispatch =>  {
    fetch(menuUrl).then(
        function(response){
            let j = response.json();
            return j;
        }
    ).then(
       function(json){
            return dispatch(
                callBackFuc(json)
            );
       }
    );
};*/
/*const fetchPost = (url, callBack) => {
    return dispatch => {
        return fetch(url).then(response => response.json()).then(json => dispatch(callBack(json)));
    };
};*/
export const urls = {
	storeUrl:  dev ? '../../assets/store.json' : serviceUrl + 'store.json',
	menuUrl: dev ? '../../assets/menu.json' : serviceUrl + 'menu.json',
	addressInfo: dev ? '../../assets/addressInfo.json' : serviceUrl + 'addressInfo.json'
};
export const fetchPost = (url, callBackFuc) => {
    return async dispatch => {
        let response = await fetch(url);
        let data = await response.json();
        return dispatch(callBackFuc(data));
    }
};

