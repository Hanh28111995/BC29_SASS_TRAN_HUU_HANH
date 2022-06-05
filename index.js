function Services(){
    this.getListProductApi = function(){
        return axios({
            url:"https://629cb2263798759975d9d6bf.mockapi.io/api/v1/products",
            method:"GET",
        });        
    }
}

