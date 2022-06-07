function Services() {
    this.getListProductApi = function () {
        return axios({
            url: "https://629cb2263798759975d9d6bf.mockapi.io/api/v1/products",
            method: "GET",
        });
    }
    this.deleteProductApi = function (id) {
        return axios({
            url: `https://629cb2263798759975d9d6bf.mockapi.io/api/v1/products/${id}`,
            method: "DELETE",
        });
    }
    this.addProductApi = function (product){
        return axios({
            url: "https://629cb2263798759975d9d6bf.mockapi.io/api/v1/products",
            method: "POST",
            data: product,
        });
    }
    this.getProductApi = function (id) {
        return axios({
            url: `https://629cb2263798759975d9d6bf.mockapi.io/api/v1/products/${id}`,
            method: "GET",
        });
    }
    this.updateProductApi = function (product) {
        return axios({
            url: `https://629cb2263798759975d9d6bf.mockapi.io/api/v1/products/${product.id}`,
            method: "PUT",
            data: product,
        });
    }
}

