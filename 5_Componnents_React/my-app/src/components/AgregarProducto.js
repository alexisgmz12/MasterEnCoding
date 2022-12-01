// import {
//     useState
// } from 'react';

function AgregarProducto() {
    // const [text, setTexto] = useState(props.texto);
    // const [edad, setEdad] = useState(props.texto);
    // console.log(text,edad)
    return ( 
        <>
        <div class = "mt-3 d-flex justify-content-around">
            <h2 class = "modal-title"
            id = "titleAddProduct" > AgregarProducto </h2> 
        </div>
        <div class = "modal-body p-5 text-left">
            <div class = "form-group">
                <label > Nombre del producto < sup class = "text-danger" > * </sup></label>
            </div>
            <div class = "form-group__content" >
                <input type = "text"
                id = "productNameAddNewProduct"
                class =  "form-control formProduct"/>
            </div> 
        </div>



        <div class = "d-none" >
            <label > Product Url < sup class = "text-danger" > * </sup></label>
        </div>
        <div class = "form-group__content" >

            <input type = "text"
            class = "form-control formProduct"
            name = "productUrl"
            readonly required />
        </div>

        <div class = "form-group" >

            <label > Categoria principal del producto </label>
     
        </div>
        <div class = "form-group__content" >

            <select class = "form-control formProduct mt-2"
                id = "productSubCategoryAddNewProduct"
                name = "productCategory" >
                <option >
                None </option> 
                <option
                value = "categoria" > 
                </option>
            </select> 
        </div> 
        <div class = "d-flex justify-content-center" >
            <button 
        
            class = "mt-2 btn-primary" > Agregar categoria </button>
         </div>



        <div class = "form-group" >
            <label > Categoria secundaria del producto </label> 
            <div class = "form-group__content" >
                <select class = "form-control formProduct mt-2"
                id = "productSubCategoryAddNewProduct"
                name = "productCategory" >
                    <option> None </option> 
                    <option>
                    </option> 
                </select> 
        
                <div class = "d-flex justify-content-center" >
                <button 
                class = "mt-2 btn-primary" > Agregar subcategoria </button> 
                </div>
            </div> 
        </div>

        <div class = "form-group" >
        <label> Foto principal del producto(300 px X 300 px)</label >
        </div>
        </>

    )
}

export default AgregarProducto;